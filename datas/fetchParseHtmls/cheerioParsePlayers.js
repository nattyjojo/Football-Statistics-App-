import Cheerio from "cheerio"


const cheerioParsePlayer = async(html) => {
    const $ = Cheerio.load(html)
    //const player_img = $('tr[data-playerid] .size-5').attr('src')
    const player_data = $('tr[data-playerid]')
    
    for (let i = 0; i <  player_data.length; i++){
        const player_img = $(player_data[i]).find('.size-5').attr('src')
        const player_national_flag = $(player_data[i]).find('.size-2').attr('src')
        const player_ovr = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(1)').text()
        const player_pot = $(player_data[i]).find('td[data-title="OVR / POT"] > span:nth-child(2)').text()
        const player_name = $(player_data[i]).find('td[data-title="Name"]').text()

        const player_postion1 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(1)').text()
        const player_postion2 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(2)').text()
        const player_postion3 = $(player_data[i]).find('td[data-title="Preferred Positions"] > a:nth-child(3)').text()
        const player_age = $(player_data[i]).find('td[data-title="Age"]').text()

        const player_club_img = $(player_data[i]).find('.size-3').attr('src')
        console.log({player_img, player_national_flag, player_ovr, player_pot, player_name, player_postion1,player_postion2,player_postion3,player_age})
        

    }
   
}
export default cheerioParsePlayer