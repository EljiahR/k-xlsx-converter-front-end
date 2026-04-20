import { jsPDF} from "jspdf";
import { IEmployeeBO, IWeekdayBO } from "../types/shiftTypes";
import autoTable, { Color, RowInput, Styles } from "jspdf-autotable";
import { joinWithLast } from "./formatFunctions";
import { lotTimes, utilityTimes } from "../lotTimes";
import path from "path";
import { employeeShiftSort, getDatesFromTimes } from "./timeFunctions";

const reportHeader = [
    { 
        name: "Name", start: "Start", end: "End", 
        break1: "Break", lunch: "Lunch", break2: "Break", 
        fc: "FC", fs: "FS", o: "O", cs: "CS"
    }
];

const emptyString = ""
const emptyArray = [];
const emptyRow = {name: emptyString, start: emptyString, end: emptyString, break1: emptyString, lunch: emptyString, break2: emptyString, fc: emptyString, fs: emptyString, o: emptyString, cs: emptyString}
const subtitleStyles: Partial<Styles> = {
    halign: "center",
    fillColor: "#d9d9d9",
    fontSize: 8
};

const rightSubtitleStyles: Partial<Styles> = {
    halign: "center",
    fontSize: 14
};

const blackLine: Color = [0, 0, 0];
const greyFill: Color = [200, 200, 200];

const cartHeaderStyles: Partial<Styles> = {
    lineWidth: 0.1,
    lineColor: blackLine,
    fontStyle: "bold"
};

const numberOfReportCols = 10;

