import axios from "axios";

const Add = ({ selectedStore }) => {
  const handleSubmit = (e) => {
    //e.preventDefault();
    const postForm = async () => {
      const form = document.querySelector("#add-employee");
      const formData = new FormData(form);
      const rawFormData = Object.fromEntries(formData);
      const [division, storeNumber] = selectedStore.split("-");
      
      if (rawFormData.birthday == "") rawFormData.birthday = null;
      rawFormData.preferredNumberOfBreaks = parseInt(
        rawFormData.preferredNumberOfBreaks,
      );

      if(rawFormData.preferredFirstName.trim().length == 0) rawFormData.preferredFirstName = null;
      rawFormData.division = parseInt(division);
      rawFormData.storeNumber = parseInt(storeNumber);
      rawFormData.getsLunchAsAdult = rawFormData.getsLunchAsAdult == "true";
      rawFormData.isACallUp = rawFormData.isACallUp == "true";
      console.log(rawFormData);

      try {
        const response = await axios.post(`https://kxlsxconverterapi.onrender.com/Employee`, JSON.stringify(rawFormData), { withCredentials: true })
        
        const data = await response.json();
        console.log(data);
        form.reset();
        document.querySelector("#first-name").focus();
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
          <input type="text" name="firstName" id="first-name" required />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input type="text" name="lastName" id="last-name" required />
        </label>
        <label htmlFor="preferred-name">
          Preferred Name:
          <input type="text" name="preferredFirstName" id="preferred-name" />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <input type="date" name="birthday" id="birthday" />
        </label>
        <div id="break-preference-div">
          <p>Break Preference:</p>
          <input
            type="radio"
            id="break-preference-2"
            name="preferredNumberOfBreaks"
            value={2}
            required
          />
          <label htmlFor="break-preference-2">Two 15 minute breaks</label>
          <input
            type="radio"
            id="break-preference-1"
            name="preferredNumberOfBreaks"
            value={1}
            required
          />
          <label htmlFor="break-preference-1">One 30 minute break</label>
        </div>
        <label htmlFor="lunch-override">
          Lunch Override for over 18
          <input type="checkbox" name="getsLunchAsAdult" id="lunch-override" />
        </label>
        <label htmlFor="position-override">
          Position Override, leave blank if not needed
          <select id="position-override" name="positionOverride">
            <option value=""></option>
            <option value="$">Cashier</option>
            <option value="B">Bagger</option>
          </select>
        </label>
        <label htmlFor="call-up">
          Call Up?
          <input type="checkbox" id="call-up" name="isCallUp" />
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};
export default Add;
