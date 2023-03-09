import { client } from "../db.js";
import { ObjectId } from "mongodb";

export function getStudentByParams(id){
    return client
    .db("student")
    .collection("student")
    .findOne({_id :new ObjectId(id)})
}

export function getStudent(req){
    return client
    .db("student")
    .collection("student")
    .find(req.query)
    .toArray()
}

export function addStudent(NewStudent){
    return client
    .db("student")
    .collection("student")
    .insertOne(NewStudent)
}

export function updateStudent(data, id){
    return client
    .db("student")
    .collection("student")
    .updateOne({_id :new ObjectId(id)}, {$set:data})
}

export function deleteStudent(id){
    return client
    .db("student")
    .collection("student")
    .deleteOne({_id : new ObjectId(id)})
}