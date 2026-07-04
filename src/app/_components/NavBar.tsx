import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import { useState } from "react";
import { generatePdf } from "../_lib/helpers/pdfGenerator";
import { useAppDispatch, useAppSelector } from "../_lib/redux/hooks";
import { toggleShortCarts } from "../_lib/redux/shiftsSlice";

const NavBar = ({
  handleCurrentDay,
  handleFileInput,
  handleTestShifts,
  handleJsonInput,
  shifts
}) => {
  const currentDay = useAppSelector((state) => state.shifts.day);
  const isShortCarts = useAppSelector((state) => state.shifts.isShortCarts);
  const dispatch = useAppDispatch();

  const handleShortCartsToggle = () => {
    
    dispatch(toggleShortCarts(!isShortCarts));
  }

  const handlePdfGenerator = () => {
    generatePdf(shifts[currentDay], isShortCarts);
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
        <input id="shortcarts" type="checkbox" checked={isShortCarts} onChange={handleShortCartsToggle} />
        <label htmlFor="shortcarts">Use 15m Carts</label>
      </div>
      <div>
        {shifts && (
          <div id="report-controls">
            <select name="weekdays" id="weekdays" onChange={(e) => handleCurrentDay(e)}>
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
