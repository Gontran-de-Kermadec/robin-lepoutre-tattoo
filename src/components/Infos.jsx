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
						Dans le cadre des mesures sanitaires et la lutte contre la COVID, il
						met en œuvre :<li>- Le respect des gestes barrières</li>
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
			<section className="care">
				<div className="care__tattoo">
					<h2 className="care__title">Les soins à apporter</h2>
					<div className="care__preposttattoo">
						<div className="care__pretattoo">
							<p>
								<em>Avant la séance tatouage :</em>
							</p>
							<ul>
								<li>
									- Prenez soin de votre peau (utilisez une crème hydratante, ne
									vous exposez pas au soleil)
								</li>
								<li>- Epilez la zone 2 jours avant votre RDV TATTOO</li>
								<li>- Dormez et mangez suffisamment</li>
								<li>
									- Si vous avez un terrain allergique connu (ex. : au latex,
									aux pigments etc.) faites-le savoir impérativement
								</li>
								<li>
									- Prévoyez un vêtement confortable et pratique qui ne
									comprimera pas la zone tatouée après la séance.
								</li>
								<li>
									{" "}
									- <q>Venez ZEN car avec moi ça se passe toujours bien !</q>
								</li>
							</ul>
						</div>
						<div className="care__posttattoo">
							<p>
								<em>Après la séance tatouage :</em>
							</p>
							<ul>
								<li>- Lavez-vous soigneusement les mains</li>
								<li>
									- Ne laissez pas le pansement plus de 2 heures après la séance
								</li>
								<li>
									- Nettoyez la zone au moins une fois par jour à l’eau douce et
									avec un savon à PH neutre sans frotter
								</li>
								<li>
									- Appliquez une crème cicatrisante en fines couches 2 à 3 fois
									par jour et ce pendant 15  jours (le tatouage ne doit pas
									former une croûte sèche)
								</li>
								<li>- Toujours bien se laver les mains avant les soins</li>
								<li>
									- Ne grattez pas votre tatouage et n’arrachez les croutes
								</li>
								<li>- Couvrez votre tatouage avec des vêtements en coton</li>
								<li>- Ne laissez personne toucher votre tatouage</li>
								<li>
									- Ne prenez pas de bain de mer, de piscine et ne vous exposez
									pas au soleil pendant environ 15 jours
								</li>
							</ul>
						</div>
					</div>
					<p>
						Le tatouage est réalisé dans des conditions d’hygiène les plus
						strictes, prenez-en soin les jours qui suivent car vous serez
						responsable de sa cicatrisation.
					</p>
				</div>
				<div className="care__products">
					<p>
						<em>Conseil produits:</em>
					</p>
					<ul>
						<li>- Le savon de Marseille</li>
						<li>
							- Une crème : homéoplasmine, cicatryl, cicaplast ou bépanthen
							<p className="care__products--danger">
								Attention ! Afin de prévenir les risques d’allergie, testez le
								produit avant l’application sur votre tatouage.
							</p>
						</li>
						<li>
							- N'utilisez pas :
							<ul>
								<li>de vaseline</li>
								<li>de lotion pour bébé</li>
								<li>de produits à base d'alcool</li>
								<li>de peroxide</li>
								<li>d'huile minérale</li>
								<li>d'aloe</li>
								<li>de noxzema</li>
								<li>de remèdes naturels</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};
export default Infos;
