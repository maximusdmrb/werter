import React, { useEffect } from 'react';
import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';
import werter from '../../data/index';
import store from '../../store/store';
function Navbar(props) {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
      <div className="navbar border">
        <div className="navbar__menu">
          <ul id="menu" className="navbar__menu__list">
            {Object.keys(werter.pages).map((curr, i) => {
              return (
                <li key={i + i * 2}>
                  <Link to={'/' + werter.pages[curr].path}>{werter.pages[curr].icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="services">
        <ul>
          {Object.keys(werter.pages.services.childs).map((curr, i) => {
            return (
              <li key={i + i * 2}>
                <Link to={'/services/' + werter.pages.services.childs[curr].path}>
                  {werter.pages.services.childs[curr].name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="services">
        <ul></ul>
      </div>
    </>
  );
}

export default Navbar;
