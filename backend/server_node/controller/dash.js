const Users = require('../models/auth');

const dashboard = async (req, res) => {

    try{
        const userId = req.user?.id;
        if(!userId){
            return res.status(401).json({  message: 'Unauthorized Access'})
        }
        const user = await Users.findById(userId).select('email username');
        if (!user) {
            return res.status(401).json({ message: "user not found"});
        }
        res.status(200).json({
            email: user.email,
            name: user.username,
        })
    }catch(err){
        console.error('Error retrieving details: ', err);
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = {
    dashboard,
}