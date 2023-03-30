import type {Request , Response} from "express"
import { lookupUser } from "../lookupuser";
import { getNodeByUserName, getNodes } from "../servers"


// seed server loohup-end point so that connected people 
// can request for query -- lookup ip
export async function lookup(req:Request , res : Response){

    const {user} = req.query as {user : string}
    // lookup handler take username
    // as a query and try to find 
   const serverByUser  = getNodeByUserName(req.query.user as string)

   // if user is not found in one seed server
   // lookup all the server

   if(!serverByUser){

    let foundUser;

    for(let server of getNodes()){
   
    
    try{
       foundUser = await lookupUser(server.uri , user)
    }catch(err){}

    }
 
    res.status(404).json({error : "USER NOT FOUND"})
   }
   res.json({user : serverByUser})
}