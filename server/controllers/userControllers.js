const User = require("./../models/userModels");

exports.createUser = async (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.weight || !req.body.height) {
    return res.json({
      status: "fail",
      message: "Please fill all the required fields",
    });
  }
  const user = await User.create({
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
  });

  res.status(200).json({
    status:"success",
    message:"User created successfully"
  })
};

exports.getAllUsers = async (req, res)=>{
    const users = await User.find()
    res.status(200).json({
        status:"success",
        data:{
            users
        }
    })
}