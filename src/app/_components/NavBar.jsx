import Link from "next/link";
import styles from "@/styles/NavBar.module.css";

const NavBar = ({
  convertDivToPDF,
  handleCurrentDay,
  handleFileInput,
  page,
  setPage,
  shifts
}) => {
  return (
    <div id={styles["navbar"]}>
      <Link href="/" passHref>
        <button>Go Back</button>
      </Link>
      <input id="input" type="file" onChange={handleFileInput}></input>
      <div>
        {shifts && (
          <>
            <select name="weekdays" id="weekdays" onChange={handleCurrentDay}>
              {shifts.map((day, index) => {
                <option value={index}>{day.day}</option>
              })}
            </select>
            {page === "Board" && (
              <>
                <button onClick={() => setPage("Carts")}>Carts</button>
                <button onClick={() => convertDivToPDF("board")}>Print</button>
              </>
            )}
            {page === "Carts" && (
              <>
                <button onClick={() => setPage("Board")}>Report</button>
                <button onClick={() => convertDivToPDF("carts")}>Print</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default NavBar;
