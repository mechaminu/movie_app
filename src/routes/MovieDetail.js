import React from "react";
import ReactYoutube from "react-youtube";
import "./MovieDetail.css";

class MovieDetail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render = ()=> {
        const { location } = this.props;
        if ( location.state === undefined) {
            return null
        }

        let {title, year, large_cover_image, genres, summary, rating,yt_trailer_code} = location.state.movie;
        
        return <div className="container">
            <div className="movieDetail">

                <div className="detail_imageWrapper">
                    <img className="detail_image" src={large_cover_image} alt={title} title={title} />
                </div>

                <div className="detail_info">
                    <div className="detail_title">{title}</div>
                    <div className="detail_year">{year}</div>
                    <div className="detail_genre"><ul>{genres.map((e, idx)=><li key={idx}>{e}</li>)}</ul></div>
                    <div className="detail_rating">
                        {rating}
                    </div>
                    <div className="detail_summary">{summary}</div>
                    <ReactYoutube videoId={yt_trailer_code} />
                </div>
                
            </div>
        </div>
    };
}

export default MovieDetail;