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

const login = async(req, res) => {
    const { email, password} = req.body;

    const user = await auth.findOne({email});
    if(!user) return register.status(400).json({message: "email doesn't exist"})

    const isMatch = await bcrypt.compare(password, auth.password);
    if(!isMatch) return res.status(400).json({message : "Incorrect Password"})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '2h'});

    res.json({ message: 'Login successful', token });

}