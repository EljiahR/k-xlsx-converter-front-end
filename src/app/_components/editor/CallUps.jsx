import styles from "@/styles/CallUps.module.css"

const CallUps = ({ positionName, people }) => {
  const shifts = people.map((person) => {

    return (
      <div
        className={styles["person"]}
        key={positionName + person["first name"] + person["last name"]}
      >
        <p className="position">{person.callUpPosition}:</p>
        <p className="person-name">
          {person["first name"] + " " + person["last name"]}
        </p>
        <p className="start time">{person.start}</p>
        <p className="end time">{person.end}</p>
      </div>
    );
  });
  return shifts;
};

export default CallUps;
