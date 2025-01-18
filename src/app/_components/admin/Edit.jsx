import moment from "moment";
import styles from "@/styles/Edit.module.css";
import testEmployees from "@/lib/testEmployeesBO.ts"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";

const Edit = ({ selectedStore, data, setData, search, loggedIn = false }) => {
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState([]);

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
    if (selectedStore == "0-0") {
      setData(testEmployees);
    } else if (selectedStore != "" && loggedIn) {
      setLoading(true);
      const [division, storeNumber] = selectedStore.split("-");
      
      try {
        const response = await axios.get(`https://kxlsxconverterapi.onrender.com/Employee/${division}/${storeNumber}`, { withCredentials: true });
        
        let employees = await response.json();
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
    let newData = JSON.parse(JSON.stringify(data));
    let employeeToChange = newData.find(
      (employee) => employee.employeeId == id,
    );
    employeeToChange.edit = onOff;
    let newEditData = JSON.parse(JSON.stringify(editData));
    if (onOff) {
      newEditData.push({ employeeId: id });
    } else {
      newEditData = newEditData.filter((item) => item.employeeId !== id);
    }

    setData(newData);
    setEditData(newEditData);
  };

  const handleEditChange = (e, id, key) => {
    let newEditData = JSON.parse(JSON.stringify(editData));
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
    
    let newData = JSON.parse(JSON.stringify(data));
    let newEditData = JSON.parse(JSON.stringify(editData));
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
          let response = await axios.patch(`https://kxlsxconverterapi.onrender.com/Employee/`, JSON.stringify(employeeToEdit), { withCredentials: true });
          const updatedEmployee = await response.json();
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
      const employeeToDelete = JSON.parse(JSON.stringify(employee));
      delete employeeToDelete.edit;
      console.log(employeeToDelete);
      if (selectedStore != "0-0") {
        const response = await axios.delete(`https://kxlsxconverterapi.onrender.com/Employee/`, JSON.stringify(employeeToDelete), { withCredentials: true });
        const result = await response.json();
      }
      
      let newData = JSON.parse(JSON.stringify(data));
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
          : filteredData.map((employee, index) => {
              if (employee.edit) {
                let employeeEdit = editData.find(
                  (item) => item.employeeId == employee.employeeId,
                );
                return (
                  <form
                    className={styles.employees}
                    key={employee.employeeId}
                    onSubmit={(e) => handlePatch(e, employee)}
                    id={`form-${index}`}
                  >
                    <label htmlFor="first-name">
                      First Name:
                      <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder={employee["firstName"]}
                        value={
                          employeeEdit.hasOwnProperty("firstName")
                            ? employeeEdit["firstName"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee.employeeId, "firstName")
                        }
                      />
                    </label>
                    <label htmlFor="last-name">
                      Last Name:
                      <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        placeholder={employee["lastName"]}
                        value={
                          employeeEdit.hasOwnProperty("lastName")
                            ? employeeEdit["lastName"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee.employeeId, "lastName")
                        }
                      />
                    </label>
                    <label htmlFor="preferred-name">
                      Preferred Name:
                      <input
                        type="text"
                        id="preferred-name"
                        name="preferredFirstName"
                        placeholder={employee["preferredFirstName"]}
                        value={
                          employeeEdit.hasOwnProperty("preferredFirstName")
                            ? employeeEdit["preferredFirstName"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee.employeeId,
                            "preferredFirstName",
                          )
                        }
                      />
                    </label>
                    <label htmlFor="birthday">
                      Birthdate:
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        placeholder={employee["birthday"]}
                        value={
                          employeeEdit.hasOwnProperty("birthday")
                            ? employeeEdit["birthday"].split("T")[0]
                            : employee["birthday"].split("T")[0]
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee.employeeId, "birthday")
                        }
                      />
                    </label>
                    <div id="break-preference-div">
                      <p>Break Preference:</p>
                      <input
                        type="radio"
                        id="break-preference-2"
                        name="preferredNumberOfBreaks"
                        value={2}
                        checked={
                          employeeEdit.hasOwnProperty("preferredNumberOfBreaks")
                            ? employeeEdit["preferredNumberOfBreaks"] == "2"
                            : employee["preferredNumberOfBreaks"] == 2
                        }
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee.employeeId,
                            "preferredNumberOfBreaks",
                          )
                        }
                      />
                      <label htmlFor="break-preference-2">
                        Two 15 minute breaks
                      </label>
                      <input
                        type="radio"
                        id="break-preference-1"
                        name="preferredNumberOfBreaks"
                        value={1}
                        checked={
                          employeeEdit.hasOwnProperty("preferredNumberOfBreaks")
                            ? employeeEdit["preferredNumberOfBreaks"] == "1"
                            : employee["preferredNumberOfBreaks"] == 1
                        }
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee.employeeId,
                            "preferredNumberOfBreaks",
                          )
                        }
                      />
                      <label htmlFor="break-preference-1">
                        One 30 minute break
                      </label>
                    </div>
                    <label htmlFor="lunch-override">
                      Lunch Override for over 18
                      <input
                        type="checkbox"
                        name="getsLunchAsAdult"
                        id="lunch-override"
                        checked={
                          employeeEdit.hasOwnProperty("getsLunchAsAdult")
                            ? employeeEdit["getsLunchAsAdult"]
                            : employee["getsLunchAsAdult"]
                        }
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee.employeeId,
                            "getsLunchAsAdult",
                          )
                        }
                      />
                    </label>
                    <label htmlFor="position-override">
                      Position Override, leave blank if not needed
                      <select
                        id="position-override"
                        name="positionOverride"
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee.employeeId,
                            "positionOverride",
                          )
                        }
                      >
                        <option value=""></option>
                        <option
                          value="$"
                          selected={
                            employee["positionOverride"] == "$"
                              ? "selected"
                              : null
                          }
                        >
                          Cashier
                        </option>
                        <option
                          value="B"
                          selected={
                            employee["positionOverride"] == "B"
                              ? "selected"
                              : null
                          }
                        >
                          Bagger
                        </option>
                        <option
                          value="DELETE"
                          selected={
                            employee["positionOverride"] == "DELETE"
                              ? "selected"
                              : null
                          }
                        >
                          Remove
                        </option>
                      </select>
                    </label>
                    <label htmlFor="call-up">
                      Call Up?
                      <input
                        type="checkbox"
                        id="call-up"
                        name="isACallUp"
                        checked={
                          employeeEdit.hasOwnProperty("isACallUp")
                            ? employeeEdit["isACallUp"]
                            : employee["isACallUp"]
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee.employeeId, "isACallUp")
                        }
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => enableEdit(employee.employeeId, false)}
                    >
                      Cancel
                    </button>
                    <button type="submit">Confirm</button>
                  </form>
                );
              } else {
                return (
                  <div className={styles.employees} key={employee.employeeId}>
                    <p>
                      {employee["preferredFirstName"] ? 
                      employee["preferredFirstName"] 
                      : employee["firstName"]} {employee["lastName"]}
                    </p>
                    <p>Birthdate: {employee["birthday"].includes("Z") ? moment(employee["birthday"]).add(1, 'day').format("ll") : moment(employee["birthday"]).format("ll")}</p>
                    <p>
                      Break Preference: {employee["preferredNumberOfBreaks"]}
                    </p>
                    <p>Lunch Override: {employee["getsLunchAsAdult"]}</p>
                    <p>Position Override: {employee["positionOverride"]}</p>
                    <p>Bathroom Order: {employee["bathroomOrder"]}</p>
                    {employee["isACallUp"] ? 
                      <p>Call Up</p>
                    : null}
                    <button
                      onClick={() => enableEdit(employee.employeeId, true)}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteEmployee(employee)}>
                      Delete
                    </button>
                  </div>
                );
              }
            })}
    </div>
  );
};
export default Edit;
