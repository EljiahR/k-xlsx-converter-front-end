"use client";
import "@/styles/globals.css";
import styles from "@/styles/Report.module.css";
// Template object for reseting the shifts state
import initialShifts from "@/lib/shiftsObject";
// Importing components
import Board from "@/components/editor/Board";
import Carts from "@/components/editor/Carts";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";
// Importing functions and hooks
//import html2canvas from "html2canvas";
import { toJpeg } from "html-to-image";
import { jsPDF } from "jspdf";
//import svg2pdf from "svg2pdf"
import { getEmployees } from "@/lib/getNewShifts";
import { useState, useEffect } from "react";

const Report = () => {
  const [xlsxFile, setXlsxFile] = useState(null);
  const [shifts, setShifts] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState("Board"); //Swap between board and carts

  const convertDivToPDF = (id) => {
    const input = document.getElementById(id);

    toJpeg(input, { backgroundColor: "white" }).then((dataUrl) => {
      /*
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = "output.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        */
      const pdf = new jsPDF("p", "in", [8.5, 11]);

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
      pdf.output("dataurlnewwindow");
      //pdf.save("download.pdf");
    });
  };

  const handleFileInput = async (e) => {
    setIsLoading(true);
    try {
      const input = document.getElementById("input");
      setXlsxFile(input.files[0]);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const handleCurrentDay = (e) => {
    setCurrentDay(e.target.value);
  };

  /* 
    Filling shift object with data weekdays + shift array > 
    kind of shift + people array > individuals
  */

  const resetShifts = () => {
    setShifts(null);
  };

  useEffect(() => {
    resetShifts();
  }, []);

  useEffect(() => {
    const newShiftsFunc = async () => {
      try {
        const newShifts = await getEmployees(xlsxFile);
        console.log(newShifts);
        setShifts(newShifts);
      } catch (err) {
        setShifts(initialShifts);
        console.log(err);
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
        xlsxFile={xlsxFile}
        setPage={setPage}
        page={page}
        convertDivToPDF={convertDivToPDF}
      />

      {isLoading && <Loading isLoading={isLoading} />}
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
