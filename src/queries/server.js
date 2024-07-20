const baseURL="https://habblum.net/nitrodata/gamedata/json"
export function getAllRares(setFurniture){

    try{
        
        const res = fetch(`${baseURL}/FurnitureData.json`,{cache:'no-store'})
        .then(res => res.json())
        .then(data => setFurniture(data?.roomitemtypes.furnitype))        

    }
    catch(error){
        console.log(error)
    }
}

export async function getRares(id){

    try{
        
        const res = await fetch(`${baseURL}/FurnitureData.json`,{cache:'no-store'});
        const data = await res.json();
        const item=data.roomitemtypes.furnitype.find(item=>item.id==id)
        //console.log(data.roomitemtypes.furnitype[0])
        
        return item
    }
    catch(error){
        console.log(error)
    }
}
