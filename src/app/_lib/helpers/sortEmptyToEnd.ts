import { ICartShift } from "../types/shiftTypes";

const sortEmptyToEnd = (a: ICartShift, b: ICartShift) => {
    if (a.name === "") return 1;
    if (b.name === "") return -1;
    return 0;
  };
export default sortEmptyToEnd;