import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ top, bottom }) => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {top.map(({ url, text }) => (
            <li className="nav-item" key={url}>
              <Link className="nav-link" to={url}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Performance Reviews</span>
        </h6>
        <ul className="nav flex-column mb-2">
          {bottom.map(({ url, text }) => (
            <li className="nav-item" key={url}>
              <Link className="nav-link" to={url}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
