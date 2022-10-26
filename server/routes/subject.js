const express = require("express");
const subject = require("../module/subject");
const route = express.Router();

//add a subject
route.post("/subject/create",(req,res)=>{
    let createPost = new subject(req.body);
    createPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            Success:"Data Added Successfull"
        });
    });
});

//find a subject
route.get("/subject",(req,res)=>
    subject.find().exec((err,p)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            Success : true,
            resulting:p
        });
    })
);
//update a subject
route.put("/subject/update/:id",(req,res)=>{
    subject.findByIdAndUpdate(
        req.params.id,{
            $set : req.body
        },
        (err,p)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                Success:"Update Successfully."
            });
        }
    )
    
});

//delete a subject
route.delete("/subject/delete/:id",(req,res)=>{
    subject.findByIdAndDelete(req.params.id).exec((err,deletesubject)=>{
        if(err){
            return res.status(400).json({
                message : "Delete Unsuccessfull",err
            });
        }
        return res.status(200).json({
            message : "Delete Successfull",deletesubject
        });
    });
});

//get specific subject
route.get("/subject/:id",(req,res)=>{
    let subjectid = req.params.id;
    subject.findById(subjectid,(err,p)=>{
        if(err){
            return res.status(400).json({Success:false,err});
        }
        return res.status(200).json({Success:true,p})
    })
});

module.exports = route;