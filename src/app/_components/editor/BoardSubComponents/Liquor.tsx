import styles from "@/styles/Liquor.module.css";

const Liquor = ({ people, positionName }) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles.person}
        key={positionName + person.firstName + person.lastName}
      >
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

export default Liquor;
