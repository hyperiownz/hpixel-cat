import Furniture from "./furniture";
import { getAllRares } from "@/queries/server";
import './catalog.css'
async function Catalog() { 

    const data=await getAllRares()
    console.log(data)
    const furnilist=data.slice(0,42)
    const listFuniture=furnilist.map((item)=><Furniture key={item.id}  {...item} />)
    return (
        <div>
            <div className="furniture-container">
                {listFuniture}
            </div>
        </div>
    );
}

export default Catalog;