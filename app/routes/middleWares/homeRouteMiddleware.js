const connection = require("../../../database/databaseApp.js");
const player = require("../../../database/schemas/playersSchema.js");


const homeRouteMiddleware = async () => {
    console.log("yess")
    try{
        await connection()
        const players = await player.find().limit(30);
        
        return players

    }catch (err){
        console.error(err)
    }
}
module.exports = homeRouteMiddleware