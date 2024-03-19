'use server'
// DELETE method
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

export const config = {
  api: {
    bodyParser: true,
  },
};

const handler = async (req, res) => {
  const requestMethod = req.method;
  const { storeNumber } = req.query;
  console.log(mongoose.models);
  if (mongoose.models[storeNumber]) {
    EmployeeModel = mongoose.model(storeNumber);
  } else {
    EmployeeModel = mongoose.model(storeNumber, employeeSchema);
  }
  if (requestMethod !== "DELETE") {
    res.json({ result: "wrong method" });
  } else {
    const data = JSON.parse(req.body);
    const idToDelete = data.id;
    const result = await EmployeeModel.findByIdAndDelete(idToDelete);

    res.status(200).json({ result: "delete successful" });
  }
};

export default handler;