import express from "express"
import { MongoClient } from "mongodb";
import Obj from "mongodb"
import { studentsROuter } from "./Router/Student.js";
import dotenv from "dotenv"
import cors from "cors";
dotenv.config();

const PORT = 8000;
var ObjectId = Obj.ObjectId;

const app = express();
app.use(express.json());        //middleware tells server to use json

app.use(cors());


const MONGO_URL = process.env.MONGO_URL;
async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mingodb is succesfuly connected")
    return client;
}
export const client = await createConnection();


//ROuter
app.use("/student",studentsROuter)

//server started
app.listen(PORT, ()=>console.log(`server started localhost:${PORT}`));