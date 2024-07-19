

function Furniture({id,category,name,description}) {

    return (
        <div className="flex flex-col gap-2 border-t-4 border-black">
                <h1>{name} ({id})</h1>
                <div>{category}</div> 
                <p>{description}</p> 

                
            
        </div>
    );
}

export default Furniture;