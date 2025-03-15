"use client";
import "@/styles/globals.css";
import styles from "@/styles/Report.module.css";
// Template object for reseting the shifts state
import initialShifts from "../../../_lib/test/shiftsObject";
// Importing components
import Board from "../../../_components/editor/Board";
import Carts from "../../../_components/editor/Carts";
import Loading from "../../../_components/Loading";
import NavBar from "../../../_components/NavBar";
// Importing functions and hooks
//import html2canvas from "html2canvas";
import { toJpeg } from "html-to-image";
import { getEmployees } from "../../../_lib/helpers/getNewShifts";
import { useState, useEffect } from "react";
import {starterPDF, refreshPDF} from "src/app/_lib/helpers/defaultPDF";

import { useAppDispatch, useAppSelector } from "src/app/_lib/redux/hooks";
import { setAsTest, setNewShifts, setShiftsNull, setDay } from "src/app/_lib/redux/shiftsSlice";

const Report = () => {
  const [xlsxFile, setXlsxFile] = useState(null);
  const shifts = useAppSelector((state) => state.shifts.value);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState("Board"); //Swap between board and carts
  let pdf = starterPDF;

  const convertDivToPDF = async (id) => {
    const input = document.getElementById(id);
    
    input.classList.add("printable");
    await toJpeg(input, { backgroundColor: "white" }).then((dataUrl) => {
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

      if (page == "Board") {
        pdf.setPage(1);
        pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
      } else {
        pdf.setPage(3);
        pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
        pdf.setPage(5);
        pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
      }

      input.classList.remove("printable");
      //pdf.save("download.pdf");
    });
  };

  const printPdf = async (id: string) => {
    if (id == "carts") {
      const errors = document.querySelectorAll("div[class*='error']");
      if (errors.length > 0 && !confirm("There are currently errors. Are you sure you would like the print?")) {
        return;
      }
    }
    await convertDivToPDF(id);
    pdf.output("dataurlnewwindow");
  }

  const initializePdf = () => {
    refreshPDF();
  };

  const handlePage = async (nextPage: string) => {
    await convertDivToPDF(nextPage == "Carts" ? "board" : "carts")
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
    dispatch(setDay(e.target.value));
    initializePdf();
    if (defaultToReport && page != "Board") setPage("Board");
  };

  const handleTestShifts = () => {
    dispatch(setAsTest());
  }

  /* 
    Filling shift object with data weekdays + shift array > 
    kind of shift + people array > individuals
  */

  const resetShifts = () => {
    dispatch(setShiftsNull());
  };

  useEffect(() => {
    resetShifts();
    document.title = "Report";
  }, []);

  // REDUX: setNewShifts
  useEffect(() => {
    const newShiftsFunc = async () => {
      try {
        const newShifts = await getEmployees(xlsxFile);
        console.log(newShifts);
        dispatch(setNewShifts(newShifts));
        initializePdf();
      } catch (err) {
        dispatch(setNewShifts(initialShifts));
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
          <Board />
        </div>
      )}
      {shifts && page === "Carts" && (
        <div id="carts" className={styles.sheet}>
          <Carts />
        </div>
      )}
    </div>
  );
};

export default Report;
