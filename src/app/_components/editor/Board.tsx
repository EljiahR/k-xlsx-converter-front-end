import styles from "@/styles/Board.module.css";
import CallUps from "./BoardSubComponents/CallUps";
import IndividualShifts from "./BoardSubComponents/IndividualShifts";
import Liquor from "./BoardSubComponents/Liquor";
import { useAppSelector } from "../../_lib/redux/hooks";
import { selectCurrentDayAllDesk, selectCurrentDayBaggers, selectCurrentDayCallUps, selectCurrentDayFuel, selectCurrentDayLiquor, selectCurrentDayRegisters } from "../../_lib/redux/shiftsSlice";
import IndividualShift from "./BoardSubComponents/IndividualShift";
import { IEmployeeBO } from "../../_lib/types/shiftTypes";

const Board = () => {
  const registers = useAppSelector(selectCurrentDayRegisters)
  const baggers = useAppSelector(selectCurrentDayBaggers);
  const desk = useAppSelector(selectCurrentDayAllDesk)
  const fuel = useAppSelector(selectCurrentDayFuel);
  const callUps = useAppSelector(selectCurrentDayCallUps);
  const liquor = useAppSelector(selectCurrentDayLiquor);

  return (
    <div id="board">
      <BoardSection people={registers} section="register" sectionSpelledOut="Cashiers and Sco" />
      <BoardSection people={baggers} section="baggers" sectionSpelledOut="Baggers" />
      <BoardSection people={desk} section="desk" sectionSpelledOut="Desk" />
      <BoardSection people={fuel} section="fuel" sectionSpelledOut="Fuel" />
      <BoardSection people={callUps} section="call-ups" sectionSpelledOut="Call Ups" />
      <BoardSection people={liquor} section="liquor" sectionSpelledOut="Liquor" />
    </div>
  );
};
export default Board;

interface BoardSectionProps {
  people: IEmployeeBO[];
  section: string;
  sectionSpelledOut: string;
};

const BoardSection = ({people, section, sectionSpelledOut}: BoardSectionProps) => {
  return (
    <div id={sectionSpelledOut} className={styles["section"]}>
        <h2>{sectionSpelledOut}</h2>
        <div className={styles["shifts"]}>
          {people.map((person) => 
            <IndividualShift person={person} section={section} key={person.employeeId + person.name.firstName + person.name.lastName + section} />
          )}
        </div>
      </div>
  );
}
