import "../style/Appointment.css";
import img from "../images/time_vertical.jpg";

const Appointment = () => {
	return (
		<div className="section" id="appointment">
			<div className="appointment--background">
				<img src={img} alt="" />
			</div>
			<div className="appointment--opacity">
				<div className="appointment__time">
					<p className="appointment_title h2--title">HORAIRES</p>
					<div className="appointment__position">
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
				<div className="appointment__price">
					<p className="appointment_title h2--title">TARIFS</p>
					<div className="appointment__position">
						<p>
							La valeur d’un tatouage est estimée selon plusieurs critères :
							<br />
							étude du projet, taille, emplacement, niveau de détails du dessin
							final, technique et complexité de la réalisation.
						</p>
						<p>Ces éléments sont intégrés en 3 étapes (ÉTUDE/DESSIN /TATTOO)</p>
						<div className="price__details">
							<p>ETUDE: 50€ / heure</p>
							<p>DESSIN: 100€ / heure</p>
							<p>TATOUAGE: 100€ / heure</p>
						</div>
						<p>
							Le tarif minimum est fixé à 120 € pour tout projet nécessitant
							jusqu’à 1 heure de réalisation.
							<br />
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
