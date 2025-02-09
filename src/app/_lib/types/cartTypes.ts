import { SubshiftBO } from "../dtoToBO";

interface BaggerInfo {
    name: string,
    break1: string,
    lunch1: string,
    lunch2: string,
    break2: string,
    subShift?: SubshiftBO
  }
  
  interface BaggerCartInfo {
    start: string,
    end: string,
    break1: string,
    lunch1: string,
    lunch2: string,
    break2: string,
    subShift?: SubshiftBO
  }

  export type {BaggerInfo, BaggerCartInfo};