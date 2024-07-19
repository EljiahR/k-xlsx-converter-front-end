import styles from "@/styles/CallUps.module.css";

const CallUps = ({ positionName, people }) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles["person"]}
        key={positionName + person.firstName + person.lastName}
      >
        <p className="position">{person.originalPosition}:</p>
        <p className="person-name">
          {person.firstName + " " + person.lastName}
        </p>
        <p className="start time">{person.shiftStart}</p>
        <p className="end time">{person.shiftEnd}</p>
      </div>
    );
  });
  return shifts;
};

export default CallUps;
