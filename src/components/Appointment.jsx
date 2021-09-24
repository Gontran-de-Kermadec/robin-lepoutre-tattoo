import "../style/Appointment.css";

const Appointment = () => {
	return (
		<div className="section" id="appointment">
			<div className="appointment--opacity">
				<div className="appointment__time">
					<h2>COMMENT OBTENIR UN RENDEZ VOUS ?</h2>
					<div className="appointment__position">
						<p>
							<i>
								Pour un meilleur suivi et répondre au mieux à vos attentes,
								merci de nous contacter Robin uniquement par E-mail.
							</i>
						</p>
						<div className="time__details">
							<p>
								RDV ÉCHANGE SUR VOS PROJETS :<br />
								LUNDI 14H00 / 16H30
							</p>
							<p>
								SÉANCES DE TATOUAGE :<br /> MARDI ET VENDREDI 9H00 / 16H30
							</p>
						</div>
					</div>
				</div>
				<div className="appointment__location">
					<div className="appointment__position">
						<p>2 rue Thomas Edison</p>
						<p>
							97122 Baie Mahault (ZI JARRY – face à la nouvelle concession Jeep,
							à l’étage de Renée Boulangerie)
						</p>
						<div>
							<iframe
								title="Adresse salon"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.3593415970204!2d-61.556857285139124!3d16.253343388767377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c13467ca875ae73%3A0x56523e4a4e01acbe!2s2%20Rue%20Thomas%20Edison%2C%20Baie-Mahault%2C%20Guadeloupe!5e0!3m2!1sfr!2sfr!4v1632413123318!5m2!1sfr!2sfr"
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
				<div className="appointment__price">
					<div className="appointment__position">
						<p>
							TARIFS: <br /> La valeur d’un tatouage est estimée selon plusieurs
							critères : étude du projet, taille, emplacement, niveau de détails
							du dessin final, technique et complexité de la réalisation.
						</p>
						<p>Ces éléments sont intégrés en 3 étapes (ÉTUDE/DESSIN /TATTOO)</p>
						<div className="price__details">
							<p>ETUDE: 50€ / heure</p>
							<p>DESSIN: 100€ / heure</p>
							<p>TATOUAGE: 100€ / heure</p>
						</div>
						<p>
							<i>
								Le tarif minimum est fixé à 120 € pour tout projet nécessitant
								jusqu’à 1 heure de réalisation.
							</i>
						</p>
						<p>
							Les retouches, parfois nécessaires en finition, sont comprises
							dans le prix.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Appointment;
