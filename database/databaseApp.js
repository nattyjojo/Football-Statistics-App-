const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const URI = process.env.URI

const connection = async(state) => {
    if(state === "disconnnect"){
        const disconnect = await mongoose.disconnect()
        console.log("disconnected")
    }else {
        const connect = await mongoose.connect(URI)
        console.log("connected")

    }
    
    
    
}
module.exports = connection