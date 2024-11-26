import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import User from '../models/User.js'

const router = express.Router()

// setting mutter for file upload 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads/") // Storing the uploads file in public/uploads folder
    },
    filename: function(req, file, cb){
        cb(null, file.originalname) // using the original 
    }
})

const upload = multer({storage})

router.post("/register", upload.single("profileImg"), async (req, res) => {
    try {
        // Get all the information from the form
        const { firstName, lastName, email, password } = req.body
        // the upload file is available as req.file
        
        const profileImage = req.file

        if(!profileImage){
            return res.status(400).send('No file uploaded')
        }
    

    // path of uploaded file image
    const profileImagePath = profileImage.path

    // checking if user already exist

    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(409).json({message: 'User already exists!'})
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a New User 
    const newUser = new User ({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profileImagePath,
    })

    // saving the new User
    await newUser.save()

    res.status(200).json({message: "User Registered Successfully",
        user: newUser
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "User Registration Failed", error:error.message})
    }
})

export default router;