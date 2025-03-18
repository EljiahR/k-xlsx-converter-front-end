import styles from "@/styles/CallUps.module.css";
import { IEmployeeBO } from "src/app/_lib/types/shiftTypes";

interface Props {
  positionName: string,
  people: IEmployeeBO[]
}

const CallUps = ({ positionName, people }: Props) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={positionName + person.name.firstName + person.name.lastName}
      >
        <p className="position">
          {person.originalPosition.split(" ")[0].replace("Front", "File")}:
        </p>
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

export default CallUps;
