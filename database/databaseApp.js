const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()



const connection = async(state) => {
     const URI = process.env.URI
    if(state === "disconnnect"){
        const disconnect = await mongoose.disconnect()
        console.log("disconnected")
    }else {
        const connect = await mongoose.connect(URI)
        console.log("connected")

    }
    
    
    
}
module.exports = connection