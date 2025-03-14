import styles from "@/styles/CallUps.module.css";

const CallUps = ({ positionName, people }) => {
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
        <p className="start time">{person.shiftStart}</p>
        <p className="end time">{person.shiftEnd}</p>
      </div>
    );
  });
  return shifts;
};

export default CallUps;
