import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
const Head = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Contact"> Contact </Link>
        </li>
        <li>
          <Link to="/Cart"> Cart </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Sidebar"> Siderbar </Link>
        </li>
      </ul>
    </div>
  );
};
export default Head;
