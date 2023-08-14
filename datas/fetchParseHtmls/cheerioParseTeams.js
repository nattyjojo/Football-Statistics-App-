import Cheerio from "cheerio";
import connection from "../../database/databaseApp.js";
import teams from "../../database/schemas/teamsSchema.js";


const cheerioParseTeams = async(data) => {
    const $ = Cheerio.load(data)
    const teams_table_rows =  $('tbody tr')
    for(let i  = 0; i < teams_table_rows.length; i++){
        const team_table_row = $(teams_table_rows[i]).text()
        if(team_table_row.length > 9){

            const team_img = $(teams_table_rows[i]).find('td .size-5').attr('src');
            const team_info_page = 'https://www.fifaindex.com'+$(teams_table_rows[i]).find('td a').attr('href');
            const team_name = $(teams_table_rows[i]).find('[data-title="Name"]').text()
            const team_league_name = $(teams_table_rows[i]).find('[data-title="League"]').text()
            const team_league_info = 'https://www.fifaindex.com'+$(teams_table_rows[i]).find('[data-title="League"] .link-league').attr('href')

            // teams         
            const team_att = $(teams_table_rows[i]).find('[data-title="ATT"]').text()
            const team_mid = $(teams_table_rows[i]).find('[data-title="MID"]').text()
            const team_def = $(teams_table_rows[i]).find('[data-title="DEF"]').text()
            const team_ovr = $(teams_table_rows[i]).find('[data-title="OVR"]').text()

            //Ratings stars
            /// "font awesome 5 free"
            const team_rating1 = $(teams_table_rows[i]).find('[data-title="Team Rating"] :nth-child(2)').attr('class')
            const team_rating2 = $(teams_table_rows[i]).find('[data-title="Team Rating"] :nth-child(3)').attr('class')
            const team_rating3 = $(teams_table_rows[i]).find('[data-title="Team Rating"] :nth-child(3)').attr('class')
            const team_rating4 = $(teams_table_rows[i]).find('[data-title="Team Rating"] :nth-child(4)').attr('class')
            const team_rating5 = $(teams_table_rows[i]).find('[data-title="Team Rating"] :nth-child(5)').attr('class')

            await connection()
            await teams.create({
                team_img: team_img,
                team_info: team_info_page,
                team_name: team_name,
                team_league_name: team_league_name,
                team_league_info: team_league_info,
                att: team_att,
                mid: team_mid,
                def: team_def,
                ovr: team_ovr,
                rating_one: team_rating1,
                rating_two: team_rating2,
                rating_three: team_rating3,
                rating_four: team_rating4,
                rating_five: team_rating5,

            })
            console.log("teams data saved to databasa")


           
            // console.log({team_img, team_info_page, team_name, team_league_name, team_league_info, team_att, team_mid,team_def, team_ovr,
            //     team_rating1, team_rating2, team_rating3, team_rating4, team_rating5

            // })
        }

    }

}

export default cheerioParseTeams




