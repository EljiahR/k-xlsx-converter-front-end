import instance from "src/app/_lib/axiosBase";
import { useState } from "react";

interface EmployeeInfo {
  firstName: string;
    lastName: string;
    preferredFirstName: string;
    birthday: Date;
    preferredNumberOfBreaks: Number;
    getsLunchAsAdult: boolean;
    positionOverride: string;
    isCallUp: boolean;
    division: string;
    storeNumber: string;
}

const Add = ({ selectedStore }) => {
  const [newEmployeeInfo, setNewEmployeeInfo] = useState<EmployeeInfo>({
    firstName: "",
    lastName: "",
    preferredFirstName: "",
    birthday: new Date(),
    preferredNumberOfBreaks: 2,
    getsLunchAsAdult: false,
    positionOverride: "",
    isCallUp: true,
    division: "",
    storeNumber: ""
  })

  const handleFormChange = (section: string, value: any) => {
    setNewEmployeeInfo({...newEmployeeInfo}[section] = value);
  }
  
  const handleSubmit = (e) => {
    //e.preventDefault();
    
    const postForm = async () => {
      
      [newEmployeeInfo["division"], newEmployeeInfo["storeNumber"]] = selectedStore.split("-");

      console.log(newEmployeeInfo);

      try {
        const response = await instance.post(`/Employee`, newEmployeeInfo, { withCredentials: true })
        
        const data = await response.data;
        console.log(data);
        const form = document.querySelector("#add-employee");
        (form as HTMLFormElement).reset();
        (document.querySelector("#first-name") as HTMLInputElement).focus();
      } catch (err) {
        console.log(err);
      }
    };
    postForm();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="add-employee">
        <label htmlFor="first-name">
          First Name:
          <input 
            type="text" 
            name="firstName" 
            id="first-name"
            value={newEmployeeInfo["firstName"]} 
            onChange={(e) => handleFormChange("firstName", e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            id="last-name" 
            value={newEmployeeInfo["lastName"]} 
            onChange={(e) => handleFormChange("lastName", e.target.value)} 
            required 
          />
        </label>
        <label htmlFor="preferred-name">
          Preferred Name:
          <input 
            type="text" 
            name="preferredFirstName" 
            id="preferred-name"
            value={newEmployeeInfo["preferredFirstName"]}  
            onChange={(e) => handleFormChange("preferredFirstName", e.target.value)}
           />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <input 
            type="date" 
            name="birthday" 
            id="birthday" 
            value={newEmployeeInfo["birthday"].toString()} 
            onChange={(e) => handleFormChange("birthday", e.target.value)} 
          />
        </label>
        <div id="break-preference-div">
          <p>Break Preference:</p>
          <input
            type="radio"
            id="break-preference-2"
            name="preferredNumberOfBreaks"
            value={2}
            onChange={(e) => handleFormChange("preferredNumberOfBreaks", e.target.value)}
            required
          />
          <label htmlFor="break-preference-2">Two 15 minute breaks</label>
          <input
            type="radio"
            id="break-preference-1"
            name="preferredNumberOfBreaks"
            value={1}
            onChange={(e) => handleFormChange("preferredNumberOfBreaks", e.target.value)}
            required
          />
          <label htmlFor="break-preference-1">One 30 minute break</label>
        </div>
        <label htmlFor="lunch-override">
          Lunch Override for over 18
          <input 
            type="checkbox" 
            name="getsLunchAsAdult" 
            id="lunch-override" 
            checked={newEmployeeInfo["getsLunchAsAdult"]} 
            onChange={(e) => handleFormChange("getsLunchAsAdult", e.target.value)} 
          />
        </label>
        <label htmlFor="position-override">
          Position Override, leave blank if not needed
          <select 
            id="position-override" 
            name="positionOverride" 
            onChange={(e) => handleFormChange("positionOverride", e.target.value)}
          >
            <option value=""></option>
            <option value="$">Cashier</option>
            <option value="B">Bagger</option>
          </select>
        </label>
        <label htmlFor="call-up">
          Call Up?
          <input 
            type="checkbox" 
            id="call-up" 
            name="isCallUp"
            checked={newEmployeeInfo["isCallUp"]} 
            onChange={(e) => handleFormChange("isCallUp", e.target.value)} 
          />
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};
export default Add;
