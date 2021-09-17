import "../style/About.css";
import about from "../images/about.jpg";
const About = () => {
	return (
		<div className="about section" id="about">
			<div className="text__container">
				<p>
					Robin Lepoutre, artiste tatoueur d’origine Deshaiesienne. Diplômé de
					l’école supérieure d’art de Saint-Luc à Bruxelles. Sa formation et son
					expérience lui permettent de maîtriser les techniques:
					<br /> Graphique/moderne, ornementale, polynésien.
				</p>
				<p>
					Son travail est régulièrement récompensé lors des conventions. Ce
					tatouage sera le fruit d’une collaboration entre vos souhaits et mon
					expérience d’artiste.
				</p>
				<q>
					Observateur et soucieux de chaque détail, je recherche la meilleure
					composition. Le tatouage est mon dessein !
				</q>
			</div>
			<div className="img__container">
				{/* <p>Une photo</p> */}
				<img src={about} alt="Robin en train de tatouer" />
			</div>
		</div>
	);
};
export default About;
