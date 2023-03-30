import type {Request , Response} from "express"
import { lookupUser } from "../lookupuser";
import { addNode, getNodeByUserName, getNodes } from "../servers"
import {v4 as uuidv4} from "uuid"

// seed server loohup-end point so that connected people 
// can request for query -- lookup ip

const seedId = new Set()
export async function lookup(req:Request , res : Response){
    const requestId = req.get("x-request-id") ?? uuidv4();
    const {user} = req.query as {user : string}
     // check the server has already visited
     if(seedId.has(requestId)){
      return res.status(400).send("user not found")
     }
   
   seedId.add(requestId);

    // lookup handler take username
    // as a query and try to find 
   const serverByUser  = getNodeByUserName(req.query.user as string)

   // if user is not found in one seed server
   // lookup all the server

   if (!serverByUser) {
      let foundUser;
  
      for (let server of getNodes()) {
        try {
          foundUser = await lookupUser(user, server.uri, requestId);
        } catch (err) {}
      }
  
      if (foundUser) {
        console.log(`cached ${foundUser.user}`);
        addNode(foundUser);
        return res.json(foundUser);
      } else {
        return res.status(404).send("user not found");
      }
    }
   }
   //res.json({user : serverByUser})
