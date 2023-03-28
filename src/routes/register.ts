import type {Request , Response} from "express"
import { servers } from "../servers"
export function resgister(req:Request , res : Response){
    const {uri  , user} = req.body
    servers.push({uri , user})

    res.send("success")
}