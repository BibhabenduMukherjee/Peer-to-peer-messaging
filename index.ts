import { getRandomSeedServer } from "./src/getRandomSeed";
import { registerWithSeedServer } from "./src/registerWithSeedServer";
import { lookup } from "./src/routes/lookup";
import { resgister } from "./src/routes/register";

const express = require("express")
const app = express();
const PORT = process.env.PORT ?? 3000
app.post("/register" , resgister)
app.get("/lookup" , lookup)
 async function intialize (){
const seeds= getRandomSeedServer();
// bellow code gives us a promise reslove it

await registerWithSeedServer(seeds)

console.log(seeds)
}

setTimeout(()=>{

    intialize();
},500)


app.listen(PORT, ()=>{
    console.log("ok");
    
})