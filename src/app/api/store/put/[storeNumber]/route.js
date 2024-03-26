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

const PUT = async (req, { params }) => {
  const requestMethod = req.method;
  const storeNumber = params.storeNumber
  
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }

  if (requestMethod !== "PUT") {
      return Response.json({ result: "wrong method" });
  } else {

    const fields = await req.json();
    
    
    let newInfo = {};
    Object.keys(fields).forEach((key) => {
      if(key == "first_name" || key == "last_name" || key == "first_name_preference"){
        newInfo[key] = fields[key].trim()
      } else if(key == "birthday"){
        const birthdayFix = fields["birthday"].split("-");
        const birthday = `${birthdayFix[1]}/${birthdayFix[2]}/${birthdayFix[0]}`;
        newInfo[key] = birthday
      }
     
    });
    delete newInfo._id;
    console.log(newInfo)

    await mongoose.connect(db);

    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      { _id: fields._id },
      newInfo,
      { new: true },
    );

    return Response.json(updatedEmployee);
  }
};

export { PUT };
