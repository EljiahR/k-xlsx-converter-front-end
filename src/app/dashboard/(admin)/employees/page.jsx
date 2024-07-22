'use client'

import '@/styles/globals.css'
//import "../styles/employees.css";
import { useState } from "react";
import Link from "next/link";
import Add from "@/components/admin/Add";
import Edit from "@/components/admin/Edit";

const Employees = () => {
  const [section, setSection] = useState("edit");
  const [selectedStore, setSelectedStore] = useState("");
  const [data, setData] = useState(null);

  const handleSectionChange = (e) => {
    setSection(section == "add" ? "edit" : "add");
  };

  const handleSelectedStore = (e) => {
    setSelectedStore(e.target.value);
  };
  return (
    <>
      <div id="employee-page-div">
        <h2>Still in progress...</h2>
        <Link href="/">
          <button>Return to home</button>
        </Link>
        <select name="stores" id="stores" onChange={handleSelectedStore}>
          <option value={""}></option>
          <option value={"16-549"}>016-549</option>
        </select>
        <button
          onClick={handleSectionChange}
          value={section == "add" ? "edit" : "add"}
        >
          {section == "add" ? "Edit/View" : "Add"}
        </button>
      </div>
      {section == "edit" && (
        <Edit selectedStore={selectedStore} data={data} setData={setData} />
      )}
      {section == "add" && (
        <Add selectedStore={selectedStore} data={data} setData={setData} />
      )}
    </>
  );
};

export default Employees;
