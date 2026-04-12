"use client";
import styles from "../../../_styles/Report.module.css";
// Template object for reseting the shifts state
import initialShifts from "../../../_lib/test/shiftsObject";
// Importing components
import Board from "../../../_components/editor/Board";
import Carts from "../../../_components/editor/Carts";
import Loading from "../../../_components/Loading";
import NavBar from "../../../_components/NavBar";
import { getEmployees } from "../../../_lib/helpers/getNewShifts";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../_lib/redux/hooks";
import { setAsTest, setNewShifts, setShiftsNull, setDay } from "../../../_lib/redux/shiftsSlice";

const Report = () => {
  const [xlsxFile, setXlsxFile] = useState(null);
  const shifts = useAppSelector((state) => state.shifts.value);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState("Board"); //Swap between board and carts

  const handlePage = async (nextPage: string) => {
    setPage(nextPage);
  }

  const handleFileInput = async () => {
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
