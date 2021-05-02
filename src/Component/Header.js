import React, { useState } from "react";
import "../css/header.css";
import AddTask from "./AddTask";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const addTask = () => {
    openModal ? setOpenModal(false) : setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <nav className="header">
        <h2>Manage Task</h2>
        <button onClick={addTask} type="button" className="btn btn-success">
          Create Task
        </button>
      </nav>

      {openModal ? <AddTask closeModal={closeModal} /> : null}
    </>
  );
}

export default Header;
