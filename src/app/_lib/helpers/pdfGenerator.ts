import { jsPDF} from "jspdf";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import autoTable, { Styles } from "jspdf-autotable";

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
const subtitleStyles: Partial<Styles> = {
    halign: "center",
    fillColor: "#d9d9d9",
    fontSize: 8
};

export const generatePdf = (weekday: IWeekdayBO) => {
    console.log(weekday);
    const daily = new jsPDF();

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
    daily.setTextColor("black");
    daily.text(weekday.date, 10, 10);
    
    autoTable(daily, {
        startY: 20,
        styles: {
            lineWidth: 0.1,
            lineColor: [0, 0, 0],
            cellWidth: "auto",
            cellPadding: 1
        },
        bodyStyles: {
            fontSize: 8
        },
        columns,
        headStyles: {
            fontSize: 7,
            lineWidth: 0,
            halign: "center"
        },
        columnStyles: {
            "name": { cellWidth: 30},
            "start": { cellWidth: 13},
            "end": { cellWidth: 13},
            "break1": { cellWidth: 13, halign: "center" },
            "lunch": { cellWidth: 13, halign: "center" },
            "break2": { cellWidth: 13, halign: "center" },
            "fc": { cellWidth: 5},
            "fs": { cellWidth: 5},
            "o": { cellWidth: 5},
        },
        body: [
            [{
                content: "Front End Supervisors",
                colSpan: 9,
                styles: subtitleStyles
            }], 
            ...supervisors,
            [{
                content: "Front End Cashiers",
                colSpan: 9,
                styles: subtitleStyles
            }], 
            ...cashiers,
            [{
                content: "Self-Checkout",
                colSpan: 9,
                styles: subtitleStyles
            }], 
            ...scos,
            [{
                content: "Courtesy Clerks",
                colSpan: 9,
                styles: subtitleStyles
            }], 
            ...baggers,
            [{
                content: "Service Desk",
                colSpan: 9,
                styles: subtitleStyles
            }], 
            ...desk,
            [{
                content: "Fuel Center",
                colSpan: 9,
                styles: subtitleStyles
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
        break1: s.breakOne.time.replace(/\s[AP]M/g, "").replace(/:00/g, ""), 
        lunch: s.lunch.time.replace(/\s[AP]M/g, "").replace(/:00/g, ""), 
        break2: s.breakTwo.time.replace(/\s[AP]M/g, "").replace(/:00/g, ""),
        fc: emptyString,
        fs: emptyString,
        o: emptyString
    };
}