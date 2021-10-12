import "../style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__flex">
				<Link to="/mentions-legales">Mentions légales</Link>
				<div className="footer__socials">
					<span>facebook / </span>
					<span>instagram</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
