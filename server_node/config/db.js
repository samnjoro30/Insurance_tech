const mongoose = require('mongoose');
require('dotenv').config();

const Mongo_Db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CLOUD)
        console.log("COnnected to mongo successfull");
    }catch(error){
        console.error("Cant connect to database", error);
    }
}

export default Mongo_Db;