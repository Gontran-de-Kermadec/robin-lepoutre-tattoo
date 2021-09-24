import { HashLink as Anchor } from "react-router-hash-link";
import "../style/Header.css";
import logo from "../images/logo.jpg";
const Header = () => {
	return (
		<div className="section header__section ">
			{/* <div className="header__img">
			</div> */}
			<img src={logo} alt="Logo Robin Lepoutre" />
			<header>
				<nav>
					<ul>
						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#about">
								À propos
							</Anchor>
						</li>
						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#gallery">
								Galerie
							</Anchor>
						</li>

						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#infos">
								Infos
							</Anchor>
						</li>
						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#appointment">
								Demande de RDV
							</Anchor>
						</li>
					</ul>
				</nav>
			</header>
			{/* <div className="header__logo">
			</div> */}
		</div>
	);
};

export default Header;
