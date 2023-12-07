import React from "react"

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} />
            </div>
            <div className="card-info">
                <p className="location">
                    <i className="icon fa-solid fa-location-dot"></i>
                    <span className="country">{props.location.toUpperCase()}</span>
                    <a className="google-map" href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h2 className="title">{props.title}</h2>
                <h3 className="date">{`${props.startDate} - ${props.endDate}`}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;