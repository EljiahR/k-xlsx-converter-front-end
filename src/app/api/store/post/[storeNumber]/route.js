'use server'
// POST
import "dotenv/config";
import mongoose from "mongoose";
const db = process.env.MONGO_DB;

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: String,
  break_preference: Number,
  first_name_preference: String,
  lunch_override: Boolean,
  position_override: String,
  bathroom_order: Number,
  call_up: Boolean,
});

let EmployeeModel;

/*
export const config = {
  api: {
    bodyParser: false,
  },
};
*/

const POST = async (req, { params }) => {
  const requestMethod = req.method;
  const storeNumber = params.storeNumber
 
  //console.log(mongoose.models);
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }

  if (requestMethod !== "POST") {
    res.send({ result: "wrong method" });
  } else {

    //Get form data here

    const fields = await req.json();
    console.log(fields)

    await mongoose.connect(db);
    const lunchOverride = fields.hasOwnProperty("lunch-override")
      ? true
      : false;
    const callUp = fields.hasOwnProperty("call-up") ? true : false;
    const birthdayFix = fields["birthday"].split("-");
    const birthday = birthdayFix[0] !== '' ? `${birthdayFix[1]}/${birthdayFix[2]}/${birthdayFix[0]}` : '01/01/1900';

    let newEmployee = new EmployeeModel({
      first_name: fields["first-name"].trim(),
      last_name: fields["last-name"].trim(),
      birthday: birthday,
      break_preference: Number(fields["break-preference"]),
      first_name_preference: fields["preferred-name"].trim(),
      lunch_override: lunchOverride,
      position_override: fields["position-override"],
      call_up: callUp,
    });
    newEmployee.save();

    return Response.json({ result: "post succesful" });
  }
};

export { POST };
