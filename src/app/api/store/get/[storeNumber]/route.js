'use server'
// GET
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

const GET = async (req, { params }) => {
  const requestMethod = req.method;
  
  const storeNumber = params.storeNumber

  //const { storeNumber } = req.params;
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }
  if(requestMethod !== "GET"){
    res.json({result: "wrong method"})
  } else{
    await mongoose.connect(db);
    const allEmployees = await EmployeeModel.find({});
    return Response.json(allEmployees);
  }
};


export { GET };
