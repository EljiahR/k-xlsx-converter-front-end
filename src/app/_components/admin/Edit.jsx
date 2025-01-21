import instance from "@/lib/axiosBase.ts";
import testEmployees from "@/lib/testEmployeesBO.ts"
import EmployeeDivs from "./EmployeeDivs";
import { useEffect, useMemo, useState } from "react";

const Edit = ({ selectedStore }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (data == null || search == "") return data;

    return data.filter((x) => {
      const names = [x.firstName.toLowerCase(), x.lastName.toLowerCase()];
      const words = search.split(" ");
      return words.every((word) => {
        return names.some((name) => name.includes(word.toLowerCase()));
      });
    });
  }, [search, data]);

  const getEmployees = async () => {
    if (selectedStore == "000-000") {
      setData(testEmployees);
    } else if (selectedStore != "") {
      setLoading(true);
      const [division, storeNumber] = selectedStore.split("-");
      
      try {
        const response = await instance.get(`/Employee/${division}/${storeNumber}`, { withCredentials: true });
        
        let employees = response.data;
        console.log(employees);
        employees.forEach((employee) => {
          employee.edit = false;
        });
        
        setData(employees);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      setData(null);
    }
  };

  const enableEdit = (id, onOff) => {
    let newData = [...data];
    let employeeToChange = newData.find(
      (employee) => employee.employeeId == id,
    );
    employeeToChange.edit = onOff;
    let newEditData = [...editData];
    if (onOff) {
      newEditData.push({ employeeId: id });
    } else {
      newEditData = newEditData.filter((item) => item.employeeId !== id);
    }

    setData(newData);
    setEditData(newEditData);
  };

  const handleEditChange = (e, id, key) => {
    let newEditData = [...editData];
    let employeeToEdit = newEditData.find(
      (employee) => employee.employeeId == id,
    );

    employeeToEdit[key] =
      e.target.value == "on" ? e.target.checked : e.target.value;

    console.log(newEditData);
    setEditData(newEditData);
  };

  const handlePatch = (e, employee) => {
    e.preventDefault();
    
    let newData = [...data];
    let newEditData = [...editData];
    let updatedData = newEditData.find(
      (data) => data.employeeId == employee.employeeId,
    );
    let employeeToEdit = newData.find(
      (e) => e.employeeId == employee.employeeId,
    );
    delete employeeToEdit.edit;

    Object.keys(updatedData).forEach((key) => {
      if (key == "birthday") {
        employeeToEdit[key] = encodeURIComponent(updatedData[key]);
      } else if (key == "preferredNumberOfBreaks") {
        employeeToEdit[key] = parseInt(updatedData[key]);
      } else if (
        key == "preferredFirstName" &&
        employeeToEdit[key].trim().length == 0
      ) {
        employeeToEdit[key] = null;
      } else {
        employeeToEdit[key] = updatedData[key];
      }
    });

    const putData = async () => {
      
      try {
        if (selectedStore != "0-0") {
          let response = await instance.patch("/Employee", employeeToEdit, { withCredentials: true });
          const updatedEmployee = response.data;
        }
        
        employeeToEdit.edit = false;
        newEditData = newEditData.filter(
          (item) => item.employeeId != employeeToEdit.employeeId,
        );

        setData(newData);

        setEditData(newEditData);
      } catch (err) {
        console.log(err);
      }
    };
    putData();
  };

  const deleteEmployee = async (employee) => {
    if(confirm(`Are you sure you wish to delete ${employee.firstName}`))
    try {
      const employeeToDelete = {...employee};
      delete employeeToDelete.edit;

      console.log(employeeToDelete);
      if (selectedStore != "0-0") {
        const response = await instance.delete("/Employee", { withCredentials: true, data: employeeToDelete });
        const result = response.data;
      }
      
      let newData = [...data];
      newData = newData.filter(
        (item) => item.employeeId != employee.employeeId,
      );
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, [selectedStore]);
  return (
    <div>
      {!data && !loading
        ? "No store selected"
        : loading
          ? "Loading..."
          : 
            <>
              <input type="text" value={search} onChange={handleSearch} />
              <EmployeeDivs
                filteredData={filteredData} 
                editData={editData} 
                handlePatch={handlePatch}
                handleEditChange={handleEditChange}
                enableEdit={enableEdit}
                deleteEmployee={deleteEmployee}
              />
            </> 
        }
    </div>
  );
};
export default Edit;
