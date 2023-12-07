import React from "react"
import Card from "./Card"
import data from "./data"


function Cards() {
    const jsxData = data.map(item => <Card key={item.id} {...item} />);
    return (
        <main className="card-list"> 
            {jsxData}
        </main>
    )
}

export default Cards;