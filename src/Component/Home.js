import React from "react";
import "../css/home.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../_redux/rootReducer";
import Tasks from "./Tasks";

function Home() {
  const task = useSelector((state) => state.tasks);
  localStorage.setItem("userTask", JSON.stringify(task));
  const dispatch = useDispatch();

  const handleDragStart = (e, params) => {
    e.dataTransfer.setData("params", JSON.stringify(params));
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleOnDrop = (e, status) => {
    let params = JSON.parse(e.dataTransfer.getData("params"));

    dispatch({
      type: actionTypes.TASK_DROP,
      item: params,
      status: status,
    });
  };

  return (
    <>
      <Header />
      <div className="home">
        <div
          className="today__task _task__style"
          onDrop={(e) => handleOnDrop(e, "backlog")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <h5 className="heading">Today Task</h5>
          <div className="tasks">
            {task.map((val, i) => {
              return val.status && val.status === "backlog" ? (
                <Tasks
                  key={val.id}
                  val={val}
                  handleDragStart={handleDragStart}
                  color="#5867dd"
                />
              ) : null;
            })}
          </div>
        </div>
        <div
          className="pending__task _task__style"
          onDrop={(e) => handleOnDrop(e, "pending")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <h5 className="heading">Pending Task</h5>
          <div className="tasks">
            {task.map((val, i) => {
              return val.status && val.status === "pending" ? (
                <Tasks
                  key={val.id}
                  val={val}
                  handleDragStart={handleDragStart}
                  color="#FFB822"
                />
              ) : null;
            })}
          </div>
        </div>
        <div
          className="abandon__task _task__style"
          onDrop={(e) => handleOnDrop(e, "abandon")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <h5 className="heading">Abandon Task</h5>
          <div className="tasks">
            {task.map((val, i) => {
              return val.status && val.status === "abandon" ? (
                <Tasks
                  key={val.id}
                  val={val}
                  handleDragStart={handleDragStart}
                  color="#758D98"
                />
              ) : null;
            })}
          </div>
        </div>
        <div
          className="completed__task _task__style"
          onDrop={(e) => handleOnDrop(e, "completed")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <h5 className="heading">Completed Task</h5>
          <div className="tasks">
            {task.map((val, i) => {
              return val.status && val.status === "completed" ? (
                <Tasks
                  key={val.id}
                  val={val}
                  handleDragStart={handleDragStart}
                  color="#35a630"
                />
              ) : null;
            })}
          </div>
        </div>
        <div
          className="inprogress__task _task__style"
          onDrop={(e) => handleOnDrop(e, "inprogress")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <h5 className="heading">Inprogress Task</h5>
          <div className="tasks">
            {task.map((val, i) => {
              return val.status && val.status === "inprogress" ? (
                <Tasks
                  key={val.id}
                  val={val}
                  handleDragStart={handleDragStart}
                  color="#6DA9DD"
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
