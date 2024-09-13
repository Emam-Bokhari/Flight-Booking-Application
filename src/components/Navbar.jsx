import { Fragment } from "react";
import logo from "../assets/lws-logo.svg"

export default function Navbar() {
  return (
    <Fragment>
      <header id="header">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
