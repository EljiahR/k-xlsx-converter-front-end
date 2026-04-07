import jsPDF from "jspdf";
import { IWeekdayBO } from "../types/shiftTypes";

const generatePdf = (weekday: IWeekdayBO) => {
    const daily = new jsPDF("p", "in", [8.5, 11]);

    
};