import styles from "../styles/Liquor.module.css";
const Liquor = ({ people, positionName }) => {
  const shifts = people.map((person) => {
    return (
      <div
        className={styles.person}
        key={positionName + person["first name"] + person["last name"]}
      >
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

export default Liquor;
