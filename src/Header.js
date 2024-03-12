import { Link } from "react-router-dom";
import logo from "./assets/images/logo.jpeg";
import "./header.css";
// import { useState } from "react";

function Header() {
  // const [showMenue, setShowMenu] = useState(false);

  // document.body.addEventListener("click", () => {
  //   setShowMenu(false);
  // });

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <div className="menu">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul>
          <li>
            <Link to="prayer"> الصلاة </Link>
          </li>
          <li>
            <Link to="/">قصص الأنبياء</Link>
          </li>
          <li>
            <Link to="quran">قرأن</Link>
          </li>
          <li>أطفال</li>
          <li>
            <Link to="question"> أسئلة </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
