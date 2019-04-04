import React from "react";
const Artist = props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">{props.name}</div>
          <div className="col-sm">{props.frequency}</div>
          <div className="col-sm">{props.rating}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Artist;
