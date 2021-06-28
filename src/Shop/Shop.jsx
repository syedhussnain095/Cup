import React from 'react';
import ShopData from './ShopData';
import ShopSearch from './ShopSearch';
import ShopMenu from './ShopMenu';
import ShopPagination from './ShopPagination';
const Shop = () => {
    return (
        <>
           <ShopData 
            shop="Shop"
            home="Home" /> 
            <ShopSearch />
            <ShopMenu />
            <ShopPagination />
        </>
    );
};

export default Shop;
