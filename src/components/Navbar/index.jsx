import CartWidget  from "../CartWidget";
import React from "react";



export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a href="#" className="nav__link">JesusDIAZAutomotores</a>
                </div>
                <ul className="nav__list">
                    <li>
                    <a href="#" className="nav__link">Inicio</a>
                    </li>

                    <li>
                    <a href="#" className="nav__link">Sobre nosotros</a>
                    </li>

                    <li>
                    <a href="#" className="nav__link"> <CartWidget/>

                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;