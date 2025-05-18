const auth = require('../models/auth');
const bcrypt = require('bcrypt');

const register =async (req, res) => {
    const {username, email, password} = req.body;

    const existingUser = await auth.findOne({ email })
    if(existingUser){
        return res.status(400).json({ message: "User exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const User = new auth({
        username,
        email,
        password: hashedPassword
    })
    await User.save
    res.status(201).json({ message: 'User registered successfully' });
}

const login = () => {

}