import "../style/Appointment.css";

const Appointment = () => {
	return (
		<div className="section" id="appointment">
			<div className="appointment--opacity">
				<div className="appointment__time">
					<p>Horaires</p>
					<div className="time__details">
						<p>
							PRISE DE RDV: <br />
							LUNDI 14H00 / 16H30
						</p>
						<p>
							TATTOO: <br /> MARDI ET VENDREDI 9H00 / 16H30
						</p>
					</div>
				</div>
				<div className="appointment__price">
					<p>
						TARIF: <br /> La valeur d’un tatouage est estimée selon plusieurs
						critères: étude, taille, emplacement, niveau de détails du dessin
						final, technique et complexité de la réalisation. Ces éléments sont
						intégrés en 3 étapes (ETUDE / DESSIN / TATTOO). Avant chacune de ces
						étapes un règlement est exigé.
					</p>
					<div className="price__details">
						<p>ETUDE: 50€ / heure</p>
						<p>DESSIN: 100€ / heure</p>
						<p>TATOUAGE: 100€ / heure</p>
					</div>
					<p>
						<i>
							Le tarif minimum est de 120€ pour tout projet nécessitant 1h ou
							moins de réalisation.
						</i>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Appointment;
