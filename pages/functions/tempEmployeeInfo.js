// Was used for testing, keeping as reference for
// employee info
const newEmployee = (
  firstName,
  lastName,
  birthday = "01/01/2000",
  breakPreference = 2,
  firstNamePreference = null,
  lunchOverride = false,
  positionOverride = null,
  bathroomOrder = null,
  callUp = false,
) => {
  return {
    "First Name": firstName,
    "Last Name": lastName,
    Birthday: birthday,
    breakPreference,
    firstNamePreference,
    lunchOverride,
    positionOverride,
    bathroomOrder,
    callUp,
  };
};

let employees = [newEmployee("First", "Last", "01/01/2000")];

export default employees;
