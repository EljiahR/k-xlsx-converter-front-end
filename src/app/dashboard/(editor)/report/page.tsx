"use client";
import "@/styles/globals.css";
import styles from "@/styles/Report.module.css";
// Template object for reseting the shifts state
import initialShifts from "../../../_lib/shiftsObject";
// Importing components
import Board from "../../../_components/editor/Board";
import Carts from "../../../_components/editor/Carts";
import Loading from "../../../_components/Loading";
import NavBar from "../../../_components/NavBar";
// Importing functions and hooks
//import html2canvas from "html2canvas";
import { toJpeg } from "html-to-image";
import { jsPDF } from "jspdf";
//import svg2pdf from "svg2pdf"
import { getEmployees } from "../../../_lib/getNewShifts";
import { useState, useEffect } from "react";
import { expectedOutput } from "src/app/_lib/test/expectedOutput";


const Report = () => {
  const [xlsxFile, setXlsxFile] = useState(null);
  const [shifts, setShifts] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState("Board"); //Swap between board and carts
  const [pdf, setPdf] = useState<jsPDF | null>(null);

  const convertDivToPDF = (id) => {
    const input = document.getElementById(id);
    if (id == "carts") {
      const errors = document.querySelectorAll("div[class*='error']");
      if (errors.length > 0 && !confirm("There are currently errors. Are you sure you would like the print?")) {
        return;
      }
    }

    input.classList.add("printable");
    toJpeg(input, { backgroundColor: "white" }).then((dataUrl) => {
      /*
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = "output.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        */
      //const pdf = new jsPDF("p", "in", [8.5, 11]);

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      setPdf(previousPdf => {
        const newPdf = structuredClone(previousPdf);
        if (page == "Board") {
          newPdf.setPage(1);
          newPdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
        } else {
          newPdf.setPage(2);
          newPdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
          newPdf.setPage(3);
          newPdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
        }

        return newPdf;
      });
      
      
      input.classList.remove("printable");
      //pdf.save("download.pdf");
    });
  };

  const printPdf = (id: string) => {
    convertDivToPDF(id);
    pdf.output("dataurlnewwindow");
  }

  const initializePdf = () => {
    const newPdf = new jsPDF({
      orientation: "p",
      format: "letter",
      unit: "px",
      hotfixes: ["px_scaling"],
    });
    for (let i = 0; i < 2; i++) {
      newPdf.addPage();
    };

    setPdf(newPdf);
  };

  const handlePage = (nextPage: string) => {
    convertDivToPDF(nextPage == "Carts" ? "board" : "carts")
    setPage(nextPage);
  }

  const handleFileInput = async (e) => {
    setIsLoading(true);
    try {
      const input = document.getElementById("input") as HTMLInputElement;
      setXlsxFile(input.files[0]);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const handleCurrentDay = (e, defaultToReport: boolean) => {
    setCurrentDay(e.target.value);
    initializePdf();
    if (defaultToReport && page != "Board") setPage("Board");
  };


  const handleTestShifts = () => {
    setShifts(expectedOutput);
  }

  /* 
    Filling shift object with data weekdays + shift array > 
    kind of shift + people array > individuals
  */

  const resetShifts = () => {
    setShifts(null);
  };

  useEffect(() => {
    resetShifts();
    document.title = "Report";
  }, []);

  useEffect(() => {
    const newShiftsFunc = async () => {
      try {
        const newShifts = await getEmployees(xlsxFile);
        console.log(newShifts);
        setShifts(newShifts);
        initializePdf();
      } catch (err) {
        setShifts(initialShifts);
        console.log(err);
        console.log(initialShifts)
      } finally {
        setIsLoading(false);
      }
    };
    if (xlsxFile) {
      newShiftsFunc();
    }
  }, [xlsxFile]);

  return (
    <div className="App">
      <NavBar
        handleCurrentDay={handleCurrentDay}
        handleFileInput={handleFileInput}
        handleTestShifts={handleTestShifts}
        handlePage={handlePage}
        page={page}
        printPdf={printPdf}
        shifts={shifts}
      />

      {isLoading && <Loading />}
      {shifts && page === "Board" && (
        <div id="board" className={styles.sheet}>
          <Board
            currentDay={currentDay}
            shifts={shifts}
            setShifts={setShifts}
          />
        </div>
      )}
      {shifts && page === "Carts" && (
        <div id="carts" className={styles.sheet}>
          <Carts
            currentDay={currentDay}
            shifts={shifts}
            setShifts={setShifts}
          />
        </div>
      )}
    </div>
  );
};

export default Report;
