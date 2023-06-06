import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";



  /* LOGGING IN */
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      delete user.password;
      res.status(200).json(token);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const verify = (req, res) => {
      try{
          let token = req.header("Authorization");
  
          if(!token) {
              return res.status(403).json("Not authorized");
          }
  
          if (token.startsWith("Bearer ")) {
              token = token.slice(7, token.length);
          }
  
          const verified = jwt.verify(token, process.env.JWT_SECRET);
          if(verified){
            res.status(200).json("verified");
          }
      }catch (err) {
          res.status(500).json({error: err.message});
      }
  } 




  