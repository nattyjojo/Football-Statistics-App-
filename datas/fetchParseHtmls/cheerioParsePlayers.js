import Cheerio from "cheerio";
import connection from "../../database/databaseApp.js";
import player_schema from "../../database/schemas/playersSchema.js";



const cheerioParsePlayer = async(html) => {
    
    const $ = Cheerio.load(html)
    const player_data = $('tr[data-playerid]')
    
    for (let i = 0; i <  player_data.length; i++){
        const player_img = $(player_data[i]).find('.size-5').attr('src')
        const player_info = 'https://www.fifaindex.com'+$(player_data[i]).find('a').attr('href')
        const player_national_flag = $(player_data[i]).find('.size-2').attr('src')
        const player_ovr = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(1)').text()
        const player_pot = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(2)').text()
        const player_name = $(player_data[i]).find('td[data-title="Name"]').text()

        const player_postion1 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(1)').text()
        let player_postion2 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(2)').text()
        if(player_postion2 === ''){
            player_postion2 = "null"
        }
        let player_postion3 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(3)').text()
        if(player_postion3 === ''){
            player_postion3 = "null"
        }

        let player_age = $(player_data[i]).find('td[data-title="Age"]').text()

        const player_club_img = $(player_data[i]).find('.size-3').attr('src')

        await connection()
        await player_schema.create({
            img: player_img,
            info: player_info,
            country_flag: player_national_flag,
            ovr: player_ovr,
            pot: player_pot,
            name: player_name,
            prefered_position_one: player_postion1,
            prefered_position_two: player_postion2,
            prefered_position_three: player_postion3,
            age: player_age,
            club_img: player_club_img

        })

    }
    console.log("done")
    
   
}
export default cheerioParsePlayer