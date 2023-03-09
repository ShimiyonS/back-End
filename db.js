import { MongoClient } from "mongodb";
import Obj from "mongodb";

import dotenv from "dotenv"
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mingodb is succesfuly connected")
    return client;
}
export var ObjectId = Obj.ObjectId;
export const client = await createConnection();
