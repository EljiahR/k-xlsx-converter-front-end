import '@/styles/globals.css'
import type { MetaData, NextPage } from "next";
import { MetaData } from "next";
import styles from "./_styles/Home.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'K Excel to Table',
}

export default function Home() {
  return (
    <>
      <div id={styles["home"]}>
        <h2>Kroger .xlsx File Converter</h2>
        <div id={styles["navigation"]}>
          <Link href="/dashboard/report" passHref>
            <button>Report</button>
          </Link>
          <Link href="/dashboard/employees" passHref>
            <button>Employees</button>
          </Link>
        </div>
      </div>
    </>
  );
};