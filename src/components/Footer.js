import React from 'react'
import {

    Link

} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="logo-container">
                <Link to="/">
                    <span className="logo">MOVIES</span>
                </Link>
            </div>
            {/* <a href="https://developers.themoviedb.org/3/getting-started/introduction">TMDB</a> */}
            <p>TMDB API is used for all data.</p>
            <h3>Made with ❤️ by Ravindra</h3>
        </div>
    )
}

export default Footer
