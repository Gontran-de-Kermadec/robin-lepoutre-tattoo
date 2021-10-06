import { HashLink as Anchor } from "react-router-hash-link";
import { useState } from "react";
import "../style/Header.css";
import logo from "../images/logo.jpg";
const Header = () => {
	const [display, setDisplay] = useState("");
	const [hideButton, setHideButton] = useState("");
	const [hideNav, setHideNav] = useState("");
	const [showMenu, setShowMenu] = useState("menu__hidden");
	const displayMenu = () => {
		if (display === "displayed") {
			setDisplay("");
			setHideButton("");
		} else {
			setDisplay("displayed");
			setHideButton("hidden");
		}
	};
	window.addEventListener("scroll", () => {
		if (window.scrollY > 150) {
			setHideNav("nav__hidden");
			setShowMenu("menu__displayed");
		} else {
			setHideNav("");
			setShowMenu("menu__hidden");
		}
		// if(offset > 150) {
		//   header.style.transform = 'translateY(-70%)';
		//   para.style.display = 'block';
		// } else {
		//   header.style.transform = 'translateY(0)';
		//   para.style.display = 'none';
		// }
	});
	window.addEventListener("mousemove", (e) => {
		let client = e.clientY;
		if (window.scrollY > 200 && client < 50) {
			setHideNav("");
		} else if (window.scrollY > 200 && client > 50) {
			setHideNav("nav__hidden");
		}
		//console.log("Y: " + client);
		// if(offset > 200 && client < 50) {
		//   header.style.transform = 'translateY(0)';
		// } else if(offset > 200 && client > 50) {
		//   header.style.transform = 'translateY(-70%)';
		// }
	});
	return (
		<div className="section header__section ">
			<img src={logo} alt="Logo Robin Lepoutre" />
			<div className={hideButton + " header__btn"}>
				<button onClick={displayMenu}>Menu</button>
			</div>
			<header className={display + " " + hideNav}>
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
				<p className={showMenu}>Menu</p>
			</header>
		</div>
	);
};

export default Header;
