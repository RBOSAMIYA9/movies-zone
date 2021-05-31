import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../index.css'
import axios from 'axios'
import { FaImdb } from 'react-icons/fa'

import {
    BrowserRouter as Router,
    Link

} from "react-router-dom";

const baseURL = "https://api.themoviedb.org/3/trending/movie/day?api_key="
const apiKey = "33aaa9451f98bba3bed1a918a7ec0a13"
function HeroSlider() {
    const [trendingList, setTrendingList] = useState([])
    useEffect(() => {
        var data = []
        axios.get(baseURL + apiKey).then(response => {

            console.log("response", response.data.results)
            for (let index = 0; index <= 5; index++) {
                const element = response.data.results[index];
                data.push(element)

            }
            setTrendingList(data)
        })


    }, [])

    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        // cssEase: "linear"
    };
    return (
        <>
            {/* <div>

                <Slider {...settings}>
                    <div className="hero-movie-container">
                        <h1>Movie 1</h1>
                    </div>
                </Slider>
            </div> */}
            {/* {trendingList && trendingList.map((movie,index) => (

                <p><span>{index}</span>{movie.original_title}</p>

            ))} */}

            <Slider {...settings}>
                {trendingList && trendingList.map((movie) => (
                    <div>
                        <div className="hero-movie-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>

                            <div className="hero-content-wrapper">
                                <h1 className="movie-title">{movie.original_title}</h1>
                                <div className="movie-info">
                                    <div className="rating-container">
                                        <FaImdb /> <span className="movie-avg">{movie.vote_average}</span>
                                    </div>
                                    <div>
                                        <span>{movie.release_date}</span>
                                    </div>


                                </div>
                                <Link to={"/movie/" + movie.id}> <button className="btn-primary view-more">View More</button></Link>



                            </div>
                        </div>

                    </div>

                ))}
            </Slider>

        </>
    )
}

export default HeroSlider
