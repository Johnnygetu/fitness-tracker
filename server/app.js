const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require('./routes/userRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter)

const PORT = 6969;

mongoose
  .connect(
    "mongodb+srv://yishak:rfTtsGRqkPr5ILhL@write-wave.3yjawuk.mongodb.net/fitness-tracker?retryWrites=true&w=majority&appName=write-wave",{
        useNewUrlParser:true,
        useFindAndModify:true,
        useFindAndModify:false
    }
  )
  .then(() => {
    console.log("DB Connection successful");
  }).catch((err)=>{
    console.log(err);
  });

  app.get('/test', (req, res)=>{
    console.log(req.file);
    res.status(200).json({
        message:"Test succeessful"
    })
  })


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
