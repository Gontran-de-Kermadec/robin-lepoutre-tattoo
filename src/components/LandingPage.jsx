import { Link } from "react-router-dom";
import "../style/Landing.css";
const LandingPage = () => {
	return (
		<div className="landing">
			<h1>Robin LEPOUTRE</h1>
			<section className="button__container">
				<button>
					<a
						// href="https://titono-art.web.app/"
						href="#"
						// target="_blank"
						// rel="noreferrer"
					>
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
