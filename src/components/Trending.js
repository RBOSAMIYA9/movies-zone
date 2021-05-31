import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Movie from '../components/Movie'


const baseURL = "https://api.themoviedb.org/3/trending/movie/day?api_key="
const apiKey = "33aaa9451f98bba3bed1a918a7ec0a13"

function Trending() {
    const [populerList, setPopulerList] = useState([])
    useEffect(() => {
        console.log("inside useEffect");
        axios.get(baseURL + apiKey).then(response => {

            console.log("response in populer list", response.data.results)
            var data = response.data.results.map((movie) => (movie))
            console.log("data", data);
            setPopulerList(data);
        })


    }, [])
    const settings = {
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <div className="populer-slider">
            <h2>Trending </h2>

            <div className="slider-wrapper">
                <Slider  {...settings}>
                    {populerList && populerList.map((movie) => (
                        <Movie data={movie} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Trending
