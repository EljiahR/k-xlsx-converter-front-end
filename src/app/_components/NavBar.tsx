import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import { useState } from "react";
import { generatePdf } from "../_lib/helpers/pdfGenerator";
import { useAppSelector } from "../_lib/redux/hooks";

const NavBar = ({
  handleCurrentDay,
  handleFileInput,
  handleTestShifts,
  handleJsonInput,
  page,
  handlePage,
  shifts
}) => {
  const [defaultToReport, setDefaultToReport] = useState(true);
  const currentDay = useAppSelector((state) => state.shifts.day);


  const handlePdfGenerator = () => {
    generatePdf(shifts[currentDay]);
  }
  
  return (
    <div id={styles["navbar"]}>
      <Link href="/" passHref>
        <button>Go Back</button>
      </Link>
      <input id="input" type="file" onChange={handleFileInput}></input>
      <button onClick={handleTestShifts}>Use Test File</button>
      <button onClick={handleJsonInput}>Use Json</button>
      <div>
        {shifts && (
          <div id="report-controls">
            <select name="weekdays" id="weekdays" onChange={(e) => handleCurrentDay(e, defaultToReport)}>
              {shifts.map((day, index) => {
                return (
                  <option key={day.date} value={index}>{day.day}</option>
                )
              })}
            </select>
            <button onClick={handlePdfGenerator}>Print</button>
          </div>
          
        )}
      </div>
    </div>
  );
};
export default NavBar;
