import mongoose from "mongoose";

const ranking_schema = ({
    img: String,
    info: String,
    tittle: String

})
const ranking = mongoose.model("player_rankings", ranking_schema)
export default ranking