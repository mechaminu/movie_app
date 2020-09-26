import React from "react";
import Axios from "axios";
import Movie from "../components/Movie";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


class Home extends React.Component {

    // constructor(p) {
    //     super(p);
    //     console.log("Hello, world!");
    // }

    // 바뀌는 데이터를 담는 그릇, State
    // Class형 component가 아니더라도 React Hook로 인해서 state 관리가 가능해졌다. (심화)
    state = {   // elements can be defined in setState
        count: 2,
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
        this.getMovies(1);

        window.addEventListener("scroll",()=>{
            let curPos = document.documentElement.scrollTop;
            let maxPos = document.getElementsByClassName("movies")[0].scrollHeight;
            let localHeight = window.innerHeight;

            if(curPos + localHeight >= maxPos) {
                if(!this.state.isLoading) {
                    console.log("스크롤이 끝에 도달하였으므로 영화목록 추가 실시");
                    
                    this.getMovies(this.state.count).then(()=>{
                        this.setState(c=>({count:c.count+1}));
                    })
                    
                }
            }
        })
    }

    getMovies = async (page) => {

        return new Promise(async r => {
            console.log(page+" 페이지 영화목록 로딩...");

            this.setState(({isLoading:true}))
            let { data: {data: { movies }}} = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page="+page);
            movies = this.state.movies.concat(movies);
            this.setState(({isLoading:false,movies}));
            r();
        })
        
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
        return <div className="container">

            {this.state.isLoading
            ? <div className="loader">
                    <span className="loader_icon">
                        <FontAwesomeIcon icon={faSpinner} size="5x" color="white"/>
                    </span>
                    <span className="loader_text">Loading...</span>
                </div>
            : null}


            <div className="movies">
                {this.state.movies.map(e => (
                    <Movie 
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

        </div>
    }
}

export default Home