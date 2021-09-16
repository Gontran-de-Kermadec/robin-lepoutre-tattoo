import { HashLink as Anchor } from "react-router-hash-link";
import "../style/Header.css";
const Header = () => {
	return (
		<div className="section">
			<header>
				<nav>
					<ul>
						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#about">
								À propos
							</Anchor>
						</li>
						<li>Galerie</li>
						<li>Infos</li>
						<li>
							<Anchor smooth to="/robin-lepoutre-tattoo#appointment">
								Demande de RDV
							</Anchor>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
