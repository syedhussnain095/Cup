import React from 'react'
import ShopSdata from './ShopSdata';
import ShopMenuData from './ShopMenuData';
const ShopMenu = () => {
    return (
        <>
           <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {
                            ShopSdata.map((val , ind) => {
                                return <ShopMenuData key={ind}
                                    imgsrc={val.imgsrc}
                                    name={val.name}
                                    price={val.price}
                                    cartbtn={val.cartbtn}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
  
        </>
    );
};

export default ShopMenu;
