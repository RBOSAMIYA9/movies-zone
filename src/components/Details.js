import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Movie from '../components/Movie'





function Details(props) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    const [movieDetails, setMovieDetails] = useState({})
    const [sneakPeek, setSneakPeek] = useState({})
    const [recommended, setRecommended] = useState({})
    const fetchData = () => {
        let id = props.match.params.id;
        const apiKey = "33aaa9451f98bba3bed1a918a7ec0a13"
        const url = "https://api.themoviedb.org/3/movie/" + id
        const otherUrl = "?api_key=" + apiKey + "&language=en-US"
        // var data = []

        axios.get(url + otherUrl).then(response => {

            // console.log("response", response.data)
            setMovieDetails(response.data)

        })

        // console.log(url + "/videos" + otherUrl);
        axios.get(url + "/videos" + otherUrl).then(sneakPeekInfo => {

            // console.log("treilerDetails", sneakPeekInfo.data)
            setSneakPeek(sneakPeekInfo.data)

        })

        // https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
        axios.get(url + "/recommendations" + otherUrl).then(recommendedMovie => {

            // console.log("recommended movies", recommendedMovie.data)
            setRecommended(recommendedMovie.data)

        })

    }
    useEffect(() => {
        console.log("use effect");
        fetchData();
    }, [props.match.params.id]);
    // console.log("match", match.url);
    return (
        <>
            {
                Object.keys(movieDetails).length > 0 &&
                <>
                    <div className="movie-detail-container" >

                        <div className="bg-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})` }}></div>
                        <div className="front-div">
                            <div className="poster " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.poster_path})` }}>

                            </div>
                            <div className="details-content">
                                {/* {console.log()} */}
                                <h1>{movieDetails.original_title}({movieDetails.release_date.split("-")[0]})</h1>
                                <p className="tagline"><i>{movieDetails.tagline}</i></p>
                                <div className="info-container">
                                    <span className="rating">{movieDetails.vote_average}</span>
                                    {movieDetails && movieDetails.genres.map((genere) => (
                                        <span className="tags">{genere.name}</span>
                                    ))}
                                </div>
                                <h3>Overview</h3>
                                <p className="overview">{movieDetails.overview}</p>
                                <a href={movieDetails.homepage} target="_blank"><button className="btn-primary">View More</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="sneak-peek">
                        <h3>Sneak peeks</h3>
                        <div className="sneak-peek-container">
                            {Object.keys(sneakPeek).length > 0 &&
                                sneakPeek.results.map((result) => (
                                    <>
                                        <div className="sneak-peek-video">
                                            <a href={"http://www.youtube.com/watch?v=" + result.key} target="_blank"><img src={"https://img.youtube.com/vi/" + result.key + "/0.jpg"} alt="youtube thumbnail" /></a>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                    </div>
                    <div className="recommendation-container">
                        <h3>Recommended</h3>
                        <div className="recommendation">


                            {
                                Object.keys(recommended).length > 0 &&
                                <div>
                                    {/* {console.log("data recommended",recommended.results)} */}
                                    <Slider  {...settings}>
                                        {recommended.results.map((data) => (

                                            <Movie data={data} />


                                        ))}

                                    </Slider>
                                </div>
                            }
                        </div>

                    </div>
                </>
            }

        </>
    )
}

export default Details
