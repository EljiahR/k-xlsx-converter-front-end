import styles from "@/styles/Liquor.module.css";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

interface Props {
  people: IEmployeeBO[],
  positionName: string
}

const Liquor = ({ people, positionName }: Props) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles.person}
        key={positionName + person.name.firstName + person.name.lastName}
      >
        <p className="person-name">
          {person.name.firstName + " " + person.name.lastName}
        </p>
        <p className="start time">{person.shiftStart.time}</p>
        <p className="end time">{person.shiftEnd.time}</p>
      </div>
    );
  });
  return shifts;
};

export default Liquor;
