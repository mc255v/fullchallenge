import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ view }) => {
  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-sm-3 col-md-2 mr-0">{view}</div>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="/">
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
