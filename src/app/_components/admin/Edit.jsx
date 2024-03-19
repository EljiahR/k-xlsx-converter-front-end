import styles from "@/styles/Edit.module.css";
import { useEffect, useState } from "react";

const Edit = ({ selectedStore, data, setData }) => {
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState([]);

  const getEmployees = async () => {
    if (selectedStore != "") {
      setLoading(true);
      try {
        let response = await fetch(`/api/store/get/${selectedStore}`);
        let employees = await response.json();
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
    let employeeToChange = newData.find((employee) => employee._id == id);
    employeeToChange.edit = onOff;
    let newEditData = JSON.parse(JSON.stringify(editData));
    if (onOff) {
      newEditData.push({ _id: id });
    } else {
      newEditData = newEditData.filter((item) => item._id !== id);
    }

    setData(newData);
    setEditData(newEditData);
  };

  const handleEditChange = (e, id, key) => {
    let newEditData = JSON.parse(JSON.stringify(editData));
    let employeeToEdit = newEditData.find((employee) => (employee._id = id));

    employeeToEdit[key] = e.target.value;

    setEditData(newEditData);
  };

  const handlePut = (e, id) => {
    e.preventDefault();
    let newData = JSON.parse(JSON.stringify(data));
    let newEditData = JSON.parse(JSON.stringify(editData));
    let employeeToEdit = newEditData.find((employee) => (employee._id = id));

    let formData = new FormData();
    Object.keys(employeeToEdit).forEach((key) => {
      formData.append(key, employeeToEdit[key]);
    });
    const putData = async () => {
      try {
        let response = await fetch(`/api/store/put/${selectedStore}`, {
          method: "PUT",
          body: formData,
        });
        const updatedEmployee = await response.json();

        let employeeToUpdate = newData.find((employee) => employee._id == id);
        Object.keys(updatedEmployee).forEach((key) => {
          employeeToUpdate[key] = updatedEmployee[key];
        });
        employeeToUpdate.edit = false;
        newEditData = newEditData.filter((item) => item._id != id);

        setData(newData);

        setEditData(newEditData);
      } catch (err) {
        console.log(err);
      }
    };
    putData();
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`/api/store/delete/${selectedStore}`, {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
      });
      const result = await response.json();
      let newData = JSON.parse(JSON.stringify(data));
      newData = newData.filter((item) => item._id != id);
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
          : data.map((employee, index) => {
              if (employee.edit) {
                let employeeEdit = editData.find(
                  (item) => item._id == employee._id,
                );
                return (
                  <form
                    className={styles.employees}
                    key={employee._id}
                    onSubmit={(e) => handlePut(e, employee._id)}
                    id={`form-${index}`}
                  >
                    <label for="first-name">
                      First Name:
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder={employee["first_name"]}
                        value={
                          employeeEdit.hasOwnProperty("first_name")
                            ? employeeEdit["first_name"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee._id, "first_name")
                        }
                      />
                    </label>
                    <label for="last-name">
                      Last Name:
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder={employee["last_name"]}
                        value={
                          employeeEdit.hasOwnProperty("last_name")
                            ? employeeEdit["last_name"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(e, employee._id, "last_name")
                        }
                      />
                    </label>
                    <label for="preferred-name">
                      Preferred Name:
                      <input
                        type="text"
                        id="preferred-name"
                        name="preferred-name"
                        placeholder={employee["first_name_preference"]}
                        value={
                          employeeEdit.hasOwnProperty("first_name_preference")
                            ? employeeEdit["first_name_preference"]
                            : ""
                        }
                        onChange={(e) =>
                          handleEditChange(
                            e,
                            employee._id,
                            "first_name_preference",
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
                          handleEditChange(e, employee._id, "birthday")
                        }
                      />
                    </label>
                    <div id="break-preference-div">
                      <p>Break Preference:</p>
                      <input
                        type="radio"
                        id="break-preference-2"
                        name="break-preference"
                        value={2}
                        checked={employee["break_preference"] == 2 && "checked"}
                      />
                      <label htmlFor="break-preference-2">
                        Two 15 minute breaks
                      </label>
                      <input
                        type="radio"
                        id="break-preference-1"
                        name="break-preference"
                        value={1}
                        checked={employee["break_preference"] == 1 && "checked"}
                      />
                      <label htmlFor="break-preference-1">
                        One 30 minute break
                      </label>
                    </div>
                    <label htmlFor="lunch-override">
                      Lunch Override for over 18
                      <input
                        type="checkbox"
                        name="lunch-override"
                        id="lunch-override"
                        checked={employee["lunch_override"] && "checked"}
                      />
                    </label>
                    <label htmlFor="position-override">
                      Position Override, leave blank if not needed
                      <select id="position-override" name="position-override">
                        <option value=""></option>
                        <option
                          value="$"
                          selected={
                            employee["position_override"] == "$"
                              ? "selected"
                              : null
                          }
                        >
                          Cashier
                        </option>
                        <option value="B" selected={
                            employee["position_override"] == "B"
                              ? "selected"
                              : null
                          }>Bagger</option>
                        <option value="DELETE" selected={
                            employee["position_override"] == "DELETE"
                              ? "selected"
                              : null
                          }>Remove</option>
                      </select>
                    </label>
                    <label htmlFor="call-up">
                      Call Up?
                      <input
                        type="checkbox"
                        id="call-up"
                        name="call-up"
                        checked={employee["call_up"] && "checked"}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => enableEdit(employee._id, false)}
                    >
                      Cancel
                    </button>
                    <button type="submit">Confirm</button>
                  </form>
                );
              } else {
                return (
                  <div className={styles.employees} key={employee._id}>
                    <p>
                      {employee["first_name"]} {employee["last_name"]}
                    </p>
                    <p>Preferred Name: {employee["first_name_prefernce"]}</p>
                    <p>Birthdate: {employee["birthday"]}</p>
                    <p>Break Preference: {employee["break_preference"]}</p>
                    <p>Lunch Override: {employee["lunch_override"]}</p>
                    <p>Position Override: {employee["position_override"]}</p>
                    <p>Bathroom Order: {employee["bathroom_order"]}</p>
                    <p>Call Up: {employee["call_up"]}</p>
                    <button onClick={() => enableEdit(employee._id, true)}>
                      Edit
                    </button>
                    <button onClick={() => deleteEmployee(employee._id)}>
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
