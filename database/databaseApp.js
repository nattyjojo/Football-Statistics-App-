import mongoose from "mongoose";
import dotenv from "dotenv"
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
export default connection