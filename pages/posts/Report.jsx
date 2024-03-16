import styles from "../styles/Report.module.css";
// Template object for reseting the shifts state
import initialShifts from "../functions/shiftsObject";
// Importing components
import Board from "./Board";
import Carts from "./Carts";
import Loading from "./Loading";
import NavBar from "./NavBar";
// Importing functions and hooks
//import html2canvas from "html2canvas";
import { toJpeg } from 'html-to-image';
import { jsPDF } from "jspdf";
import readXlsxFile from "read-excel-file";
//import svg2pdf from "svg2pdf"
import { getEmployees } from "../functions/getNewShifts";
import { useState, useEffect } from "react";

const Report = () => {
  const [data, setData] = useState(null);
  const [shifts, setShifts] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState("Board"); //Swap between board and carts

  const convertDivToPDF = (id) => {
    const input = document.getElementById(id);

      toJpeg(input,{backgroundColor:"white"}).then((dataUrl) => {

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
       pdf.output('dataurlnewwindow');
      //pdf.save("download.pdf");
    });
  };

  const handleFileInput = async (e) => {
    setIsLoading(true);
    try {
      const input = document.getElementById("input");
      const result = await readXlsxFile(input.files[0]);
      setData(result);
    } catch (err) {
      console.log(err.message);
    } finally {
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
    setShifts(JSON.parse(JSON.stringify(initialShifts)));
  };

  useEffect(() => {
    resetShifts();
  }, []);

  useEffect(() => {
    const newShiftsFunc = async () => {
      const newShifts = await getEmployees(data);
      console.log(newShifts);
      setShifts(newShifts);
    };
    if (data) {
      newShiftsFunc();
    }
  }, [data]);

  return (
    <div className="App">
      <NavBar
        handleCurrentDay={handleCurrentDay}
        handleFileInput={handleFileInput}
        data={data}
        setPage={setPage}
        page={page}
        convertDivToPDF={convertDivToPDF}
      />

      <Loading isLoading={isLoading} />
      {data && page === "Board" && (
        <div id="board" className={styles.sheet}>
          <Board
            currentDay={currentDay}
            shifts={shifts}
            setShifts={setShifts}
          />
        </div>
      )}
      {data && page === "Carts" && (
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
