import "@/styles/globals.css";
import { Metadata } from "next";
import styles from "./_styles/Home.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "K Excel to Table",
};

export default function Home() {
  
  
  return (
    <>
      <div id={styles["home"]}>
        <h2>15minute.xlsx File Converter</h2>
        <div id={styles["navigation"]}>
          <Link href="/dashboard/report" passHref>
            <button>Report</button>
          </Link>
          <Link href="/dashboard/employees" passHref>
            <button>Admin</button>
          </Link>
          <a href="./_lib/test/Practice_Report_Output.xlsx" download="Practice_Report_Output" target="_blank">
            <button>Download example .xlsx file</button>
          </a>
        </div>
      </div>
    </>
  );
}
