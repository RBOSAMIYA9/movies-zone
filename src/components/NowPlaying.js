import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Movie from '../components/Movie'


const apiKey = "33aaa9451f98bba3bed1a918a7ec0a13"
const baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&language=en-US&page=1"

// const otherURL = "&language=en-US&page=1"

function NowPlaying() {
    const [populerList, setPopulerList] = useState([])
    useEffect(() => {
        console.log("inside useEffect");
        axios.get(baseURL).then(response => {

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
            <h2>Now playing</h2>

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

export default NowPlaying
