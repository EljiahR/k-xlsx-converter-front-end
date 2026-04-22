"use client";
// Template object for reseting the shifts state
import styles from "@/styles/App.module.css";
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

  useEffect(() => {
    document.title = "Report"
  }, []);

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

  const handleCurrentDay = (e) => {
    dispatch(setDay(e.target.value));
  };

  const handleTestShifts = () => {
    dispatch(setAsTest());
  }

  const handleJsonInput = () => {
    const jsonString = prompt("Input json");
    try {
      const obj = JSON.parse(jsonString);
      dispatch(setNewShifts(obj));
    } catch (e) {
      console.log("error parsing json");
    }
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
    <div className={styles["App"]}>
      <NavBar
        handleCurrentDay={handleCurrentDay}
        handleFileInput={handleFileInput}
        handleTestShifts={handleTestShifts}
        handleJsonInput={handleJsonInput}
        shifts={shifts}
      />

      {isLoading && <Loading />}
      {shifts && (
        <>
          <Board />
          <Carts />
        </>
        
      )}
    </div>
  );
};

export default Report;
