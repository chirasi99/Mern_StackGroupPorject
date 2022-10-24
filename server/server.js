const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const studentDetails = require('./routes/student');
const bookDetails = require('./routes/book');
const PORT = 3500;
app.use(bodyParser.json());
app.use(studentDetails);
app.use(bookDetails);
app.use(cors());

//import routes
const TeacherRoutes = require("./routes/teachers");
app.use(TeacherRoutes);

app.listen(PORT,()=>{
    console.log(`listing on ${PORT} `)
});
const URL_MON = "mongodb+srv://kasun:kasun@cluster0.4ttnhtn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL_MON).then(()=>{
    console.log("DB connection successful");
}).catch((err)=>{
    console.log("DB connection Unsuccessful",err)
})