import type {Request , Response} from "express"
import { addNode } from "../servers"

export function resgister(req:Request , res : Response){
    // const {uri  , user} = req.body
    // addNode({uri , user})
    console.log(req.body)
     console.log("ok")
    res.json({message : "ok"})
}