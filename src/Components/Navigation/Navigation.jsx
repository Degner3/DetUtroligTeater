import { NavLink } from "react-router-dom"
import style from "./Navigation.module.scss"
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png"

export const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array med objekter, der indeholder links og tilhørende side titler
  const navArr = [
    { Link: "/", Page: "Forside" },
    { Link: "/performances&events", Page: "forestillinger & events" },
    { Link: "/actors", Page: "Skuespillere" },
    { Link: "/login", Page: "Login" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleOutsideClick = () => {
      closeMenu();
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  })

  return (
    <nav className={style.navStyle}>
      <img src={Logo} alt="Det utrolige teater" />
      <div className={style.mobileMenu} onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </div>
      <ul className={isMenuOpen ? style.open : ""}>
        {navArr.map((item, i) => {
          return (
            <li key={i}>
              <NavLink
                to={item.Link}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D39D5B" : "#707070",
                  };
                }}
              >
                {item.Page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
