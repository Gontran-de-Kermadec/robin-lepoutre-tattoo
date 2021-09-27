import "../style/Care.css";
const Care = () => {
	return (
		<div>
			<section className="care">
				<h2 className="care__title">LES SOINS À APPORTER</h2>
				<div className="care__global">
					<div className="care__pretattoo">
						<div className="pretattoo__text">
							<h3>
								<em>Avant la séance tatouage :</em>
							</h3>
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
					</div>
					<div className="care__posttattoo">
						<div className="posttattoo__text">
							<h3>
								<em>Après la séance tatouage :</em>
							</h3>
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
							<p>
								Le tatouage est réalisé dans des conditions d’hygiène les plus
								strictes, prenez-en soin les jours qui suivent car vous serez
								responsable de sa cicatrisation.
							</p>
						</div>
					</div>
				</div>
				<div className="care__products">
					<div className="products__text">
						<h3>
							<em>Conseil produits</em>
						</h3>
						<ul>
							<li>- Le savon de Marseille</li>
							<li>
								<p>
									- Une crème : homéoplasmine, cicatryl, cicaplast ou bépanthen
								</p>
								<p className="care__products--danger">
									Attention ! Afin de prévenir les risques d’allergie, testez le
									produit avant l’application sur votre tatouage.
								</p>
							</li>
							{/* <li>
								- N'utilisez pas :
								<ul className="products__dontuse">
									<li>de vaseline</li>
									<li>de lotion pour bébé</li>
									<li>de produits à base d'alcool</li>
									<li>de peroxide</li>
									<li>d'huile minérale</li>
									<li>d'aloe</li>
									<li>de noxzema</li>
									<li>de remèdes naturels</li>
								</ul>
							</li> */}
						</ul>
						<div className="products__dontuse">
							<p>N'utilisez pas :</p>
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
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Care;
