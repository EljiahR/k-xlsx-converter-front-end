"use client";

import "@/styles/globals.css";
//import "../styles/employees.css";
import AuthService from "@/lib/authService.js";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Add from "@/components/admin/Add";
import Edit from "@/components/admin/Edit";

const Employees = () => {
  const router = useRouter();
  const [section, setSection] = useState("edit");
  const [selectedStore, setSelectedStore] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  if (AuthService.getCurrentUser() == null) {
    console.log("failed login");
    router.push("/dashboard/login");
  } else {
    console.log(AuthService.getCurrentUser());
  }

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    router.push("/dashboard/login");
  };

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
        <button onClick={handleLogout}>Logout</button>
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
};

export default Employees;
