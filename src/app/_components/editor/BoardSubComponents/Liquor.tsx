import styles from "@/styles/Liquor.module.css";

const Liquor = ({ people, positionName }) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles.person}
        key={positionName + person.name.firstName + person.name.lastName}
      >
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

export default Liquor;
