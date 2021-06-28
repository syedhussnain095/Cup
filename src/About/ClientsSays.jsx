import React from "react";
import ClientSdata from "./ClientSdata";
import ClientsSaysdata from "./ClientsSaysdata";
const ClientsSays = () => {
  return (
    <>
            <div className="for_clients_upper_text py-5">
              <h6>TESTIMONIAL</h6>
              <h4>Our client say</h4>
          </div>
             <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            ClientSdata.map((val , ind) => {
                                return <ClientsSaysdata key={ind}
                                    imgsrc={val.imgsrc}
                                    name={val.name}
                                    city={val.city}
                                    text={val.text}
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

export default ClientsSays;