export const generatePdf = (weekday: IWeekdayBO) => {
    console.log(weekday);
    let daily = new jsPDF();
    const dailyBody = [];

    const supervisors = weekday.jobPositions.find((j) => j.name == "Front End Supervisor")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    if (supervisors.length > 0) {
        supervisors.push(emptyRow, emptyRow)
        dailyBody.push(
            [{
                content: "Front End Supervisors",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...supervisors
        );
    }

    const cashiers = weekday.jobPositions.find((j) => j.name == "Front End Cashier")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    if (cashiers.length > 0) {
        cashiers.push(emptyRow, emptyRow)
        dailyBody.push(
            [{
                content: "Front End Cashiers",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...cashiers
        );
    }

    const scos = weekday.jobPositions.find((j) => j.name == "Front End SCO Cashier")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    if (scos.length > 0) {
        scos.push(emptyRow, emptyRow)
        dailyBody.push(
            [{
                content: "Self-Checkout",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...scos
        );
    }

    const baggers = weekday.jobPositions.find((j) => j.name == "Front End Courtesy Clerk")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    if (baggers.length > 0) {
        baggers.push(emptyRow, emptyRow)
        dailyBody.push(
            [{
                content: "Courtesy Clerks",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...baggers
        );
    }

    const desk = weekday.jobPositions.find((j) => j.name == "Front End Service Desk")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    if (desk.length > 0) {
        desk.push(emptyRow, emptyRow)
        dailyBody.push(
            [{
                content: "Service Desk",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...desk
        );
    }

    const fuel = weekday.jobPositions.find((j) => j.name == "Fuel Clerk")
        ?.shifts.map(convertJobPositionToRow) ?? [];
    
    if (fuel.length > 0) {
        dailyBody.push(
            [{
                content: "Fuel Center",
                colSpan: numberOfReportCols,
                styles: subtitleStyles
            }],
            ...fuel
        );
    }

    
    
    let reportBodyFontSize = 10;
    const minimumFontSize = 6
    let nameColWidth = 36;
    let reportLoopFlag = false;

    do {
        reportLoopFlag = false;
        console.log("Font size: " + reportBodyFontSize);
        daily.setFontSize(reportBodyFontSize);
        daily.setTextColor("black");
        daily.text(weekday.date, 5, 10);
        
        autoTable(daily, {
            alternateRowStyles: { fillColor: null },
            margin: 5,
            startY: 12,
            styles: {
                lineWidth: 0.1,
                lineColor: blackLine,
                cellWidth: "auto",
                cellPadding: 1
            },
            bodyStyles: {
                fontSize: reportBodyFontSize
            },
            head: reportHeader,
            headStyles: {
                fontSize: 7,
                lineWidth: 0,
                halign: "center"
            },
            columnStyles: {
                name: { cellWidth: nameColWidth },
                start: { cellWidth: 13 },
                end: { cellWidth: 13 },
                break1: { cellWidth: 13, halign: "center" },
                lunch: { cellWidth: 13, halign: "center" },
                break2: { cellWidth: 13, halign: "center" },
                fc: { cellWidth: 4, fontSize: 1 },
                fs: { cellWidth: 4, fontSize: 1 },
                o: { cellWidth: 4, fontSize: 1 },
                cs: { cellWidth: 4, fontSize: 1 }
            },
            body: dailyBody,
            didParseCell: (data) => {
                if ((data.column.index == 3 || data.column.index == 4 || data.column.index == 5) && data.cell.raw == emptyString && data.table.body[data.row.index].cells[0].raw != emptyString) {
                    data.cell.styles.fillColor = greyFill;
                }
            } 
        });

        if (daily.getNumberOfPages() > 1 && reportBodyFontSize >= minimumFontSize) {
            console.log("Too many pages, restarting with smaller font")
            daily = new jsPDF();
            reportBodyFontSize--;
            nameColWidth--;
            reportLoopFlag = true;
        }

    } while (reportLoopFlag && reportBodyFontSize >= minimumFontSize)
    
    const rightSide: RowInput[] = [];

    if (weekday.birthdays.length > 0) {
        const birthdays = "Happy Birthday " + joinWithLast([...weekday.birthdays], ', ', ' and ');
        rightSide.push([{
            content: birthdays,
            colSpan: 4,
            styles: { fontSize: 14 }
        }], [])
    }

    if (weekday.holidays.length > 0) {
        const holidays = "Happy " + joinWithLast([...weekday.holidays], ', ', ' and ');
        rightSide.push([{
            content: holidays,
            colSpan: 4,
            styles: { fontSize: 14 }
        }], [])
    }

    const callups = weekday.jobPositions.find((p) => p.name == "Call Ups")
        ?.shifts.map((s) => {
            return {
                pos: s.originalPosition.split(" ")[0].replace("Front", "File") + ": ", 
                name: s.name.firstName + " " + s.name.lastName, 
                start: s.shiftStart, 
                end: s.shiftEnd
            }
        }) ?? [];

    const liquor = weekday.jobPositions.find((p) => p.name == "Liquor Clerk")
        ?.shifts.map((s) => {
            return {
                pos: emptyString, 
                name: s.name.firstName + " " + s.name.lastName, 
                start: s.shiftStart, 
                end: s.shiftEnd
            }
        }) ?? [];

    autoTable(daily, {
        alternateRowStyles: { fillColor: null },
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
            [],[],[],
            [{
                content: "Fuel Replenishment",
                colSpan: 4
            }]
        ]
    });

    daily.addPage(); // Backside blank
    daily.addPage();
    // grabbing all register operators
    const registerOperators: IEmployeeBO[] = [];
    weekday.jobPositions.forEach((p) => {
        if (p.name != "Front End Courtesy Clerk" && p.name != "Call Ups") {
            // Okay look, I know I could write something to push everything in order, but why should I
            registerOperators.push(...p.shifts);
        }
    });
    registerOperators.sort(employeeShiftSort);

    // dare I loop yet a 3rd time?
    const operatorNames = registerOperators.map((o) => {
        return [
            o.name.firstName + " " + o.name.lastName,
            emptyString,
            emptyString
        ]
    })

    const blankRows = 50 - operatorNames.length;
    for (let i = 0 ; i < blankRows; i++) {
        operatorNames.push(emptyArray);
    };

    daily.setFontSize(8)
    daily.text(weekday.date, 5, 5);
    daily.setFontSize(14)

    autoTable(daily, {
        startY: 10,
        margin: 5,
        styles: { fontSize: 8, lineColor: blackLine, lineWidth: 0.1, cellPadding: 1, valign: "bottom" },
        head: [["Associate Name", "Policy Reviewed", "Associate Signature"]],
        headStyles: { fontSize: 10 },
        columnStyles: {
            1: { cellWidth: 18 }
        },
        body: [
            ...operatorNames,
            { content: "HELLO?"}
        ]
    });

    daily.addPage();
    
    const policyImage = new Image();
    policyImage.src = path.resolve("/cash-scam-policy.png");
    
    daily.addImage(policyImage, "PNG", 1, 1, 220, 300);

    
    
    const width = daily.internal.pageSize.getWidth();
    const cartsTitle = "Lot, Lobby, Restroom Schedule";
    const cartsTitleWidth = daily.getTextWidth(cartsTitle);
    const dateText = "Date: " + weekday.date;
    const dateTextWidth = daily.getTextWidth(dateText);
    const lotLobbyText = "Lot and Lobby";
    const lotLobbyTextWidth = daily.getTextWidth(lotLobbyText);
    const cartShiftLines = [];
    for (let i = 6; i < lotTimes.length; i += 2) {
        cartShiftLines.push({
            time1: lotTimes[i],
            associate1: weekday.carts[i][0].name,
            associate2: weekday.carts[i][1].name,
            associate3: weekday.carts[i][2].name,
            associate4: weekday.carts[i][3].name,
            time2: lotTimes[i + 1],
            associate5: weekday.carts[i + 1][0].name,
            associate6: weekday.carts[i + 1][1].name,
            associate7: weekday.carts[i + 1][2].name,
            associate8: weekday.carts[i + 1][3].name,
        });
    }

    const cartShiftColumns = [
        { header: "time1", dataKey: "time1" },
        { header: "associate1", dataKey: "associate1" },
        { header: "associate2", dataKey: "associate2" },
        { header: "associate3", dataKey: "associate3" },
        { header: "associate4", dataKey: "associate4" },
        { header: "time2", dataKey: "time2" },
        { header: "associate5", dataKey: "associate5" },
        { header: "associate6", dataKey: "associate6" },
        { header: "associate7", dataKey: "associate7" },
        { header: "associate8", dataKey: "associate8" },
    ];

    const cartShiftBody = [
        {
            content: "Time",
            styles: cartHeaderStyles
        },
        {
            content: "Associate",
            colSpan: 4,
            styles: cartHeaderStyles
        },
        {
            content: "Time",
            styles: cartHeaderStyles
        },
        {
            content: "Associate",
            colSpan: 4,
            styles: cartHeaderStyles
        }
    ];

    const restroomText = "Restroom";
    const restroomTextWidth = daily.getTextWidth(restroomText);

    const restroomTable = [];
    utilityTimes.forEach((time) => {
        restroomTable.push({
            time,
            associate: emptyString
        });
    });

    // daily.addPage();

    // I cant for the love of god get this package to duplicate a pageBreaks
    for (let j = 0; j < 2; j++) {
        daily.addPage();
        
        daily.text(cartsTitle, width - (cartsTitleWidth + 10), 10);
        
        daily.text(dateText, width - (dateTextWidth + 10), 20);
        daily.setLineWidth(1);
        daily.line(10, 30, 200, 30);

        daily.text("Lot and Lobby", (width - lotLobbyTextWidth) / 2, 40);


        autoTable(daily, {
            alternateRowStyles: { fillColor: null },
            startY: 50,
            margin: 5,
            columns: cartShiftColumns,
            headStyles: { cellWidth: 20, fillColor: null, textColor: "black" },
            columnStyles: {
                time1: { cellWidth: 19 },
                time2: { cellWidth: 19 },
            },
            showHead: "never",
            styles: { halign: "center", fontSize: 10, cellPadding: [2, 1], lineWidth: { top: 0.1, bottom: 0.1}, lineColor: blackLine },
            didParseCell: (data) => {
                if (data.column.index == 0 || data.column.index == 5 || data.row.index == 0) {
                    data.cell.styles.lineWidth = { top: 0.1, bottom: 0.1, left: 0.1, right: 0.1 }
                } else if (data.column.index == 1 || data.column.index == 6) {
                    data.cell.styles.lineWidth = { top: 0.1, bottom: 0.1, left: 0.1}
                } else if (data.column.index == 4 || data.column.index == 9) {
                    data.cell.styles.lineWidth = { top: 0.1, bottom: 0.1, right: 0.1}
                }
            },
            body: [
                cartShiftBody,
                ...cartShiftLines
            ]
        });

        daily.text(restroomText, (width - restroomTextWidth) / 2, 200);

        autoTable(daily, {
            alternateRowStyles: { fillColor: null },
            margin: 5,
            startY: 210,
            styles: { lineWidth: 0.1, lineColor: blackLine, halign: "center" },
            columns: [
                { header: "Time", dataKey: "time"},
                { header: "Associate", dataKey: "associate" }
            ],
            headStyles: {
                fillColor: null,
                textColor: "black"
            },
            columnStyles: {
                time: { cellWidth: 19 }
            },
            body: restroomTable
        });
        daily.addPage();
    }

    // daily.output("dataurlnewwindow");
    daily.save(weekday.date);
};

const convertJobPositionToRow = (s: IEmployeeBO) => {
    return {
        name: s.name.firstName + " " + s.name.lastName, 
        start: s.shiftStart, 
        end: s.shiftEnd, 
        break1: s.breakOne.replace(/\s[AP]M/g, "").replace(/:00/g, ""), 
        lunch: s.lunch.replace(/\s[AP]M/g, "").replace(/:00/g, ""), 
        break2: s.breakTwo.replace(/\s[AP]M/g, "").replace(/:00/g, ""),
        fc: emptyString,
        fs: emptyString,
        o: emptyString,
        cs: emptyString
    };
}