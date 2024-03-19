import Link from "next/link";
import styles from "@/styles/NavBar.module.css"

const NavBar = ({
  convertDivToPDF,
  handleCurrentDay,
  handleFileInput,
  data,
  page,
  setPage,
}) => {
  return (
    <div id={styles["navbar"]}>
      <Link href="/" passHref><button>Go Back</button></Link>
      <input id="input" type="file" onChange={handleFileInput}></input>
      <div>
        {data && (
          <>
            <select name="weekdays" id="weekdays" onChange={handleCurrentDay}>
              <option value={0}>Sunday</option>
              <option value={1}>Monday</option>
              <option value={2}>Tuesday</option>
              <option value={3}>Wednesday</option>
              <option value={4}>Thursday</option>
              <option value={5}>Friday</option>
              <option value={6}>Saturday</option>
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
