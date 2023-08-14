import mongoose from "mongoose";


const teams_schema = ({
    team_img: String,
    team_info: String,
    team_name: String,
    team_league_name: String,
    team_league_info: String,
    att: String,
    mid: String,
    def: String,
    ovr: String,
    rating_one: String,
    rating_two: String,
    rating_three: String,
    rating_four: String,
    rating_five: String,
})

const teams = mongoose.model('teams', teams_schema)

export default teams