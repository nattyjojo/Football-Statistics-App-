import mongoose from "mongoose";


const players_schema = new mongoose.Schema({
    img: String,
    info: String,
    country_flag: String, 
    ovr: String,
    pot: String,
    name: String,
    prefered_position_one: String,
    prefered_position_two: String,
    prefered_position_three: String,
    age: String,
    club_img: String 
})

const player = mongoose.model("players", players_schema)


export default player

