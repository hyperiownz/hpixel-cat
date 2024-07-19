import Furniture from "@/components/catalog/furniture";
import { getRares } from "@/queries/server";
async function Item({params}) {
    
    const id= params.idFurniture
    const itemData= await getRares(id)
    console.log("*********")
    console.log(itemData)
    console.log("*********")
    return (
        <div>
            <h1>Item</h1>
            <Furniture {...itemData} />
        </div>
    );
}

export default Item;