'use server'
// PUT
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

const PUT = async (req, { params }) => {
  const requestMethod = req.method;
  const storeNumber = params.storeNumber
  
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }

  if (requestMethod !== "PUT") {
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
    let newInfo = {};
    Object.keys(fields).forEach((key) => {
      if(key == "first-name" || key == "last-name" || key == "prefered-first-name"){
        newInfo[key] = fields[key][0].trim()
      } else if(key == "birthday"){
        const birthdayFix = fields["birthday"][0].split("-");
        const birthday = `${birthdayFix[1]}/${birthdayFix[2]}/${birthdayFix[0]}`;
        newInfo[key] = birthday
      }
     
    });
    delete newInfo._id;

    await mongoose.connect(db);

    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      { _id: fields._id[0] },
      newInfo,
      { new: true },
    );

    return Response.json(updatedEmployee);
  }
};

export { PUT };
