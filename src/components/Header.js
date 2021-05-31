import React from 'react'
import { useForm } from 'react-hook-form';


function Header({ setSearch, setSearchQuery }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data)

        setSearch(true);
        setSearchQuery(data.movie)
    };
    // console.log(errors);
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <span className="logo">MOVIES</span>
                </div>
                <div className="menu-container">
                    <div className="menu-item">Home</div>
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
