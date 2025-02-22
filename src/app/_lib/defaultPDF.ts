import jsPDF from "jspdf";

const getNewPDF = (): jsPDF => {
    const newPDF = new jsPDF({
        orientation: "p",
        format: "letter",
        unit: "px",
        hotfixes: ["px_scaling"],
    });
    for (let i = 0; i < 5; i++) {
        newPDF.addPage();
    };

    return newPDF;
}

export default getNewPDF;