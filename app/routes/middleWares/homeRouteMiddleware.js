import connection from "../../../database/databaseApp.js"
import player from "../../../database/schemas/playersSchema.js";


const homeRouteMiddleware = async () => {
    try{
        await connection()
        const players = player.find().limit(30);
        
        return players

    }catch (err){
        console.error(err)
    }
}
export default homeRouteMiddleware