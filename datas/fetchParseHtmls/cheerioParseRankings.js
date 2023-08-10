
import Cheerio from "cheerio";

const cheerionParseRanking = async(html) => {
    const $ = Cheerio.load(html);
    const rankingsMain = $('main .row')
    const header_one = $(rankingsMain).find('h1').text()
    const ranking_titles = $(rankingsMain).find('.row')

    // wonder kid div
    const wonderKid = $(ranking_titles[0])
    const wonder_kid_img = $(wonderKid).find('.row .col-md-4 img').attr('src')
    const wonder_kid_title = $(wonderKid).find('.row .col-md-4:nth-child(1)').text()
    const wonder_kid_info_uri = 'https://fifastatic.fifaindex.com' + $(wonderKid).find('.row .col-md-4 .btn').attr('href')


    // hidden gems
    const hidden_gems = $(ranking_titles[1])
    const hidden_gems_img = $(hidden_gems).find('.row .col-md-4 img').attr('src')
    const hidden_gems_title = $(hidden_gems).find('.row .col-md-4:nth-child(1)').text()
    const hidden_gems_info_uri = 'https://fifastatic.fifaindex.com' + $(hidden_gems).find('.row .col-md-4 .btn').attr('href')

    console.log(hidden_gems_img)
    console.log(hidden_gems_title)
    console.log(hidden_gems_info_uri)
    
    // for(let i = 0; i < ranking_titles.length; i++){

      
    // //    console.log(title_link)

    // }
  
    

}//  col-md-4 featured   main .row .row .col-md-4
export default cheerionParseRanking