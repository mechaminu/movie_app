import React from "react";
import Axios from "axios";
// import PropTypes from "prop-types";


class ClassApp extends React.Component {

    // constructor(p) {
    //     super(p);
    //     console.log("Hello, world!");
    // }

    // 바뀌는 데이터를 담는 그릇, State
    state = {   // elements can be defined in setState
        count: 0,
        isLoading: true,
        movies: []
    };

    // React re-render page for every setState execution
    plus = () => {
        this.setState(c => ({ count: c.count + 1 }));
    };

    minus = () => {
        this.setState(c => ({ count: c.count - 1 }));
    };

    /** Component Lifecycle Call stack
     *  - mounting
     *      constructor
     *      render
     *      componentDidMount
     *  - updating
     *      render
     *      componentDidUpdate
     *  - unmounting
     *      componentWillUnmount
     */

    componentDidMount() {
        console.log("rendered");
        this.getMovies();
    }

    getMovies = async () => {
        const res = await Axios.get("https://yts-proxy.now.sh/list_movies.json");
        
        this.setState(({isLoading:false,movies:res.data.data.movies}));
    }

    componentDidUpdate() {
        console.log("updated");
    }

    componentWillUnmount() {
        console.log("Goodbye, cruel world...!")
    }

    // React는 자동적으로 Class component의 render 메소드를 실행한다!
    render() {
        console.log("rendering");
        return <div>
            <div>
                <h1>Movie List</h1>
            </div>
            <div>
                {this.state.isLoading ? "Loading..." : this.state.movies.map(e=><MovieElem key={e.id} title={e.title_english} image={e.medium_cover_image} rating={e.rating} genre={e.genres}/>)}
            </div>
        </div>
    }
}

function MovieElem(props) {
    return <div className="movieElem">
        <p>Title : {props.title} / Genre : {(props.genre).join(", ")}</p>
        <img src={props.image} alt={props.title}></img>
    </div>
}

export default ClassApp