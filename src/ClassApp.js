import React from "react";
import Axios from "axios";
import MovieElem from "./MovieElem";
import './ClassApp.css';


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
        const { data: {data: { movies }}} = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState(({isLoading:false,movies}));
    }

    // React re-render page for every setState execution
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
            <section className="container">
                { this.state.isLoading
                    ? <div className="loader">Loading...</div>
                    : <div className="movies">
                        {this.state.movies.map(e => (
                            <MovieElem 
                                key={e.id}
                                title={e.title_english}
                                year={e.year}
                                image={e.medium_cover_image}
                                rating={e.rating}
                                genre={e.genres}
                                summary={e.summary}
                            />
                        ))}
                    </div>
                }
            </section>
        </div>
    }
}

export default ClassApp