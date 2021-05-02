import React, { useState } from "react";
import "../css/add-task.css";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../_redux/rootReducer";

function AddTask({ closeModal }) {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
    status: "backlog",
  });
  const fetchData = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const inputChange = (e) => {
    let { name, value } = e.target;

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.CREATE_TASK,
      item: data,
      id: fetchData.length + 1,
    });
    closeModal();
  };
  return (
    <div className="add__task">
      <div className="cross__btn">
        <span onClick={closeModal}>&times;</span>
      </div>
      <form className="add__product__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter Title"
            onChange={inputChange}
            value={data.title}
            required
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description ">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter Description "
            onChange={inputChange}
            value={data.description}
            required
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
