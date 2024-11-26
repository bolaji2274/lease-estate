import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';
import User from '../models/User.js';

const router = express.Router();

// Ensure uploads directory exists
if (!fs.existsSync('public/uploads/')) {
    fs.mkdirSync('public/uploads/', { recursive: true });
}

// Setting up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Store uploaded files in public/uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to avoid name clashes
    },
});

const upload = multer({ storage });

// Register endpoint
router.post('/register', upload.single('profileImg'), async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const profileImage = req.file;

        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields.' });
        }

        if (!profileImage) {
            return res.status(400).json({ message: 'Profile image is required.' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists!' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath: profileImage.path,
        });

        // Save the new user
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'User registered successfully!',
            user: { id: newUser._id, firstName: newUser.firstName, email: newUser.email },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'User registration failed.', error: error.message });
    }
});

export default router;
