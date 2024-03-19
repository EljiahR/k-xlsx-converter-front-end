'use server'
// POST
import "dotenv/config";
import formidable, { errors as formidableErrors } from "formidable";
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

export const config = {
  api: {
    bodyParser: false,
  },
};

const POST = async (req, { params }) => {
  const requestMethod = req.method;
  const storeNumber = params.storeNumber
  
  console.log(mongoose.models);
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }

  if (requestMethod !== "POST") {
    res.send({ result: "wrong method" });
  } else {
    const form = formidable({});
    let fields;
    let files;
    try {
      [fields, files] = await form.parse(req);
    } catch (err) {
      if (err.code === formidableErrors.maxFieldsExceeded) {
      }
      console.error(err);
      res.end(String(err));
      return;
    }

    await mongoose.connect(db);
    const lunchOverride = fields.hasOwnProperty("lunch-override")
      ? true
      : false;
    const callUp = fields.hasOwnProperty("call-up") ? true : false;
    const birthdayFix = fields["birthday"][0].split("-");
    const birthday = `${birthdayFix[1]}/${birthdayFix[2]}/${birthdayFix[0]}`;

    let newEmployee = new EmployeeModel({
      first_name: fields["first-name"][0].trim(),
      last_name: fields["last-name"][0].trim(),
      birthday: birthday,
      break_preference: Number(fields["break-preference"][0]),
      first_name_preference: fields["preferred-name"][0].trim(),
      lunch_override: lunchOverride,
      position_override: fields["position-override"][0],
      call_up: callUp,
    });
    newEmployee.save();

    return Response.json({ result: "post succesful" });
  }
};

export { POST };
