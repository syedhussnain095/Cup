import React from "react";
import OurTeamSdata from "./OurTeamSdata";
import OurTeamMainData from "./OurTeamMainData";
const OurTeam = () => {
  return (
    <>
      
      <div className="for_clients_upper_text py-5">
        <h6>OUR TEAM</h6>
        <h4>Sweet Baker</h4>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto py-3">
            <div className="row">
              {OurTeamSdata.map((val, ind) => {
                return <OurTeamMainData key={ind} imgsrc={val.imgsrc} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
