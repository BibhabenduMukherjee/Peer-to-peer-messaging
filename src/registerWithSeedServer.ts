import fetch  from "cross-fetch"

export function registerWithSeedServer(url : string){
return fetch(`${url}/register`,{
    method : 'POST',
    body : JSON.stringify({
        uri : "http://localhost:3000",
        user : 'sally'
    }),
    headers : {
        'content-type' : 'application/json'
    }
}).then((res) =>{res.json()})
}



