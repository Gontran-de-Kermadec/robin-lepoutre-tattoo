import "../style/Steps.css";
const Steps = () => {
	return (
		<div className="section steps">
			<h2>Comment ça marche ?</h2>
			<div className="frise__container">
				<div className="frise">
					<div className="frise__arrow">
						<div className="frise__arrow arrow__inner"></div>
					</div>
					<div className="frise__text">
						<p>Demande RDV</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>Rencontre + étude</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>Étude (optionnel)</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>Déssin</p>
					</div>
				</div>
				<div className="frise">
					{/* <div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div> */}
					<div className="frise__text">
						<p>Tattoo</p>
					</div>
				</div>
			</div>
			<div className="steps__container">
				<div className="single__step">
					<h3>Étape 1: La Présentation et description du projet</h3>
					<ul>
						<div className="single__step--flex">
							<li>
								- Si vous avez un projet :
								<p>
									Communiquez-le à Robin par email avec le plus de détails
									possibles (description, style, photo, emplacement, taille, ce
									que vous aimez, ce que vous n’aimez pas…)
								</p>
							</li>
							<li>
								- Si votre projet n’est pas encore clairement défini :
								<p>
									Robin vous accompagnera étape par étape pour vous donner
									entière satisfaction. Indiquez-lui vos souhaits par email.
								</p>
								<p>
									Privilégiant la qualité de son travail, Robin sélectionnera
									les projets en adéquation avec ses compétences et ne pourra
									répondre à toutes les demandes, notamment les projets “cover”.
								</p>
								<p>
									L’e-mail est le seul moyen de prendre contact avec Robin et
									d’échanger sur vos projets.
								</p>
							</li>
						</div>
					</ul>
					<p>
						<q>
							Mes tatouages sont des créations artistiques sur-mesure et
							durables. Je cible l’équilibre entre votre personnalité, les
							courbes de votre corps et ma sensibilité.
						</q>
					</p>
				</div>
				<div className="single__step">
					<h3>Étape 2: La première Rencontre (15 minutes)</h3>
					<ul>
						<li>
							- Rencontre gratuite afin d’approfondir vos besoins et attentes
						</li>
						<li>- Réalisation du devis</li>
						<li>
							- Après validation de votre projet et acceptation du devis, le
							paiement de la prochaine étape (étude ou dessin) est exigé.
						</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Étape 3: L’Étude approfondie du projet (optionnelle)</h3>
					<p>
						Pour des réalisations plus complexes, qui nécessitent une recherche
						approfondie, une étude (séance payante) sera organisée afin de
						définir les contours avant la réalisation du devis final et du
						dessin.
					</p>
					<ul>
						<li>
							- Proposition &amp; validation du style, de la taille, de
							l’emplacement de votre futur tatouage...
						</li>
						<li>
							- Rencontre intermédiaire et finale en fonction de l’importance de
							votre projet afin de valider tous les paramètres avant la
							réalisation du dessin.
						</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Étape 4: Le Dessin</h3>
					<ul>
						<li>
							- Dessin réalisé sur papier, tablette ou directement sur vous
						</li>
						<li>- Validation du dessinin</li>
						<li>- Acompte demandé pour fixer la séance de tatouage</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Étape 5: Le Tatouage</h3>
					<p>Ne bougez pas ! Robin réalise son œuvre sur vous !</p>
				</div>
			</div>
			<p className="steps__cancel">
				En cas d’annulation du RDV tatouage, les acomptes ne sont pas
				remboursables si Robin n’a pas été prévenu au moins 72 heures à
				l’avance.
			</p>
		</div>
	);
};
export default Steps;
