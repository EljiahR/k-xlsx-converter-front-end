import jsPDF from "jspdf";

const newPdf = new jsPDF({
    orientation: "p",
    format: "letter",
    unit: "px",
    hotfixes: ["px_scaling"],
});
for (let i = 0; i < 2; i++) {
    newPdf.addPage();
};

export default newPdf;