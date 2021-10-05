import "../style/Steps.css";
const Steps = () => {
	return (
		<div className="section steps">
			<p className="h2--title">COMMENT ÇA MARCHE ?</p>
			<div className="frise__container">
				<div className="frise">
					<div className="frise__arrow">
						<div className="frise__arrow arrow__inner"></div>
					</div>
					<div className="frise__text">
						<p>PRÉSENTATION PROJET</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>PREMIÈRE RENCONTRE</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>ÉTUDE (OPTIONNELLE)</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__arrow">
						<div className="arrow__inner frise__arrow"></div>
					</div>
					<div className="frise__text">
						<p>DESSIN</p>
					</div>
				</div>
				<div className="frise">
					<div className="frise__text">
						<p>TATTOO</p>
					</div>
				</div>
			</div>
			<div className="step__bloc--flex">
				<div>
					<div className="single__step">
						<p className="h3--title">
							Étape 1: La Présentation et description du projet
						</p>
						<p>Avez-vous un projet ?</p>
						<p>
							- Si oui, communiquez-le moi par mail avec le plus de détails
							possibles (description, style, photo, emplacement, taille, ce que
							vous aimez, ce que vous n'aimez pas)
						</p>
						<p>
							- Vous n'avez pas de projet clairement défini, pas de soucis.
							<br />
							Robin vous accompagne étape par étape.
							<br />
							Indiquez ce que vous recherchez par mail.
						</p>
						<p>
							Robin répondra positivement ou négativement à votre projet en
							fonction de son savoir-faire et de ses domaines de prédilections.
						</p>
						<p>
							<i>
								Il ne pourra pas répondre à toutes les demandes et notamment les
								projets "cover".
							</i>
						</p>
					</div>
				</div>
				<div>
					<div className="single__step">
						<p className="h3--title">
							Étape 2: La première Rencontre (15 minutes)
						</p>
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
						<p className="h3--title">
							Étape 3: L’Étude approfondie du projet (optionnelle)
						</p>
						<p>
							Pour des réalisations plus complexes, qui nécessitent une
							recherche approfondie, une étude (séance payante) sera organisée
							afin de définir les contours avant la réalisation du dessin.
						</p>
						<ul>
							<li>
								- Proposition &amp; validation du style, de la taille, d'un
								emplacement...
							</li>
							<li>
								- Rencontre intermédiaire et finale en fonction de l’importance
								du projet afin de valider tous les paramètres avant la
								réalisation du dessin.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="step__bloc--flex">
				<div className="single__step">
					<p className="h3--title">Étape 4: Le Dessin</p>
					<ul>
						<li>
							- Dessin réalisé sur papier, tablette ou directement sur vous
						</li>
						<li>- Validation du dessin</li>
						<li>- Acompte demandé pour fixer la séance de tatouage</li>
					</ul>
				</div>
				<div className="single__step">
					<p className="h3--title">Étape 5: Le Tatouage</p>
					<p>Ne bougez pas ! Robin réalise son œuvre sur vous !</p>
				</div>
			</div>
			<p className="steps__cancel">
				En cas d’annulation du RDV tatouage, l'accompte versé n'est pas
				remboursable si Robin n’a pas été prévenu au moins 72 heures à l’avance.
			</p>
		</div>
	);
};
export default Steps;
