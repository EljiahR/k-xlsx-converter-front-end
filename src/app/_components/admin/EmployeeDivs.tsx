import moment from "moment";
import styles from "@/styles/Edit.module.css";
import type { IEmployeeBO } from "../../_lib/dtoToBO";

interface Props {
    filteredData: IEmployeeBO[],
    editData: any,
    handlePatch: any,
    handleEditChange: any,
    enableEdit: any,
    deleteEmployee: any
}

const EmployeeDivs = ({
    filteredData, editData, handlePatch, handleEditChange, 
    enableEdit, deleteEmployee}: Props) => {
    
    return filteredData.map((employee, index) => {
    if (employee.edit) {
        let employeeEdit = editData.find(
            (item) => item.employeeId == employee.employeeId,
        );
        return (
        <form
            className={styles.employees}
            key={employee.employeeId.toString()}
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
                    ? true
                    : false
                }
                >
                Cashier
                </option>
                <option
                    value="B"
                    selected={
                        employee["positionOverride"] == "B"
                        ? true
                        : false
                    }
                >
                Bagger
                </option>
                <option
                    value="DELETE"
                    selected={
                        employee["positionOverride"] == "DELETE"
                        ? true
                        : false
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
        <div className={styles.employees} key={employee.employeeId.toString()}>
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
    })
    
}

export default EmployeeDivs;