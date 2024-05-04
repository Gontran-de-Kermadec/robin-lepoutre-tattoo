import { Link } from "react-router-dom";
import "../style/Landing.css";
import robin from "../images/robin_logo.jpg";
const LandingPage = () => {
	return (
		<div className="landing">
			{/* <h1>Robin LEPOUTRE</h1> */}
			<div className="img__container">
				<img src={robin} alt="Robin en train de tatouer" />
			</div>
			<section className="button__container">
				<button>
					<a href="https://www.titonoart.com/" target="_blank" rel="noreferrer">
						ART
					</a>
				</button>
				<button>
					<Link to="/home">TATTOO</Link>
				</button>
			</section>
		</div>
	);
};

export default LandingPage;
