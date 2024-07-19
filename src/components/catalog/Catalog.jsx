import Furniture from "./furniture";
import { getAllRares } from "@/queries/server";
    
async function Catalog() { 

    const data=await getAllRares()
    const furnilist=data.slice(0,10) 
    const listFuniture=furnilist.map((item)=><Furniture key={item.id}  {...item} />)
    return (
        <div className="flex flex-col gap-4">
            {listFuniture}
        </div>
    );
}

export default Catalog;