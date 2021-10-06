import { HashLink as Anchor } from "react-router-hash-link";
import { useState } from "react";
import "../style/Header.css";
import logo from "../images/logo.jpg";
const Header = () => {
	const [display, setDisplay] = useState("");
	const [hideButton, setHideButton] = useState("");
	const displayMenu = () => {
		if (display === "displayed") {
			setDisplay("");
			setHideButton("");
		} else {
			setDisplay("displayed");
			setHideButton("hidden");
		}
	};
	return (
		<div className="section header__section ">
			<img src={logo} alt="Logo Robin Lepoutre" />
			<div className={hideButton + " header__btn"}>
				<button onClick={displayMenu}>Menu</button>
			</div>
			<header className={display}>
				<nav>
					<span className="header__close--menu" onClick={displayMenu}>
						X
					</span>
					<ul>
						<li>
							<Anchor smooth to="/home#about">
								À PROPOS
							</Anchor>
						</li>
						<li>
							<Anchor smooth to="/home#gallery">
								GALERIE
							</Anchor>
						</li>

						<li>
							<Anchor smooth to="/home#infos">
								INFOS
							</Anchor>
						</li>
						<li>
							<Anchor smooth to="/home#appointment">
								DEMANDE DE RDV
							</Anchor>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
