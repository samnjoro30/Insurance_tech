const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1];

    if (!token) return res.status(401).json( { message: "Access denied"});

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: verified.id };
        next();
    }catch(err){
        res.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports = verifyToken