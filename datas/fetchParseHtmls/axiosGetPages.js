import axios from 'axios';
import cheerioParsePlayer from './cheerioParsePlayers.js';
import cheerioParseTeams from './cheerioParseTeams.js';
import cheerionParseRanking from './cheerioParseRankings.js';


const getPages = async(page_url, subject) => {
    for(let i = 0; i < 1; i++){
        try{
            const page = await axios.get(page_url[i])
            const response = await page.data

            if(subject === 'rankings'){const parse_html = await cheerionParseRanking(response)}
            if(subject === 'teams'){const parse_html = await cheerioParseTeams(response)}
            const parse_html = await cheerioParsePlayer(response)

            

        }catch (err){
            console.error(err)
        }

    }

     

    
  
   

}


export default getPages
