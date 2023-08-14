import Cheerio from "cheerio";
import connection from "../../database/databaseApp.js";
import top_player from "../../database/schemas/topPlayersSchama.js";



const cheerioParseTopPlayers = async(html) => {
    
    const $ = Cheerio.load(html)
    const player_data = $('tr[data-playerid]')
    
    for (let i = 0; i <  player_data.length; i++){
        const top_player_img = $(player_data[i]).find('.size-5').attr('src')
        const top_player_info = 'https://www.fifaindex.com'+$(player_data[i]).find('a').attr('href')
        const top_player_national_flag = $(player_data[i]).find('.size-2').attr('src')
        const top_player_ovr = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(1)').text()
        const top_player_pot = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(2)').text()
        const top_player_name = $(player_data[i]).find('td[data-title="Name"]').text()

        const top_player_postion1 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(1)').text()
        let top_player_postion2 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(2)').text()
        if(top_player_postion2 === ''){
            top_player_postion2 = "null"
        }
        let top_player_postion3 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(3)').text()
        if(top_player_postion3 === ''){
            top_player_postion3 = "null"
        }

        let top_player_age = $(player_data[i]).find('td[data-title="Age"]').text()

        const top_player_club_img = $(player_data[i]).find('.size-3').attr('src')

        await connection()
        await top_player.create({
            top_img: top_player_img,
            top_info: top_player_info,
            top_country_flag: top_player_national_flag,
            top_ovr: top_player_ovr,
            top_pot: top_player_pot,
            top_name: top_player_name,
            top_prefered_position_one: top_player_postion1,
            top_prefered_position_two: top_player_postion2,
            top_prefered_position_three: top_player_postion3,
            top_age: top_player_age,
            top_club_img: top_player_club_img

        })

    }
    console.log("done")
    
   
}
export default cheerioParseTopPlayers