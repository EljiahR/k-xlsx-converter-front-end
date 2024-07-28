const Add = ({ selectedStore }) => {
  const handleSubmit = (e) => {
    //e.preventDefault();
    const postForm = async () => {
      const form = document.querySelector("#add-employee");
      const formData = new FormData(form);
      const rawFormData = Object.fromEntries(formData);
      const [division, storeNumber] = selectedStore.split("-");
      try {
        let response = await fetch(
          `https://kxlsxconverterapi20240713102707.azurewebsites.net/Employee/${division}/${storeNumber}`,
          {
            method: "POST",
            body: JSON.stringify(rawFormData),
          },
        );
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
          <input type="text" name="first-name" id="first-name" required />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input type="text" name="last-name" id="last-name" required />
        </label>
        <label htmlFor="preferred-name">
          Preferred Name:
          <input type="text" name="preferred-name" id="preferred-name" />
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
            name="break-preference"
            value={2}
            checked="checked"
            required
          />
          <label htmlFor="break-preference-2">Two 15 minute breaks</label>
          <input
            type="radio"
            id="break-preference-1"
            name="break-preference"
            value={1}
            required
          />
          <label htmlFor="break-preference-1">One 30 minute break</label>
        </div>
        <label htmlFor="lunch-override">
          Lunch Override for over 18
          <input type="checkbox" name="lunch-override" id="lunch-override" />
        </label>
        <label htmlFor="position-override">
          Position Override, leave blank if not needed
          <select id="position-override" name="position-override">
            <option value=""></option>
            <option value="$">Cashier</option>
            <option value="B">Bagger</option>
          </select>
        </label>
        <label htmlFor="call-up">
          Call Up?
          <input type="checkbox" id="call-up" name="call-up" />
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};
export default Add;
