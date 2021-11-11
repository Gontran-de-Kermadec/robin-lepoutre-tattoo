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
		if (window.scrollY > 200 && client < 100) {
			setHideNav("");
		} else if (window.scrollY > 200 && client > 100) {
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
				<button onClick={displayMenu}>MENU</button>
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
				<p className={showMenu}>MENU</p>
			</header>
			<div className="header__section--svg">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="chevron-down"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="white"
						d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
					></path>
				</svg>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="chevron-down"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="white"
						d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default Header;
