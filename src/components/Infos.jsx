import "../style/Infos.css";
import warning from "../images/warning.jpg";
const Infos = () => {
	return (
		<div className="section infos" id="infos">
			<section className="warning">
				<div className="warning__text">
					<p>
						Robin vous reçoit dans un atelier privé, votre intimité est ainsi
						préservée.
					</p>
					<p>
						Pour garantir votre santé et votre bien-être, le matériel utilisé
						est de qualité professionnelle, à usage unique et répond à
						l’intégralité des normes en vigueur.
					</p>
					<p>
						Robin est détenteur de la Formation à l’Hygiène et Salubrité en
						novembre 2015 à Nancy.
					</p>
					<ul>
						<p>
							Dans le cadre des mesures sanitaires et la lutte contre la COVID,
							il met en œuvre :
						</p>
						<li>- Le respect des gestes barrières</li>
						<li>
							- La mise en place d’espaces d’accueil et de tatouage distincts
						</li>
						<li>- L’autorisation d’un seul accompagnateur lors des séances</li>
					</ul>
				</div>
				<div className="warning__img">
					<img src={warning} alt="Robin en train de tatouer" />
				</div>
			</section>
		</div>
	);
};
export default Infos;
