import { getRandomSeedServer } from "./src/getRandomSeed";
import { registerWithSeedServer } from "./src/registerWithSeedServer";
import { resgister } from "./src/routes/register";

const express = require("express")
const app = express();

app.post("/register" , resgister)
 async function intialize (){
const seeds= getRandomSeedServer();
// bellow code gives us a promise reslove it

await registerWithSeedServer(seeds)

console.log(seeds)
}

intialize();

app.listen(3000 , ()=>{
    console.log("ok");
    
})