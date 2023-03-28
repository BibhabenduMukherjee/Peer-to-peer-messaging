const seed = require("../seed")
export const getRandomSeedServer = ()=>{
return seed[Math.floor(Math.random() * seed.length)]
}