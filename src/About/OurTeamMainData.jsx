import React from "react";

const OurTeamMainData = (props) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto py-3">
        <div className="team_images">
            <img src={props.imgsrc} alt={props.imgsrc} />
            <div className="hello">
              <div className="text_appers">
                  <h6>RANDY BUTLER</h6>
                  <p>Decorater</p>
                  <button>More</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMainData;
