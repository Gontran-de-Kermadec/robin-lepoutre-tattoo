import "../style/Infos.css";
import warning from "../images/warning.jpg";
const Infos = () => {
	return (
		<div className="section infos" id="infos">
			<div className="warning">
				<div className="warning__text">
					<p>
						Robin vous reçoit dans un atelier privé de tatouage, votre intimité
						est préservée.
					</p>
					<p>
						Parce que votre santé et votre bien être est la priorité, le
						matériel utilisé est de qualité professionnelle, à usage unique et
						répond à l’intégralité des normes en vigueur.
					</p>
					<p>Formation à l’Hygiène et Salubrité, Novembre 2015 Nancy</p>
					<p>Un seul accompagnant par client est autorisé</p>
					<ul>
						Mesures Covid :<li>- Gestes barrière</li>
						<li>- Espaces accueil et tatouage distincts.</li>
					</ul>
				</div>
				<div className="warning__img">
					<img src={warning} alt="Robin en train de tatouer" />
				</div>
			</div>
			<div className="care">
				<p className="care__title">Les soins</p>
				<div className="care__preposttattoo">
					<div className="care__pretattoo">
						<p>
							<em>Avant :</em>
						</p>
						<ul>
							<li>
								- prenez soin de votre peau (crème hydratante, pas d’exposition
								au soleil)
							</li>
							<li>
								- pensez à épiler la zone 2 jours avant votre RDV TATTOO. - bien
								dormir et bien manger
							</li>
							<li>
								-si vous avez un terrain allergique connu ( latex, pigments etc)
								faites-le savoir
							</li>
							<li>
								- prévoir un vêtement confortable et pratique qui ne comprimera
								pas la zone tatouée quand vous sortirez.
							</li>
							<li> - “venez ZEN, avec moi ça se passe toujours bien !”</li>
						</ul>
					</div>
					<div className="care__posttattoo">
						<p>
							<em>Après :</em>
						</p>
						<ul>
							<li>
								- Enlever le pansement moins de 2 heures après le tatouage
							</li>
							<li>
								- Nettoyer au moins une fois par jour à l’eau douce et avec un
								savon à PH Neutre
							</li>
							<li>
								- Crème cicatrisante en fine couches 2 à 3 fois par jour et ce
								pendant 15 jours
							</li>
							<li> - Le tatouage ne doit pas former une croûte sèche</li>
							<li> - Toujours bien se laver les mains avant les soins</li>
							<li> - Ne pas gratter ni arracher les croutes</li>
							<li>
								- Pas de bain de mer, piscine et d’exposition au soleil pendant
								environ 15 jours
							</li>
							<li>- Ne couvrir le tatouage qu’avec des vêtements en coton</li>
							<li>- Ne laissez personne toucher à votre tatouage</li>
						</ul>
					</div>
				</div>
				<div className="care__products">
					<p>Conseil produits:</p>
					<ul>
						<li>- Savon de marseille</li>
						<li>- Crème homéoplasmine</li>
					</ul>
					<p>
						Retouches : La cicatrisation étant un processus aléatoire, des
						retouches sont parfois nécessaires en finition. Ces retouches sont
						comprises dans le prix.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Infos;
