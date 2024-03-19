import styles from "../styles/Carts.module.css";
import lotTimes from "../functions/lotTimes";
import Restrooms from "./Restrooms";
import { addMinutesToBreak, compareTime, startToBreakAddMinutes, reformatTimes } from "../functions/timeFunctions";
import { useEffect, useRef, useState } from "react";

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
  baggerList
}) => {
  let break1 = "";
  let lunch1 = "";
  let lunch2 = ""
  let break2 = "";
  const thisBagger = baggerList.people.find(bagger => bagger["unique name"] == name)
  if(thisBagger){
    break1 = /:15|:45/.test(thisBagger.break1.time) ? addMinutesToBreak(thisBagger.break1.time, -15) : thisBagger.break1.time
    lunch1 = /:15|:45/.test(thisBagger.lunch.time) ? addMinutesToBreak(thisBagger.lunch.time, -15) : thisBagger.lunch.time
    lunch2 = /:15|:45/.test(thisBagger.lunch.time) ? addMinutesToBreak(thisBagger.lunch.time, 15) : thisBagger.lunch.time
    break2 = /:15|:45/.test(thisBagger.break2.time) ? addMinutesToBreak(thisBagger.break2.time, -15) : thisBagger.break2.time
    
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
      className={
        `${name == selectedBagger && selectedBagger != "" ? styles["name-highlight"] : ""} ${break1 == time || lunch1 == time || lunch2 == time || break2 == time ? styles.error : ""}`
      }
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

  let baggerInfo = {
    start: "",
    end: "",
    break1: "",
    lunch1: "",
    lunch2: "",
    break2: "",
  };

  let baggerList = shifts[currentDay].Shifts.find(
    (shift) => shift.name == "Front End Courtesy Clerk",
  );

  let bagger = baggerList.people.find(
    (person) => person["unique name"] == selectedBagger,
  );
  if (bagger) {
    let [start] = reformatTimes(bagger.start);
    let end = startToBreakAddMinutes(bagger.end, -30)
    baggerInfo.start = start;
    baggerInfo.end = end;
    
    baggerInfo.break1 = /:15|:45/.test(bagger.break1.time) ? addMinutesToBreak(bagger.break1.time, -15) : bagger.break1.time;
    baggerInfo.lunch1 = /:15|:45/.test(bagger.lunch.time) ? addMinutesToBreak(bagger.lunch.time, -15) : bagger.lunch.time;
    baggerInfo.lunch2 = /:15|:45/.test(bagger.lunch.time) ? addMinutesToBreak(bagger.lunch.time, 15) : bagger.lunch.time;
    baggerInfo.break2 = /:15|:45/.test(bagger.break2.time) ? addMinutesToBreak(bagger.break2.time, -15) : bagger.break2.time;
    
  }

  const inputReference = useRef(null);

  const handleOnClick = (index, pos, onOff, name) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].Carts;
    carts[index][pos].editable = onOff;

    

    setShifts(newShifts);
    setSelectedBagger(name);
  };

  const handleOnChange = (e, index, pos) => {
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].Carts;
    carts[index][pos].name = e.target.value;
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
    const dragged = document.getElementById(e.dataTransfer.getData("text"));
    let draggedIndex = dragged.id.split(":");
    let targetIndex = e.target.id.split(":");
    let newShifts = JSON.parse(JSON.stringify(shifts));
    let carts = newShifts[currentDay].Carts;
    carts[draggedIndex[0]][draggedIndex[1]].name = "";
    let draggedValue = "";

    const sortEmptyToEnd = (a, b) => {
      if (a.name === "") return 1;
      if (b.name === "") return -1;
      return 0;
    };
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
        <h4>{shifts[currentDay].Date}</h4>
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
               
                    time == baggerInfo.break1 ||
                    time == baggerInfo.lunch1 || time == baggerInfo.lunch2 ||
                    time == baggerInfo.break2
                      ? styles["break-highlight"]
                      : ""
                  } ${
                    time == baggerInfo.start ||
                    time == baggerInfo.end || (compareTime(time, baggerInfo.start) && compareTime(baggerInfo.end, time))
          
                      ? styles["shift-highlight"]
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
                    name={shifts[currentDay].Carts[index][i].name}
                    editable={shifts[currentDay].Carts[index][i].editable}
                    handleOnDrag={handleOnDrag}
                    handleOnDragOver={handleOnDragOver}
                    handleOnDrop={handleOnDrop}
                    handleOnClick={handleOnClick}
                    handleOnChange={handleOnChange}
                    inputReference={inputReference}
                    carts={shifts[currentDay].Carts}
                    selectedBagger={selectedBagger}
                    time={time}
                    baggerList={baggerList}
                  />
                ))}
              </>
            );
          })}
        </div>
        <Restrooms />
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Carts;
