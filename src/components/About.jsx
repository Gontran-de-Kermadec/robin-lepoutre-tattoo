import "../style/About.css";
import about from "../images/about.jpg";
const About = () => {
	return (
		<div className="about section" id="about">
			{/* <h2 className="about__title"></h2> */}
			<p className="h2--title">À PROPOS</p>
			<div className="about__flex">
				<div className="text__container">
					<p>
						Robin Lepoutre, artiste tatoueur d’origine Deshaiesienne reconnu
						dans son domaine grâce à son coup de crayon, sa créativité, ses
						compositions originales et pour la qualité de ses réalisations. Son
						travail est régulièrement récompensé lors des concours
						(conventions).
					</p>
					<p>
						Il est diplômé de l’École Supérieure d’Art de Saint-Luc à Bruxelles
						en 2015. Sa formation et son expérience lui permettent d’acquérir un
						savoir-faire dans ses compositions artistiques. Ses domaines de
						prédilection sont : le graphique, la géométrie, l’ornemental et le
						polynésien. Grâce à son statut d’illustrateur confirmé, Robin est un
						artiste très polyvalent.
					</p>
					<p>
						<q>
							Observateur et soucieux de chaque détail, je recherche la
							meilleure composition. Le tatouage est mon dessein ! Je garantis
							une prestation unique et sur-mesure. Votre tatouage sera le fruit
							d’une collaboration entre vos souhaits et mon expérience
							d’artiste.
						</q>
					</p>
				</div>
				<div className="img__container">
					<img src={about} alt="Robin en train de tatouer" />
				</div>
			</div>
		</div>
	);
};
export default About;
