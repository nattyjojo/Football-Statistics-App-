const express = require("express");
const homeRouteMiddleware = require("./routes/middleWares/homeRouteMiddleware.js");
const colors =  require("./globals/colors.js");


const route = express.Router()

route.get('/home', async (req, res) => {

   try{
      const players_data = await homeRouteMiddleware()
      //console.log(players_data)
      res.render('partial', {player: players_data,colors})
      
   }catch (err){
      console.error(err)
   }
   
  
   

}) 

module.exports = route
