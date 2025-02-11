"use client"

import "@/styles/globals.css";
import Add from "src/app/_components/admin/Add";
import Edit from "src/app/_components/admin/Edit";
import Link from "next/link";
import { useEffect, useState } from "react";

const Test = () => {
    const [selectedStore, setSelectedStore] = useState("");
    const [section, setSection] = useState("edit");

    const handleSectionChange = (e) => {
        setSection(section == "add" ? "edit" : "add");
    };

    const handleSelectedStore = (e) => {
      setSelectedStore(e.target.value);
    };

    useEffect(() => {
      document.title = "Test";
    }, []);

    return (
        <>
          <div id="employee-page-div">
          <h2>Employee Database</h2>
          <Link href="/">
            <button>Return to home</button>
          </Link>
          <select name="stores" id="stores" onChange={handleSelectedStore}>
            <option value={""}></option>
            <option value={"000-000"}>Test</option>
          </select>
          <button
            onClick={handleSectionChange}
            value={section == "add" ? "edit" : "add"}
          >
            {section == "add" ? "Edit/View" : "Add"}
          </button>
        </div>
        {section == "edit" && (
          <Edit selectedStore={selectedStore} />
        )}
        {section == "add" && (
          <Add selectedStore={selectedStore} />
        )}
      </>
    );
}

export default Test;