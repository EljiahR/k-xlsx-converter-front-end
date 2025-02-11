import styles from "../../_styles/Carts.module.css";
import {lotTimes} from "../../_lib/lotTimes";
import Restrooms from "./Restrooms";
import {
  addMinutesToBreak,
  timeIsLaterThan,
  startToBreakAddMinutes,
  reformatTimes,
} from "../../_lib/timeFunctions";
import { useEffect, useRef, useState } from "react";
import checkCartErrors from "../../_lib/checkCartErrors";
import { IEmployeeBO, IJobPositionBO, SubshiftBO } from "src/app/_lib/dtoToBO";
import { BaggerCartInfo, BaggerInfo } from "src/app/_lib/types/cartTypes";

const componentArray = [0, 1, 2, 3];

const CartSlot = ({
  index,
  pos,
  name,
  editable,
  handleOnDrag,
  handleOnDragOver,
  handleOnDrop,
  handleOnClick,
  handleOnChange,
  inputReference,
  carts,
  selectedBagger,
  time,
  baggerList,
}) => {
  const baggerInfo: BaggerInfo = {
    name: name,
    break1: "",
    lunch1: "",
    lunch2: "",
    break2: "",
    subShift: null
  };

  const thisBagger: IEmployeeBO = baggerList.shifts.find(
    (bagger) => bagger.baggerName == name,
  );
  if (thisBagger) {
    baggerInfo.break1 = /:15|:45/.test(thisBagger.breakOne.time)
      ? addMinutesToBreak(thisBagger.breakOne.time, -15)
      : thisBagger.breakOne.time;
    baggerInfo.lunch1 = /:15|:45/.test(thisBagger.lunch.time)
      ? addMinutesToBreak(thisBagger.lunch.time, -15)
      : thisBagger.lunch.time;
    baggerInfo.lunch2 = /:15|:45/.test(thisBagger.lunch.time)
      ? addMinutesToBreak(thisBagger.lunch.time, 15)
      : thisBagger.lunch.time;
    baggerInfo.break2 = /:15|:45/.test(thisBagger.breakTwo.time)
      ? addMinutesToBreak(thisBagger.breakTwo.time, -15)
      : thisBagger.breakTwo.time;
    baggerInfo.subShift = thisBagger.subshift;
  }
  //yes I copied this from individualShifts
  useEffect(() => {
    if (carts[index][pos].editable) {
      inputReference.current.select();
    }
  }, [carts[index][pos].editable]);
  if (editable) {
    {
      /* 
      Want to make transform into input on tab and
      draggable divs accessable coexist, current only 1 can
    */
    }
    return (
      <input
        draggable="true"
        id={`${index}:${pos}`}
        key={`${index}${pos}`}
        value={name}
        onDragStart={(e) => handleOnDrag(e)}
        onDragOver={(e) => handleOnDragOver(e)}
        onDrop={(e) => handleOnDrop(e)}
        onBlur={() => handleOnClick(index, pos, false, name)}
        onChange={(e) => handleOnChange(e, index, pos)}
        ref={inputReference}
      />
    );
  }
  return (
    <div
      className={`${name == selectedBagger && selectedBagger != "" ? styles["name-highlight"] : ""} ${checkCartErrors(baggerInfo, time, carts[index], index > 0 ? carts[index - 1] : null, index < 35 ? carts[index + 1] : null)}`}
      draggable="true"
      id={`${index}:${pos}`}
      key={`${index}${pos}`}
      onDragStart={(e) => handleOnDrag(e, name)}
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      onClick={() => handleOnClick(index, pos, true, name)}
      tabIndex={0}
    >
      {name}
    </div>
  );
};

const Carts = ({ currentDay, shifts, setShifts }) => {
  const [selectedBagger, setSelectedBagger] = useState("");

  const sortEmptyToEnd = (a, b) => {
    if (a.name === "") return 1;
    if (b.name === "") return -1;
    return 0;
  };

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
    (person) => person.baggerName == selectedBagger,
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

  const handleOnClick = (index, pos, onOff, name) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].carts;

    carts[index][pos].editable = onOff;
    if (!onOff) carts[index].sort(sortEmptyToEnd);
    setShifts(newShifts);
    setSelectedBagger(name);
  };

  const handleOnChange = (e, index, pos) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].carts;
    carts[index][pos].name = e.target.value;
    if (carts[index][pos].name == "") carts[index].sort(sortEmptyToEnd);
    setShifts(newShifts);
  };

  const handleOnDrag = (e, name) => {
    e.dataTransfer.setData("text", e.target.id);
    
    setSelectedBagger(name);
  };

  // Prevents some issue caused by default dragging behaviors
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    const dragged = document.getElementById(e.dataTransfer.getData("text")) as HTMLInputElement;
    let draggedIndex = dragged.id.split(":");
    let targetIndex = e.target.id.split(":");
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].carts;
    carts[draggedIndex[0]][draggedIndex[1]].name = "";
    let draggedValue = "";

    carts[draggedIndex[0]].sort(sortEmptyToEnd);
    if (dragged.nodeName == "INPUT") {
      draggedValue = dragged.value;
    } else {
      draggedValue = dragged.innerHTML;
    }
    carts[targetIndex[0]][targetIndex[1]].name = draggedValue;
    carts[targetIndex[0]].sort(sortEmptyToEnd);
    setShifts(newShifts);
  };

  return (
    <div id={styles["cart-sheet"]}>
      <div id="headers">
        <h2>Parking Lot & Restroom Cleaning Schedule</h2>
        <h4>{shifts[currentDay].date}</h4>
      </div>
      <div id={styles["main"]}>
        <div id={styles.lot}>
          <div id={styles["lot-header"]}>Parking Lot Schedule</div>
          <div id="lot-time-label">Time</div>
          <div id={styles["lot-associate-label"]}>Associate Name</div>
          {lotTimes.map((time, index) => {
            return (
              <>
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
                      ? (baggerCartInfo.subShift == null || !(timeIsLaterThan(time, baggerCartInfo.subShift.shiftStart, true) &&
                        timeIsLaterThan(baggerCartInfo.subShift.shiftEnd, time)))  
                        ? styles["shift-highlight"]
                        : styles["utility-highlight"]
                      : ""
                  }`}
                  id={time}
                  key={index}
                >
                  <p>{time}</p>
                </div>
                {componentArray.map((i) => (
                  <CartSlot
                    key={`CartSlot${index}${i}`}
                    index={index}
                    pos={i}
                    name={shifts[currentDay].carts[index][i].name}
                    editable={shifts[currentDay].carts[index][i].editable}
                    handleOnDrag={handleOnDrag}
                    handleOnDragOver={handleOnDragOver}
                    handleOnDrop={handleOnDrop}
                    handleOnClick={handleOnClick}
                    handleOnChange={handleOnChange}
                    inputReference={inputReference}
                    carts={shifts[currentDay].carts}
                    selectedBagger={selectedBagger}
                    time={time}
                    baggerList={baggerList}
                  />
                ))}
              </>
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
