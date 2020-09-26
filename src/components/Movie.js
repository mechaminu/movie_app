import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie(props) {
    let {title, year, image, genre, summary, rating} = props
    return <Link to={{
        pathname:"/movie_detail",
        state: {
            movie: props
        }
    }}>
        <div className="movie">
            <img className="movie_image" src={image} alt={title} title={title}></img>
            <div className="movie_info">
                <div className="movie_title">{title}</div>
                <div className="movie_year">{year}</div>
                <div className="movie_genre"><ul>{genre.map((e, idx)=><li key={idx}>{e}</li>)}</ul></div>
                <div className="movie_rating">
                    {RatingStar(rating)}
                </div>
            </div>
            <div className="movie_summary">{summary.length > 200 ? summary.slice(0,200)+"..." : summary}</div>
        </div>
    </Link>
}

function RatingStar(rating) {
    let str=""
    for (let i = Math.round(rating/10*5); i > 0; i--) {
        str = str + "★";
    }
    str = str + "☆☆☆☆☆";
    return str.slice(0,5)+" ("+rating+")";
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
    genre:PropTypes.arrayOf(PropTypes.string).isRequired,
    summary:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}

export default Movie