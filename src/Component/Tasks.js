import React from "react";

function Tasks({ val, handleDragStart, color }) {
  return (
    <div
      key={val.id}
      className="taskDetails"
      draggable
      onDragStart={(e) => handleDragStart(e, val)}
    >
      <div className="task__id" style={{ background: color }}>
        {val.id}
      </div>
      <div className="_main">
        <div className="title">{val.title}</div>
        <div className="desc">{val.description}</div>
      </div>
    </div>
  );
}

export default Tasks;
