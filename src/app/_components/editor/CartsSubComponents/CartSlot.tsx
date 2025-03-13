import checkCartErrors from "src/app/_lib/helpers/checkCartErrors";
import styles from "@/styles/Carts.module.css";
import { useEffect } from "react";
import { addMinutesToBreak } from "src/app/_lib/helpers/timeFunctions";
import { BaggerInfo, CartSlotProps } from "src/app/_lib/types/cartTypes";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

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
}: CartSlotProps) => {
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
        value={name}
        onDragStart={(e) => handleOnDrag(e, name)}
        onDragOver={(e) => handleOnDragOver(e)}
        onDrop={(e) => handleOnDrop(e)}
        onBlur={() => handleOnClick(index, pos, name)}
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
      onDragStart={(e) => handleOnDrag(e, name)}
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      onClick={() => handleOnClick(index, pos, name)}
      tabIndex={0}
    >
      {name}
    </div>
  );
};

export default CartSlot;