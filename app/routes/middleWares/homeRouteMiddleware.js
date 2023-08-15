const connection = require("../../../database/databaseApp.js");
const player = require("../../../database/schemas/playersSchema.js");


const homeRouteMiddleware = async () => {
    try{
        await connection()
        const players = player.find().limit(30);
        
        return players

    }catch (err){
        console.error(err)
    }
}
module.exports = homeRouteMiddleware