import styles from "@/styles/IndividualShift.module.css";
import { IndividualShiftProps, ISelectedTime } from "../../../_lib/types/boardTypes";
import { useAppDispatch, useAppSelector } from "../../../_lib/redux/hooks";
import { checkTimeOverlap } from "../../../_lib/helpers/timeFunctions";
import { addToBreak, changeBreak, changeName, setSelectedTime } from "../../../_lib/redux/shiftsSlice";
import { ChangeEvent, KeyboardEvent } from "react";

const IndividualShift = ({person, section}: IndividualShiftProps) => {
    const selectedTime = useAppSelector((state) => state.shifts.selectedTime);
    const dispatch = useAppDispatch();

    const handleSelectedTimeChange = (newTime: string, breakType: string) => {
        dispatch(setSelectedTime({ time: newTime, section, breakType }));
    }

    const handleBreakChange = (e: ChangeEvent<HTMLInputElement>, breakType: string) => {
        dispatch(changeBreak({ employee: person, breakType, minutesToChangeTo: e.target.value}))
    }

    const handleKeyDownBreakChange= (e: KeyboardEvent<HTMLInputElement>, breakType: string, currentTarget: string) => {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            e.preventDefault();
            dispatch(addToBreak({ keyDown: e.key, employee: person, breakType, section, currentTarget }));
        }
    }
    
    return (
        <>
            <div className={styles["person-name"]  + " " + styles["shift-gap"]}>
                <input type="text" value={person.name.firstName} className={styles["shift-input"]} tabIndex={-1} readOnly />
                <input type="text" value={person.name.lastName} className={styles["shift-input"]} tabIndex={-1} readOnly />
            </div>
            <input type="text" value={person.shiftStart} className={styles["shift-input"]  + " " + styles["no-index"]} tabIndex={-1} readOnly />
            <input type="text" value={person.shiftEnd} className={styles["shift-input"] + " " + styles["shift-gap"]} tabIndex={-1} readOnly />
            <Break 
                breakValue={person.breakOne}
                breakType="breakOne"
                selectedTime={selectedTime}
                section={section}
                handleBreakChange={handleBreakChange}
                handleKeyDownBreakChange={handleKeyDownBreakChange}
                handleSelectedTimeChange={handleSelectedTimeChange}
            />
            <Break 
                breakValue={person.lunch}
                breakType="lunch"
                selectedTime={selectedTime}
                section={section}
                handleBreakChange={handleBreakChange}
                handleKeyDownBreakChange={handleKeyDownBreakChange}
                handleSelectedTimeChange={handleSelectedTimeChange}
            />
            <Break 
                breakValue={person.breakTwo}
                breakType="breakTwo"
                selectedTime={selectedTime}
                section={section}
                handleBreakChange={handleBreakChange}
                handleKeyDownBreakChange={handleKeyDownBreakChange}
                handleSelectedTimeChange={handleSelectedTimeChange}
            />
        </>
    )
}

interface BreakProps {
    breakValue: string;
    breakType: string;
    selectedTime: ISelectedTime;
    section: string;
    handleSelectedTimeChange: (newTime: string, breakType: string) => void;
    handleBreakChange: (e: ChangeEvent<HTMLInputElement>, breakType: string) => void;
    handleKeyDownBreakChange: (e: KeyboardEvent<HTMLInputElement>, breakType: string, currentTarget: string) => void;
};

const Break = ({ breakValue, breakType, selectedTime, section, handleSelectedTimeChange, handleBreakChange, handleKeyDownBreakChange }: BreakProps) => {
    return (
        <input 
            type="text" 
            value={breakValue} 
            className={styles["shift-input"] + " " + (selectedTime.section == section && checkTimeOverlap(breakValue, selectedTime, breakType) ? styles["selected-time"] : "")} 
            tabIndex={(breakValue.trim() == "" ? -1 : 0)} 
            onFocus={() => handleSelectedTimeChange(breakValue, breakType)}
            onChange={(e) => handleBreakChange(e, breakType)}
            onKeyDown={(e) => handleKeyDownBreakChange(e, breakType, breakValue)}
        />
    );
}

export default IndividualShift;