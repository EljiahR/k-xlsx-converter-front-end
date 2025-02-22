import jsPDF from "jspdf";

const getNewPDF = () => {
    const newPDF = new jsPDF({
        orientation: "p",
        format: "letter",
        unit: "px",
        hotfixes: ["px_scaling"],
    });
    for (let i = 0; i < 4; i++) {
        newPDF.addPage();
    };

    return newPDF;
}

export let starterPDF = getNewPDF();

export const refreshPDF = () => {
    starterPDF = getNewPDF();
}