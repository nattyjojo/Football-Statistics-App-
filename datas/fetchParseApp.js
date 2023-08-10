import players_pages from "./pages/playerPages.js";
import getPages from "./fetchParseHtmls/axiosGetPages.js";
import topPLayersUri from "./pages/topPlayersPages.js";
import teamsUri from "./pages/teamsPages.js";

const rankings_url = ['https://www.fifaindex.com/rankings/'];

const getData = async() => {
    //await getPages(players_pages)
    //await getPages(topPLayersUri)
    //await getPages(teamsUri, 'teams')
    //await getPages(rankings_url, 'rankings')
    await getPages(rankings_url, 'rankings')

}
getData()