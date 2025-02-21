import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import { useState } from "react";

const NavBar = ({
  convertDivToPDF,
  handleCurrentDay,
  handleFileInput,
  handleTestShifts,
  page,
  handlePage,
  shifts
}) => {
  const [defaultToReport, setDefaultToReport] = useState(true);
  
  return (
    <div id={styles["navbar"]}>
      <Link href="/" passHref>
        <button>Go Back</button>
      </Link>
      <input id="input" type="file" onChange={handleFileInput}></input>
      <button onClick={handleTestShifts}>Use Test File</button>
      <div>
        {shifts && (
          <div id="report-controls">
            <label htmlFor="report-default">Swap to Report?</label>
            <input id="report-default" type="checkbox" checked={defaultToReport} onClick={() => setDefaultToReport(!defaultToReport)} />
            <select name="weekdays" id="weekdays" onChange={(e) => handleCurrentDay(e, defaultToReport)}>
              {shifts.map((day, index) => {
                return (
                  <option key={day.date} value={index}>{day.day}</option>
                )
              })}
            </select>
            {page === "Board" && (
              <>
                <button onClick={() => handlePage("Carts")}>Carts</button>
                <button onClick={() => convertDivToPDF("board")}>Print</button>
              </>
            )}
            {page === "Carts" && (
              <>
                <button onClick={() => handlePage("Board")}>Report</button>
                <button onClick={() => convertDivToPDF("carts")}>Print</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
