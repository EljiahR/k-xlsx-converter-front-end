import instance from "src/app/_lib/axiosBase";
import { useEffect, useState } from "react";
import useTitle from "src/app/_lib/useTitle";

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

const EmployeeInfoStarter: EmployeeInfo = {
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
}

const Add = ({ selectedStore }) => {
  const [newEmployeeInfo, setNewEmployeeInfo] = useState<EmployeeInfo>({...EmployeeInfoStarter})

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Add new employee";
    return () => {document.title = previousTitle};
  }, []);

  const handleFormChange = (section: string, value: any) => {
    setNewEmployeeInfo((previousInfo) => ({
      ...previousInfo,
      [section]: value
    }));
  }

  const resetForm = () => {
    const birthdayDiv = document.getElementById("birthday") as HTMLInputElement;
    birthdayDiv.value = ""
    setNewEmployeeInfo({...EmployeeInfoStarter});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const postForm = async () => {
      
      const formData: EmployeeInfo = {...newEmployeeInfo};
      const [division, storeNumber] = selectedStore.split("-");
      formData["division"] = division;
      formData["storeNumber"] = storeNumber;

      console.log("Posted")
      console.log(formData);

      try {
        const response = await instance.post("/Employee", formData, { withCredentials: true })
        
        const data = await response.data;
        console.log("Recieved")
        console.log(data);
       
        resetForm();
        (document.querySelector("#first-name") as HTMLInputElement).focus();
      } catch (err) {
        console.log(err);
      }
    };
    postForm();
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
            onChange={(e) => handleFormChange("birthday", new Date(e.target.value))} 
          />
        </label>
        <div id="break-preference-div">
          <p>Break Preference:</p>
          <input
            type="radio"
            id="break-preference-2"
            name="preferredNumberOfBreaks"
            checked={newEmployeeInfo["preferredNumberOfBreaks"] == 2}
            onChange={() => handleFormChange("preferredNumberOfBreaks", 2)}
            required
          />
          <label htmlFor="break-preference-2">Two 15 minute breaks</label>
          <input
            type="radio"
            id="break-preference-1"
            name="preferredNumberOfBreaks"
            checked={newEmployeeInfo["preferredNumberOfBreaks"] == 1}
            onChange={(e) => handleFormChange("preferredNumberOfBreaks", 1)}
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
            onChange={(e) => handleFormChange("getsLunchAsAdult", !newEmployeeInfo["getsLunchAsAdult"])} 
          />
        </label>
        <label htmlFor="position-override">
          Position Override, leave blank if not needed
          <select 
            id="position-override" 
            name="positionOverride" 
            onChange={(e) => handleFormChange("positionOverride", e.target.value)}
            value={newEmployeeInfo["positionOverride"]}
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
            onChange={(e) => handleFormChange("isCallUp", !newEmployeeInfo["isCallUp"])} 
          />
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};
export default Add;
