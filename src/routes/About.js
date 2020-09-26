import React from "react";
import "./About.css"

function About(props) {
    console.log(props)
    return <div className="container">
            <div className="aboutWrapper">
                <div className="about">
                    <div>
                        <h1>Simple infinite list of movies</h1>
                        <h3>Created by Minwoo Lee</h3>
                        <h3>Powered by React.js</h3>
                        <h3>API from yts <a style={{fontSize:"0.7em"}} href="https://yts-proxy.now.sh/api">(https://yts-proxy.now.sh/api)</a></h3>
                    </div>
                    <div style={{marginTop:50}}>
                        <a  href="https://github.com/minuuoo97/movie_app">https://github.com/minuuoo97/movie_app</a>
                    </div>
                    <div style={{fontSize:"0.7em",marginTop:50,color:"gray"}}>
                        <p>“The length of a film should be directly related to the endurance of the human bladder.”</p>
                        <span>- Alfred Hitchcock -</span>
                    </div>
                </div>
            </div>
        </div>
}

export default About;