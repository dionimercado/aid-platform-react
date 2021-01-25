import React from "react";

function Task({ task }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{task.type}</h3>
        <p>{task.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Back</button>
        <button className="btn btn-primary">Volunteer</button>
      </div>
    </div>
  );
}

export default Task;
