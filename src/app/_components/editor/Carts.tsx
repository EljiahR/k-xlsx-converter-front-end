import styles from "@/styles/Carts.module.css";
import { lotTimes } from "../../_lib/lotTimes";
import Restrooms from "./CartsSubComponents/Restrooms";
import {
  addMinutesToBreak,
  timeIsLaterThan,
  startToBreakAddMinutes,
  reformatTimes,
} from "../../_lib/helpers/timeFunctions";
import React, { useRef } from "react";
import { BaggerCartInfo, OnDragType, OnDropType } from "src/app/_lib/types/cartTypes";
import { IEmployeeBO, IJobPositionBO } from "src/app/_lib/types/shiftTypes";
import CartSlot from "./CartsSubComponents/CartSlot";
import { useAppDispatch, useAppSelector } from "src/app/_lib/redux/hooks";
import { dragCartSlot, setSelectedBagger } from "src/app/_lib/redux/shiftsSlice";
import { CartSlotDragAction } from "src/app/_lib/redux/reduxTypes";

const componentArray = [0, 1, 2, 3];

const Carts = () => {
  const shifts = useAppSelector((state) => state.shifts.value);
  const currentDay = useAppSelector((state) => state.shifts.day);
  const selectedBagger = useAppSelector((state) => state.shifts.selectedBagger)
  const dispatch = useAppDispatch();

  let baggerCartInfo: BaggerCartInfo = {
    start: "",
    end: "",
    break1: "",
    lunch1: "",
    lunch2: "",
    break2: "",
    subShift: null
  };

  let baggerList: IJobPositionBO = shifts[currentDay].jobPositions.find(
    (shift) => shift.name == "Front End Courtesy Clerk",
  );

  let bagger: IEmployeeBO = baggerList.shifts.find(
    (person) => person.name.baggerName == selectedBagger,
  );
  if (bagger) {
    let [start] = reformatTimes(bagger.shiftStart);
    let end = startToBreakAddMinutes(bagger.shiftEnd, -30);
    baggerCartInfo.start = start;
    baggerCartInfo.end = end;

    baggerCartInfo.break1 = /:15|:45/.test(bagger.breakOne.time)
      ? addMinutesToBreak(bagger.breakOne.time, -15)
      : bagger.breakOne.time;
    baggerCartInfo.lunch1 = /:15|:45/.test(bagger.lunch.time)
      ? addMinutesToBreak(bagger.lunch.time, -15)
      : bagger.lunch.time;
    baggerCartInfo.lunch2 = /:15|:45/.test(bagger.lunch.time)
      ? addMinutesToBreak(bagger.lunch.time, 15)
      : bagger.lunch.time;
    baggerCartInfo.break2 = /:15|:45/.test(bagger.breakTwo.time)
      ? addMinutesToBreak(bagger.breakTwo.time, -15)
      : bagger.breakTwo.time;
    baggerCartInfo.subShift = bagger.subshift;
  }

  const inputReference = useRef(null);

  const handleOnDrag: OnDragType = (e, name) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
    
    dispatch(setSelectedBagger(name));
  };

  const handleOnDrop: OnDropType = (e) => {
    const dragged = document.getElementById(e.dataTransfer.getData("text")) as HTMLInputElement;
    let draggedIndex = dragged.id.split(":");
    let targetIndex = e.currentTarget.id.split(":");
   
    const action: CartSlotDragAction = {
      targetIndex: parseInt(targetIndex[0]),
      targetPos: parseInt(targetIndex[1]),
      index: parseInt(draggedIndex[0]),
      pos: parseInt(draggedIndex[1]),
      newValue: dragged.nodeName == "INPUT" ? dragged.value : dragged.innerHTML
    }
    dispatch(dragCartSlot(action));
  };

  return (
    <div id={styles["cart-sheet"]}>
      <div id={styles["headers"]}>
        <h3>Lot, Lobby, Restroom Schedule</h3>
        <h3>Date: {shifts[currentDay].date}</h3>
      </div>
      <div id={styles["main"]}>
        <div id={styles["lot-header"]}>Lot and Lobby</div>
        <div id={styles.lot}>
          <div className={styles["lot-time-label"]}>Time</div>
          <div className={styles["lot-associate-label"]}>Associate</div>
          <div id={styles["second-time-label"]} className={styles["lot-time-label"]}>Time</div>
          <div className={styles["lot-associate-label"]}>Associate</div>
          {lotTimes.map((time, index) => {
            if (index > 5)
            return (
              <React.Fragment key={`${time}${index}`}>
                <div
                  className={`${styles["cart-time"]} ${
                    time == baggerCartInfo.break1 ||
                    time == baggerCartInfo.lunch1 ||
                    time == baggerCartInfo.lunch2 ||
                    time == baggerCartInfo.break2
                      ? styles["break-highlight"]
                      : ""
                  } ${
                    time == baggerCartInfo.start ||
                    time == baggerCartInfo.end ||
                    (timeIsLaterThan(time, baggerCartInfo.start) &&
                    timeIsLaterThan(baggerCartInfo.end, time))
                      /* ? (baggerCartInfo.subShift == null || !(timeIsLaterThan(time, baggerCartInfo.subShift.shiftStart, true) &&
                        timeIsLaterThan(baggerCartInfo.subShift.shiftEnd, time)))  */
                        ? styles["shift-highlight"]
                        /* : styles["utility-highlight"] */
                      : "" 
                  } ${
                    time.includes(":3") 
                    ? styles["right-time"]
                    : ""
                  }`}
                  id={time}
                >
                  <p>{time}</p>
                </div>
                {componentArray.map((i) => (
                  <React.Fragment key={`CartSlot${index}${i}`}>
                    <CartSlot
                      index={index}
                      pos={i}
                      name={shifts[currentDay].carts[index][i].name}
                      editable={shifts[currentDay].carts[index][i].editable}
                      handleOnDrag={handleOnDrag}
                      handleOnDrop={handleOnDrop}
                      inputReference={inputReference}
                      carts={shifts[currentDay].carts}
                      selectedBagger={selectedBagger}
                      time={time}
                      baggerList={baggerList}
                    />
                  </React.Fragment>
                  
                ))}
              </React.Fragment>
            );
          })}
        </div>
        <Restrooms utilityClerks={baggerList.shifts.filter((bagger) => bagger.subshift != null)} />
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Carts;
