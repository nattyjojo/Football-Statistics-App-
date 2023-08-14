import axios from 'axios';
import cheerioParsePlayer from './cheerioParsePlayers.js';
import cheerioParseTeams from './cheerioParseTeams.js';
import cheerionParseRanking from './cheerioParseRankings.js';
import cheerioParseTopPlayers from './cheerioTopPlayers.js';


const getPages = async(page_url, subject) => {
    
    for(let i = 0; i < page_url.length; i++){

        try{
            const page = await axios.get(page_url[i])
            const response = await page.data

            if(subject === 'rankings'){
                console.log("rankings")
             
                const parse_ranking_html = await cheerionParseRanking(response)
            
            }else if(subject === 'teams'){
                console.log("teams")
                const parse_teams_html = await cheerioParseTeams(response)

            }else if(subject === 'topPlayers'){
                console.log("top players")
                const parse_top_players_html = await cheerioParseTopPlayers(response)

            }else{
                subject === 'player'
                console.log("players")
                const parse__html = await cheerioParsePlayer(response)
                
            }

        }catch (err){
            console.error(err)
        }

    }
}

export default getPages
