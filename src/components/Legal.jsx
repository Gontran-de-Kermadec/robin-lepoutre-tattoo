import { Link } from "react-router-dom";

const Legal = () => {
	return (
		<div className="legal">
			<h1>Mentions Légales</h1>
			<p>
				Robin Lepoutre s’engage à être vigilant sur la fiabilité de
				l’information mise à la disposition des internautes qui consultent ce
				site. Il ne saurait en revanche être tenu pour responsable d’erreurs,
				d’omissions ou des résultats qui pourraient être obtenus par un usage
				inapproprié de ces informations.
			</p>
			<Link to="/home">Retour</Link>
		</div>
	);
};

export default Legal;
