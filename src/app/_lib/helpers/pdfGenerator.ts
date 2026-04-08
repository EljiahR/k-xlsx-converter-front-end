import { jsPDF} from "jspdf";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import autoTable from "jspdf-autotable";

const columns = [
    { header: "Name", dataKey: "name" },
    { header: "Start", dataKey: "start" },
    { header: "End", dataKey: "end" },
    { header: "Break", dataKey: "break1" },
    { header: "Lunch", dataKey: "lunch" },
    { header: "Break", dataKey: "break2" },
    { header: "FC", dataKey: "fc"},
    { header: "FS", dataKey: "fs"},
    { header: "O", dataKey: "o"},
];

const emptyString = ""
const emptyRow = {name: emptyString, start: emptyString, end: emptyString, break1: emptyString, lunch: emptyString, break2: emptyString, fc: emptyString, fs: emptyString, o: emptyString}

export const generatePdf = (weekday: IWeekdayBO) => {
    console.log(weekday);
    const daily = new jsPDF("p", "in", [8.5, 11]);

    const supervisors = weekday.jobPositions.find((j) => j.name == "Front End Supervisor")
        .shifts.map(convertJobPositionToRow);
    supervisors.push(emptyRow, emptyRow);

    const cashiers = weekday.jobPositions.find((j) => j.name == "Front End Cashier")
        .shifts.map(convertJobPositionToRow);
    cashiers.push(emptyRow, emptyRow);

    const scos = weekday.jobPositions.find((j) => j.name == "Front End SCO Cashier")
        .shifts.map(convertJobPositionToRow);
    scos.push(emptyRow, emptyRow);

    const baggers = weekday.jobPositions.find((j) => j.name == "Front End Courtesy Clerk")
        .shifts.map(convertJobPositionToRow);
    baggers.push(emptyRow, emptyRow);

    const desk = weekday.jobPositions.find((j) => j.name == "Front End Service Desk")
        .shifts.map(convertJobPositionToRow);
    desk.push(emptyRow, emptyRow);

    const fuel = weekday.jobPositions.find((j) => j.name == "Fuel Clerk")
        .shifts.map(convertJobPositionToRow);

    daily.setFontSize(16);
    daily.text("Sales Report - Q1 2026", 14, 15);
    
    autoTable(daily, {
        startY: 20,
        columns,
        body: [
            [{
                content: "Front End Supervisors",
                colSpan: 7
            }], 
            ...supervisors,
            [{
                content: "Front End Cashiers",
                colSpan: 7
            }], 
            ...cashiers,
            [{
                content: "Self-Checkout",
                colSpan: 7
            }], 
            ...scos,
            [{
                content: "Courtesy Clerks",
                colSpan: 7
            }], 
            ...baggers,
            [{
                content: "Service Desk",
                colSpan: 7
            }], 
            ...desk,
            [{
                content: "Fuel Center",
                colSpan: 7
            }], 
            ...fuel,
        ]
    });

    // daily.output("dataurlnewwindow");
    daily.save("pdfjsnewwindow");
};

const convertJobPositionToRow = (s: IEmployeeBO) => {
    return {
        name: s.name.firstName + " " + s.name.lastName, 
        start: s.shiftStart, 
        end: s.shiftEnd, 
        break1: s.breakOne.time, 
        lunch: s.lunch.time, 
        break2: s.breakTwo.time,
        fc: emptyString,
        fs: emptyString,
        o: emptyString
    };
}