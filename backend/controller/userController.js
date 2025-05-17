import User from "../model/userModel.js";
     ///REACT USER
   export const create = async (req, res) => {
  try {
       const newUser = new User(req.body);
       const { email } = newUser;
       const existuser = await User.findOne({ email });

    if (existuser) {
        return res.status(400).json({ message: "user already exist" });
    }
        const saveData = await newUser.save();
        res.status(200).json({message:"user created successfully."});
  } catch (error) {
         res.status(500).json({ errorMessage: error.message });
  }
};

///GET USERS
   export const getAlldata = async (req, res) => {
  try {
        const userData = await User.find();
    if (!userData || userData.length === 0) {
        res.status(404).json({ message: "user data not foundt" });
    }
    res.status(200).json(userData)
  } catch (error) {
        res.status(500).json({errorMessage:error.message})
  }
};
////GET ONE USER
export const getUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const existuser=await User.findById(id)
        if(!existuser){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json(existuser)
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
}
// updatauser
export const Updatauser=async(req,res)=>{
      try {
          const id=req.params.id;
        const existuser=await User.findById(id);
        if(!existuser){
            return res.status(404).json({message:"user not found"})
        }
        const userApdata=await User.findByIdAndUpdate(id,req.body,{
            new:true
        })
        // res.status(200).json(userApdata)
         res.status(200).json({message:"user updat successfully."});
      } catch (error) {
        res.status(500).json({errorMessage:error.message})
      }
}
export const deletUser=async(req,res)=>{
   try {
     const id=req.params.id;
    const existuser=await User.findById(id);
    if(!existuser){
        res.status(404).json({message:'user not found'});
    }
     await User.findByIdAndDelete(id)
     res.status(200).json({message:"user deleted successfully"})

   } catch (error) {
    
   }

}

