"use client"

import "@/styles/globals.css";
import Add from "@/components/admin/Add";
import Edit from "@/components/admin/Edit";
import Link from "next/link";
import { useState } from "react";

const Test = () => {
    const [selectedStore, setSelectedStore] = useState("");
    const [section, setSection] = useState("edit");
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSectionChange = (e) => {
        setSection(section == "add" ? "edit" : "add");
    };

    const handleSelectedStore = (e) => {
        setSelectedStore(e.target.value);
    };

    return (
        <>

          <div id="employee-page-div">
          <h2>Employee Database</h2>
          <Link href="/">
            <button>Return to home</button>
          </Link>
          <select name="stores" id="stores" onChange={handleSelectedStore}>
            <option value={""}></option>
            <option value={"0-0"}>Test</option>
          </select>
          <button
            onClick={handleSectionChange}
            value={section == "add" ? "edit" : "add"}
          >
            {section == "add" ? "Edit/View" : "Add"}
          </button>
        </div>
        {section == "edit" && (
          <>
            {data != null && (
              <input type="text" value={search} onChange={handleSearch} />
            )}
            <Edit
              selectedStore={selectedStore}
              data={data}
              setData={setData}
              search={search}
            />
          </>
        )}
        {section == "add" && (
          <Add selectedStore={selectedStore} data={data} setData={setData} />
        )}
      </>
    );
}

export default Test;