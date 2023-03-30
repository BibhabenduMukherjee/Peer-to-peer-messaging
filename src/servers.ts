

type Node =  {
 uri : string,
 user : string
}
 const servers: Node[] = [];


export function getNodes()
{
    return [...servers]
}

export function addNode(node:Node){
// add the ip information to the Store
// check already exists to the store
const alreadyExists = servers.find((record)=>{
    record.user === node.user
})
if(alreadyExists) return;
console.log("one registed")
servers.push(node)
}


export function getNodeByUserName(username: string){
  return servers.find((server)=> server.user === username)
}