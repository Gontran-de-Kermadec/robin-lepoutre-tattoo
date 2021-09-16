import { Link } from "react-router-dom";
const LandingPage = () => {
	return (
		<div>
			<p>Robin Lepoutre</p>
			<section className="button__container">
				<button>
					<a
						href="https://titono-art.web.app/"
						target="_blank"
						rel="noreferrer"
					>
						ART
					</a>
				</button>
				<button>
					<Link to="/robin-lepoutre-tattoo">TATTOO</Link>
				</button>
			</section>
		</div>
	);
};

export default LandingPage;
