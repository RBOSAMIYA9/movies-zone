import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from '../components/Movie'



function SearchPage({ searchQuery }) {

    const [resultsList, setResultsList] = useState([])

    
    const searchMovies = () => {
        // https://api.themoviedb.org/3/search/movie?api_key=33aaa9451f98bba3bed1a918a7ec0a13&language=en-US&query=hello&page=1&include_adult=false

        const baseURL = "https://api.themoviedb.org/3/search/movie?api_key="
        const apiKey = "33aaa9451f98bba3bed1a918a7ec0a13"
        const otherURL = "&language=en-US"
        const query = "&query=" + encodeURI(searchQuery) + "&page=1&include_adult=false"
        console.log("encoded uri", encodeURI(searchQuery));
        axios.get(baseURL + apiKey + otherURL + query).then(response => {

            console.log("response in populer list", response.data.results)
            var data = response.data.results.map((movie) => (movie))
            console.log("data", data);
            setResultsList(data)
            // setPopulerList(data);
        })
    }

    useEffect(() => {


        console.log("encoded uri", encodeURI(searchQuery));
        searchMovies()
    }, [searchQuery])
    return (
        <>
            <div className="search-result-container">
                <section className="cards">
                    {resultsList.map((result) => (

                        <Movie data={result} />

                    ))}
                    {/* <article>
                        hello
                    </article>
                    <article>
                        hello
                    </article>
                    <article>
                        hello
                    </article>
                    <article>
                        hello
                    </article>
                    <article>
                        hello
                    </article> */}
                </section>
            </div>
        </>
    )
}

export default SearchPage
