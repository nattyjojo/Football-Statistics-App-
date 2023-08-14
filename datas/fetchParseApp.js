import players_pages from "./pages/playerPages.js";
import getPages from "./fetchParseHtmls/axiosGetPages.js";
import topPLayersUri from "./pages/topPlayersPages.js";
import teamsUri from "./pages/teamsPages.js";

const rankings_url = ['https://www.fifaindex.com/rankings/'];

const getData = async() => {
    await getPages(players_pages, "player")
    await getPages(topPLayersUri, "topPlayers")
    await getPages(teamsUri, 'teams')
    await getPages(rankings_url, 'rankings')

}
getData()