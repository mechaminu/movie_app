import React from "react";
import PropTypes from "prop-types";
import "./MovieElem.css"

function MovieElem({title, year, image, genre, summary, rating}) {
    return <div className="movieElem">
        <img className="movieElem_image" src={image} alt={title} title={title}></img>
        <div className="movieElem_info">
            <div className="movieElem_title">{title}</div>
            <div className="movieElem_year">{year}</div>
            <div className="movieElem_genre"><ul>{genre.map((e, idx)=><li key={idx}>{e}</li>)}</ul></div>
            <div className="movieElem_rating">{rating}</div>
            <div className="movieElem_summary">{summary.length > 170 ? summary.slice(0,170)+"..." : summary}</div>
        </div>
    </div>
}

MovieElem.propTypes = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
    genre:PropTypes.arrayOf(PropTypes.string).isRequired,
    summary:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}

export default MovieElem