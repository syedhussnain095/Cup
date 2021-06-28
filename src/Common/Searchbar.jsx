import React from 'react';
import { Link } from "react-router-dom";
const Searchbar = () => {
    return (
        <>
            <div class="search-box">
            <input class="search-input" type="text" name="" placeholder="Search Here ..." />
            <Link href="#" class="search-btn">
                <i class="fas fa-search"></i>
            </Link>     
            </div>
        </>
    );
};

export default Searchbar;
