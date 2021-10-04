import { HashLink as Anchor } from "react-router-hash-link";
import "../style/Header.css";
import logo from "../images/logo.jpg";
const Header = () => {
	return (
		<div className="section header__section ">
			<img src={logo} alt="Logo Robin Lepoutre" />
			<header>
				<nav>
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
