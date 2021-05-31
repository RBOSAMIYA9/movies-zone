import React from 'react'
import '../index.css'
import {
    BrowserRouter as Router,
    Link

} from "react-router-dom";
import defaultImage from "../default-movie.png"

function Movie({ data }) {
    console.log("data in movies", data.poster_path);

    let bg = (data.poster_path === null) ? <defaultImage /> : data.poster_path

    let background = {
        backgroundImage: (data.poster_path === null) ? `url(${defaultImage }) ` : `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`
    }

    console.log("bg", background);

    return (
        <Link to={"/movie/" + data.id} style={{ textDecoration: "none", color: "white" }}>
            <div className="movie-container">

                <div className="movie-image" style={background}>

                </div>
                <div>
                    <span className="card-title">{data.original_title}</span>
                    <span className="relase-date">{data.release_date}</span>

                    <div className="score-circle">
                        <span >{data.vote_average}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Movie
