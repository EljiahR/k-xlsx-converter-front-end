import jsPDF from "jspdf";
import { IWeekdayBO } from "../types/shiftTypes";
import autoTable from "jspdf-autotable";

export const generatePdf = (weekday: IWeekdayBO) => {
    const daily = new jsPDF("p", "in", [8.5, 11]);

    const cashiers = weekday.jobPositions.find((j) => j.name == "Front End Cashiers")
        .shifts.map((s) => {
            return ["", s.name.firstName + " " + s.name.lastName, s.shiftStart, s.shiftEnd, s.breakOne.time, s.lunch.time, s.breakTwo.time];
        });

    autoTable(daily, {
        head: [["Tasks", "Name", "Start", "End", "Break", "Lunch", "Break"]],
        body: cashiers
    });

    daily.output("dataurlnewwindow");
};