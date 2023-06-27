import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import myImage from "../../assets/log3.jpg";
import './Navlist.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedLink from './ProtectedLink';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext '
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const navStyle = {
  height: "6rem",
  boxShadow: "none",
};
const imgStyle = {
  width: "11rem",
  height: "5rem",
  position: "fixed",
};

const Navlist = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);
  // const user1=JSON.parse(localStorage.getItem('currentUser'))
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate.push("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate.push("/");
  };

  return (
    <Navbar style={{ boxShadow: 'none' }}>
      <div className="mx-4 navigation-container" style={{ marginBottom: '50px', paddingBottom: '10vh' }}>
        <span className="d-flex p-2 justify-content-start logo-container">
          <img src={myImage} style={imgStyle} alt="logo" className="logo-image" />
        </span>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="navbar-nav">
          <div
            className="navbar fixed-top justify-content-end flex-grow-1 pe-3"
            style={navStyle}
            role="navigation"
          >
            <ul className="nav">
              {isLoading ? <>
                loading
              </>
                :
                !isAuthenticated ?
                  <>
                    <li className="nav-item ">
                      <NavLink
                        to={`/`}
                        className={`  menu nav-link ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#00ABB3" : "#000",
                        })}
                      >
                        Home
                      </NavLink>
                    </li >
                    <li className="nav-item ">
                      <NavLink
                        to={`contact`}
                        className={`menu nav-link ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#00ABB3" : "#000",
                        })}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={`about`}
                        className={` menu nav-link  ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#00ABB3" : "#000",
                        })}
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      {isLoggedIn
                        ? <NavLink
                          to={`login`}
                          className={`  menu nav-link ${({ isActive }) =>
                            isActive ? "active" : ""}`}
                          style={({ isActive }) => ({
                            color: isActive ? "#00ABB3" : "#000",

                          })}
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                        : <NavLink
                          to={`login`}
                          className={`  menu  nav-link ${({ isActive }) =>
                            isActive ? "active" : ""}`}
                          style={({ isActive }) => ({
                            color: isActive ? "#00ABB3" : "#000",

                          })}
                          onClick={handleLogin}
                        >
                          LogIn
                        </NavLink>}
                    </li>
                  </> :
                  <>

                    <ProtectedLink name="Create" link="/create" user={user} roles={['admin', 'author']} />
                    <li className="nav-item ">
                      <NavLink
                        to={`dashboard`}
                        className={`  menu nav-link ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#00ABB3" : "#000",
                        })}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to={`setting`}
                        className={`  menu nav-link ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        style={({ isActive }) => ({
                          color: isActive ? "#00ABB3" : "#000",
                        })}
                      >
                        Setting
                      </NavLink>
                    </li>
                    <ProtectedLink name="Users" link="/users" user={user} roles={['admin']} />
                  </>
              }
            </ul>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navlist;
