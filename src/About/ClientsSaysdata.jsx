import React from "react";

const ClientsSaysdata = (props) => {
  return (
    <>


      <div className="col-md-4 col-10 mx-auto  py-2">
        <div className="card all_clients shadow-lg">
          <img src={props.imgsrc} className="for_clients_img" alt={props.imgsrc} />
          <div className="card-body">
            <h5>{props.name}</h5>
            <p>{props.city}</p>
            <p className="for_text">{props.text}</p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default ClientsSaysdata;
