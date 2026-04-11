import { jsPDF} from "jspdf";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import autoTable, { RowInput, Styles } from "jspdf-autotable";
import { joinWithLast } from "./formatFunctions";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";

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

const rightSubtitleStyles: Partial<Styles> = {
    halign: "center",
    fontSize: 14
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

    daily.setFontSize(8);
    daily.setTextColor("black");
    daily.text(weekday.date, 5, 10);
    
    autoTable(daily, {
        margin: 5,
        startY: 12,
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
            "name": { cellWidth: 32},
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

    const rightSide: RowInput[] = [];

    if (weekday.birthdays.length > 0) {
        const birthdays = "Happy Birthday " + joinWithLast([...weekday.birthdays], ', ', ' and ');
        rightSide.push([{
            content: birthdays,
            colSpan: 4
        }], [])
    }

    if (weekday.holidays.length > 0) {
        const holidays = "Happy " + joinWithLast([...weekday.holidays], ', ', ' and ');
        rightSide.push([{
            content: holidays,
            colSpan: 4
        }], [])
    }

    const callups = weekday.jobPositions.find((p) => p.name == "Call Ups")
        .shifts.map((s) => {
            return {
                pos: s.originalPosition.split(" ")[0].replace("Front", "File") + ": ", 
                name: s.name.firstName + " " + s.name.lastName, 
                start: s.shiftStart, 
                end: s.shiftEnd
            }
        });

    const liquor = weekday.jobPositions.find((p) => p.name == "Liquor Clerk")
        .shifts.map((s) => {
            return {
                pos: emptyString, 
                name: s.name.firstName + " " + s.name.lastName, 
                start: s.shiftStart, 
                end: s.shiftEnd
            }
        });

    autoTable(daily, {
        margin: 123,
        startY: 12,
        styles: { halign: "center" },
        columns: [
            { header: "pos", dataKey: "pos"},
            { header: "name", dataKey: "name"},
            { header: "start", dataKey: "start"},
            { header: "end", dataKey: "end"}
        ],
        columnStyles: {
            pos: { cellWidth: 20 },
            name: { cellWidth: 35 },
            start: { cellWidth: 15 },
            end: { cellWidth: 15 }            
        },
        showHead: "never",
        body: [
            ...rightSide,
            [{
                content: "Call Ups and Misc.",
                colSpan: 4,
                styles: rightSubtitleStyles
            }],
            ...callups, [],
            [{
                content: "Liquor",
                colSpan: 4,
                styles: rightSubtitleStyles
            }],
            ...liquor, [],
            [{
                content: "Management",
                colSpan: 4,
                styles: rightSubtitleStyles
            }],
            [],[],[],[],
            [{
                content: "Fuel Replenishment",
                colSpan: 4
            }]
        ]
    });

    daily.addPage();
    const carts = new jsPDF();

    carts.text("Lot, Lobby, Restroom Schedule", 10, 10);
    carts.text("Date: " + weekday.date, 10, 20);
    carts.setLineWidth(2);
    carts.line(10, 30, 200, 30);
    carts.text("Lot and Lobby", 10, 40);

    autoTable(carts, {
        columns: [
            { header: "time1", dataKey: "time1" },
            { header: "associate1", dataKey: "associate1"},
            { header: "associate2", dataKey: "associate2"},
            { header: "associate3", dataKey: "associate3"},
            { header: "associate4", dataKey: "associate4"},
            { header: "time2", dataKey: "time2" },
            { header: "associate5", dataKey: "associate5"},
            { header: "associate6", dataKey: "associate6"},
            { header: "associate7", dataKey: "associate7"},
            { header: "associate8", dataKey: "associate8"},
        ]
    });

    const cartsAsImage = carts.output("datauristring");
    daily.addPage();

    const height = daily.internal.pageSize.getHeight();
    const width = daily.internal.pageSize.getWidth();
    daily.addImage(cartsAsImage, "JPEG", 0, 0, width, height);
    daily.addPage();
    daily.addPage();
    daily.addImage(cartsAsImage, "JPEG", 0, 0, width, height);

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