import React, { useState } from "react";

import { Link } from "react-router-dom"


const Nav = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    const submitHandler = () => {
        onSearch(value);
    };

    const changeHandler = (e) => {
        setValue(e.target.value);
        if (e.target.value.length > 0) {
            setButtonIsDisabled(false);
        } else {
            setButtonIsDisabled(true);
        }
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container px-lg-5">
                <a className="navbar-brand">Recipes</a>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/saved">Favorites</Link></li>
                </ul>
                <div className="d-flex">
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={changeHandler}
                    />
                    <button className="btn btn-outline-success" type="button" onClick={submitHandler} disabled={buttonIsDisabled}>Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;