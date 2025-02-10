import styles from "@/styles/Carts.module.css";
import { BaggerInfo } from "./types/cartTypes";
import { timeIsLaterThan } from "./timeFunctions";

interface ICartShift {
  name: string;
  editable: boolean;
}

export default function (
  baggerInfo: BaggerInfo,
  timeToCheck: string,
  currentRow: ICartShift[],
  rowAbove?: ICartShift[],
  rowBelow?: ICartShift[],
): string {
  if (baggerInfo.name == "") return "";
  if (
    baggerInfo.break1 == timeToCheck ||
    baggerInfo.lunch1 == timeToCheck ||
    baggerInfo.lunch2 == timeToCheck ||
    baggerInfo.break2 == timeToCheck
  ) {
    return styles.error;
  }
  if (rowAbove && rowAbove.some((slot) => slot.name == baggerInfo.name)) {
    return styles.error;
  }
  if (rowBelow && rowBelow.some((slot) => slot.name == baggerInfo.name)) {
    return styles.error;
  }
  if (
    currentRow.findIndex((slot) => slot.name == baggerInfo.name) !=
    currentRow.findLastIndex((slot) => slot.name == baggerInfo.name)
  ) {
    return styles.error;
  }
  if (baggerInfo.subShift != null && !timeIsLaterThan(baggerInfo.subShift.shiftStart, timeToCheck, true) && !timeIsLaterThan(timeToCheck, baggerInfo.subShift.shiftEnd)) {
    return styles.error;
  }

  return "";
}
