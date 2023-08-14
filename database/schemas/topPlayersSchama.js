import mongoose from "mongoose";


const top_players_schema = new mongoose.Schema({
    top_img: String,
    top_info: String,
    top_country_flag: String, 
    top_ovr: String,
    top_pot: String,
    top_name: String,
    top_prefered_position_one: String,
    top_prefered_position_two: String,
    top_prefered_position_three: String,
    top_age: String,
    top_club_img: String 
})

const top_player = mongoose.model("topPlayers", top_players_schema)


export default top_player

