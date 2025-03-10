"use client";

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Add from "./Add";
import Edit from "./Edit";
import instance from "src/app/_lib/axiosBase";

const EmployeesPage = ({ authorizedStores }) => {
  const router = useRouter();
  const [section, setSection] = useState("edit");
  const [selectedStore, setSelectedStore] = useState("");
  
  const handleLogout = (e) => {
    e.preventDefault();
    const logout = async () => {
      try {
        const response = await instance.post("/User/SignOut", {}, {withCredentials: true});
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        router.push("/dashboard/login");
      }
    } 

    logout();
    
  };

  const handleSectionChange = (e) => {
    setSection(section == "add" ? "edit" : "add");
  };

  const handleSelectedStore = (e) => {
    setSelectedStore(e.target.value);
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Employees";

    return (() => {document.title = previousTitle;});
  }, []);
  
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
          {authorizedStores.map(storeNumber => {
            return <option value={storeNumber} key={storeNumber}>{storeNumber}</option>
          })}
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
};

export default EmployeesPage;
