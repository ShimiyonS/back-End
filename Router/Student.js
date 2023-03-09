import express  from "express";
import { addStudent, deleteStudent, getStudent, getStudentByParams, updateStudent} from "../controller/student.js";


const router = express.Router();
//Parameter functions;
router.get("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const results = await getStudentByParams(id);
        if (!result){
            res.status(400).send({data:"User Not Found"})
            return
        }
        res.status(200).send(results);    
    } catch (error) {
        console.log(error);
        res.status(500).send({data: "Internal Server Error"})
    }
    
})

//Using Query
router.get("/", async(req, res)=>{
    // query conditions
    if (req.query.age){
        req.query.age = +req.query.age;
    }
    try {
        //data retrival from database
    const studentsData =  await getStudent(req) // to return all data from an array    
    
    if(studentsData.length<=0){
        res.status(404).json({data : "No Content Available"})
        return
    }
    res.status(200).json({data : studentsData})
    } catch (error) {
        console.log("error :", error)
        res.status(500).json({data:"Internal Server Error"})
    } 
})

//Add new student;
router.post("/", async (req, res)=>{
    try {
        const newData = req.body;
        if(!newData){
            req.status(400).json({data:'No Conten Provided'})
            return
        }
        const result = await addStudent(newData);    
        res.status(201).json({data:"Data Added Successfully"})
    } catch (error) {
        res.status(500).json({data :"Internal Server Error"})
    }

})


//update student
router.put("/:id",async (req, res)=>{
    const {id} = req.params;
    try {
        const updatedstudent = req.body;
        const result = await updateStudent(updatedstudent,id)
        res.status(200).send(result);    
    } catch (error) {
        console.log("error :",error)
        res.status(500).json({data :"Internal Server Error"})
    }
})

//delete using mongo
router.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const results = await deleteStudent(id);
        res.status(200).send(results)    
    } catch (error) {
        console.log("Error :",error)
        res.status(500).json({data :"Internal Server Error"})
    }
})

export const studentsROuter = router;