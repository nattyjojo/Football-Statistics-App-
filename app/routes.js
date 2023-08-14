import express from "express";
import homeRouteMiddleware from "./routes/middleWares/homeRouteMiddleware.js";
import colors from "./globals/colors.js";


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


export default route