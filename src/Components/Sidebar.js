import React, { useState } from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='tagg-div'>
        <button className="btn btn-primary d-md-none tagg-btn" onClick={toggleSidebar}>
        <i className="link-dark1 fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`d-flex flex-column flex-shrink-0 p-1 theme ${isOpen ? 'd-block' : 'd-none'} d-md-block`} id="sidebar">
        <a href="/" className="align-items-center mb-3 ms-3 mb-md-0 me-md-auto link-dark1 text-decoration-none">
        <i className="link-dark1 fa-solid fa-bars"></i>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className=" nav-link active" aria-current="page">
            <i className=" fas fa-house"></i>
            </a>
          </li>
          <li>
            <a href="#" className=" nav-link link-dark1">
            <i className=" fa-solid fa-chart-column"></i>
            </a>
          </li>
          <li>
            <a href="#" className=" nav-link link-dark1">
            <i className=" fas fa-file"></i>
            </a>
          </li>
          <li>
            <a href="#" className=" nav-link link-dark1">
            <i className=" fas fa-wallet"></i>
            </a>
          </li>
          <li>
            <a href="#" className=" nav-link link-dark1">
            <i className=" fas fa-file"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
