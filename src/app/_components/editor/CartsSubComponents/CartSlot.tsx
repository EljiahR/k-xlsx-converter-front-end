import checkCartErrors from "../../../_lib/helpers/checkCartErrors";
import styles from "@/styles/Carts.module.css";
import { useEffect } from "react";
import { addMinutesToBreak } from "../../../_lib/helpers/timeFunctions";
import { BaggerInfo, CartSlotProps } from "../../../_lib/types/cartTypes";
import { IEmployeeBO } from "../../../_lib/types/shiftTypes";
import { editCartSlot, toggleCartSlotEdit } from "../../../_lib/redux/shiftsSlice";
import { useAppDispatch } from "../../../_lib/redux/hooks";

const CartSlot = ({
  index,
  pos,
  name,
  editable,
  handleOnDrag,
  handleOnDrop,
  inputReference,
  carts,
  selectedBagger,
  time,
  baggerList,
}: CartSlotProps) => {
  const dispatch = useAppDispatch();
  const baggerInfo: BaggerInfo = {
    name: name,
    break1: "",
    lunch1: "",
    lunch2: "",
    break2: "",
    subShift: null
  };

  const thisBagger: IEmployeeBO = baggerList.shifts.find(
    (bagger) => bagger.name.baggerName == name,
  );
  if (thisBagger) {
    baggerInfo.break1 = /:15|:45/.test(thisBagger.breakOne)
      ? addMinutesToBreak(thisBagger.breakOne, -15)
      : thisBagger.breakOne;
    baggerInfo.lunch1 = /:15|:45/.test(thisBagger.lunch)
      ? addMinutesToBreak(thisBagger.lunch, -15)
      : thisBagger.lunch;
    baggerInfo.lunch2 = /:15|:45/.test(thisBagger.lunch)
      ? addMinutesToBreak(thisBagger.lunch, 15)
      : thisBagger.lunch;
    baggerInfo.break2 = /:15|:45/.test(thisBagger.breakTwo)
      ? addMinutesToBreak(thisBagger.breakTwo, -15)
      : thisBagger.breakTwo;
    baggerInfo.subShift = thisBagger.subshift;
  }
  //yes I copied this from individualShifts
  useEffect(() => {
    if (carts[index][pos].editable) {
      inputReference.current.select();
    }
  }, [carts[index][pos].editable]);
  if (editable) {
    
      /* 
      Want to make transform into input on tab and
      draggable divs accessable coexist, current only 1 can
    */
    
    return (
      <input
        className={styles["bagger-slot"]}
        draggable="true"
        id={`${index}:${pos}`}
        value={name}
        onDragStart={(e) => handleOnDrag(e, name)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleOnDrop(e)}
        onBlur={() => dispatch(toggleCartSlotEdit({index, pos, name}))}
        onChange={(e) => dispatch(editCartSlot({pos, index, newValue: e.target.value}))}
        ref={inputReference}
      />
    );
  }
  return (
    <div
      className={`${styles["bagger-slot"]} ${name == selectedBagger && selectedBagger != "" ? styles["name-highlight"] : ""} ${checkCartErrors(baggerInfo, time, carts[index], index > 0 ? carts[index - 1] : null, index < 35 ? carts[index + 1] : null)}`}
      draggable="true"
      id={`${index}:${pos}`}
      onDragStart={(e) => handleOnDrag(e, name)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleOnDrop(e)}
      onClick={() => dispatch(toggleCartSlotEdit({index, pos, name}))}
      tabIndex={0}
    >
      {name}
    </div>
  );
};

export default CartSlot;