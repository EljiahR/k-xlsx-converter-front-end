import styles from "@/styles/Carts.module.css";

interface ICartShift {
  name: string;
  editable: boolean;
}

interface BaggerInfo {
  name: string;
  break1: string;
  lunch1: string;
  lunch2: string;
  break2: string;
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

  return "";
}
