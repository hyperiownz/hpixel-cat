import './styles.css'

function Furniture({id,category,name,description,rare}) {

    return (
        <div className="furniture-card">
                <h1>{name} ({id})</h1>
                <p>{description}</p>
                <div>{rare ? "Rare" : "Normal"}</div>
        </div>
    );
}

export default Furniture;