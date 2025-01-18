"use client";

import "@/styles/globals.css";
//import "../styles/employees.css";
import AuthService from "@/lib/authService.js";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Add from "@/components/admin/Add";
import Edit from "@/components/admin/Edit";

const EmployeesPage = () => {
  const router = useRouter();
  const [section, setSection] = useState("edit");
  const [selectedStore, setSelectedStore] = useState("");
  const [availableStores, setAvailableStores] = useState([""]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  
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

  useEffect(() => {
    const getAvailableStores = async () => {

    };

    getAvailableStores();
  })
  
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
          <option value={"0-0"}>Test</option>
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
            loggedIn={isLoggedIn}
          />
        </>
      )}
      {section == "add" && (
        <Add selectedStore={selectedStore} data={data} setData={setData} />
      )}
    </>
  );
};

export default EmployeesPage;
