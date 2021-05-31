import React from 'react'
import { useForm } from 'react-hook-form';

import {

    Link

} from "react-router-dom";

function Header({ setSearch, setSearchQuery }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data)

        setSearch(true);
        setSearchQuery(data.movie)
    };
    console.log(errors);
    return (
        <>
            <div className="header-container">

                <div className="logo-container">
                    <Link to="/">
                        <span className="logo">MOVIES</span>
                    </Link>
                </div>
                <div className="menu-container">

                    <Link to="/"><div className="menu-item">Home</div></Link>
                    {/* <div className="menu-item">Bookmarked</div> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="menu-item" placeholder="enter movie name"  {...register("movie", {})} />
                        <button type="submit">Search</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Header
