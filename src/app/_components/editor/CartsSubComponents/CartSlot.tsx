import checkCartErrors from "../../../_lib/helpers/checkCartErrors";
import styles from "@/styles/Carts.module.css";
import { addMinutesToBreak } from "../../../_lib/helpers/timeFunctions";
import { BaggerInfo, CartSlotProps } from "../../../_lib/types/cartTypes";
import { IEmployeeBO } from "../../../_lib/types/shiftTypes";
import { editCartSlot, toggleCartSlotEdit } from "../../../_lib/redux/shiftsSlice";
import { useAppDispatch } from "../../../_lib/redux/hooks";

const CartSlot = ({
  index,
  pos,
  name,
  handleOnDrag,
  handleOnDrop,
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
    
    return (
      <input
        className={`${styles["bagger-slot"]} ${name == selectedBagger && selectedBagger != "" ? styles["name-highlight"] : ""} ${checkCartErrors(baggerInfo, time, carts[index], index > 0 ? carts[index - 1] : null, index < 35 ? carts[index + 1] : null)}`}
        draggable="true"
        id={`${index}:${pos}`}
        value={name}
        onDragStart={(e) => handleOnDrag(e, name)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleOnDrop(e)}
        onFocus={() => dispatch(toggleCartSlotEdit({index, pos, name}))}
        onChange={(e) => dispatch(editCartSlot({pos, index, newValue: e.target.value}))}
      />
    );
};

export default CartSlot;