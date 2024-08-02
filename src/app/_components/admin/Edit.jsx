import styles from "@/styles/Edit.module.css";
import { useEffect, useMemo, useState } from "react";

const Edit = ({ selectedStore, data, setData, search }) => {
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
    if (selectedStore != "") {
      setLoading(true);
      const [division, storeNumber] = selectedStore.split("-");
      try {
        let response = await fetch(
          `https://kxlsxconverterapi20240713102707.azurewebsites.net/Employee/${division}/${storeNumber}`,
        );
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
      (employee) => (employee.employeeId = id),
    );

    employeeToEdit[key] = e.target.value;

    setEditData(newEditData);
  };

  const handlePut = (e, id) => {
    e.preventDefault();
    let newData = JSON.parse(JSON.stringify(data));
    let newEditData = JSON.parse(JSON.stringify(editData));
    let employeeToEdit = newEditData.find(
      (employee) => (employee.employeeId = id),
    );

    let formData = new FormData();
    Object.keys(employeeToEdit).forEach((key) => {
      formData.append(key, employeeToEdit[key]);
    });
    const rawFormData = Object.fromEntries(formData);
    const putData = async () => {
      try {
        let response = await fetch(
          `https://kxlsxconverterapi20240713102707.azurewebsites.net/Employee/`,
          {
            method: "PATCH",
            body: JSON.stringify(rawFormData),
          },
        );
        const updatedEmployee = await response.json();

        let employeeToUpdate = newData.find(
          (employee) => employee.employeeId == id,
        );
        Object.keys(updatedEmployee).forEach((key) => {
          employeeToUpdate[key] = updatedEmployee[key];
        });
        employeeToUpdate.edit = false;
        newEditData = newEditData.filter((item) => item.employeeId != id);

        setData(newData);

        setEditData(newEditData);
      } catch (err) {
        console.log(err);
      }
    };
    putData();
  };

  const deleteEmployee = async (employee) => {
    try {
      const employeeToDelete = JSON.parse(JSON.stringify(employee));
      delete employeeToDelete.edit;
      console.log(employeeToDelete);
      const response = await fetch(
        `https://kxlsxconverterapi20240713102707.azurewebsites.net/Employee/`,
        {
          method: "DELETE",
          body: JSON.stringify(employeeToDelete),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const result = await response.json();
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
                    onSubmit={(e) => handlePut(e, employee.employeeId)}
                    id={`form-${index}`}
                  >
                    <label for="first-name">
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
                    <label for="last-name">
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
                    <label for="preferred-name">
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
                    <label for="birthday">
                      Birthdate:
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        placeholder={employee["birthday"]}
                        value={
                          employeeEdit.hasOwnProperty("birthday") &&
                          employeeEdit["birthday"]
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
                          employee["preferredNumberOfBreaks"] == 2 && "checked"
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
                          employee["preferredNumberOfBreaks"] == 1 && "checked"
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
                        checked={employee["getsLunchAsAdult"] && "checked"}
                      />
                    </label>
                    <label htmlFor="position-override">
                      Position Override, leave blank if not needed
                      <select id="position-override" name="positionOverride">
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
                        checked={employee["isACallUp"] && "checked"}
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
                      {employee["firstName"]} {employee["lastName"]}
                    </p>
                    <p>Preferred Name: {employee["preferredFirstName"]}</p>
                    <p>Birthdate: {employee["birthday"]}</p>
                    <p>
                      Break Preference: {employee["preferredNumberOfBreaks"]}
                    </p>
                    <p>Lunch Override: {employee["getsLunchAsAdult"]}</p>
                    <p>Position Override: {employee["positionOverride"]}</p>
                    <p>Bathroom Order: {employee["bathroomOrder"]}</p>
                    <p>Call Up: {employee["isACallUp"]}</p>
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
