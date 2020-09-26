import React from "react";
import "./MovieDetail.css";

class MovieDetail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state === undefined);
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render = ()=> {
        const { location } = this.props;
        if ( location.state === undefined) {
            return null
        }

        let {title, year, image, genre, summary, rating} = location.state.movie;
        
        return <div className="container">
            <div className="movieDetail">
                <img className="detail_image" src={image} alt={title} title={title}></img>
                <div className="detail_info">
                    <div className="detail_title">{title}</div>
                    <div className="detail_year">{year}</div>
                    <div className="detail_genre"><ul>{genre.map((e, idx)=><li key={idx}>{e}</li>)}</ul></div>
                    <div className="detail_rating">
                        {rating}
                    </div>
                    <div className="detail_summary">{summary}</div>
                </div>
                
            </div>
        </div>
    };
}

export default MovieDetail;