
import Cheerio from "cheerio";
import connection from "../../database/databaseApp.js";
import ranking_schema from "../../database/schemas/rankingschema.js";


const cheerioParseRanking = async(html) => {
    const $ = Cheerio.load(html);
    const rankingsMain = $('main .row')
    const header_one = $(rankingsMain).find('h1').text()
    const ranking_titles = $(rankingsMain).find('.row')


    const all_rows = $(rankingsMain).find(".row")
    // Top Players in FIFA 22 Career Mode

    const row_one = $(all_rows[0]).find('div')
    for(let i = 0; i < row_one.length; i++){
        const img = $(row_one[i]).find('img').attr('src')
        const info = 'https://www.fifaindex.com'+$(row_one[i]).find('a').attr('href')
        const title = $(row_one[i]).find('a').text()
        await connection()
        await ranking_schema.create({
            img: img,
            info: info,
            tittle: title

        })



    }
    // Top Premier League Players in FIFA 22 Career Mode
    const row_two = $(all_rows[1]).find('div')
    for(let i = 0; i < row_two.length; i++){
        const img = $(row_two[i]).find('img').attr('src')
        const info = 'https://www.fifaindex.com'+$(row_two[i]).find('a').attr('href')
        const title = $(row_two[i]).find('a').text()

        await connection()
        await ranking_schema.create({
            img: img,
            info: info,
            tittle: title

        })

    }
    //Top Bundesliga League Players in FIFA 22 Career Mode
    const row_three = $(all_rows[2]).find('div')
    for(let i = 0; i < row_three.length; i++){
        const img = $(row_three[i]).find('img').attr('src')
        const info = 'https://www.fifaindex.com'+$(row_three[i]).find('a').attr('href')
        const title = $(row_three[i]).find('a').text()

        await connection()
        await ranking_schema.create({
            img: img,
            info: info,
            tittle: title

        })

    }

    

    

}
export default cheerioParseRanking


