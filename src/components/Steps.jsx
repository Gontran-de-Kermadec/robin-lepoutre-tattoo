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
					<h3>Étape 1: Avez vous un projet ?</h3>
					<ul>
						<li>
							- si oui communiquez -le moi par mail avec le plus de détails
							possible
						</li>
						<li>
							- vous n’avez pas de projet clairement défini, pas de soucis. Je
							peux vous accompagner étape par étape. Indiquez-moi ce que vous
							recherchez.
						</li>
					</ul>
					<p>
						Je ne saurais pas répondre à toutes les demandes et notamment les
						projets “cover”.
					</p>
				</div>
				<div className="single__step">
					<h3>Étape 2:</h3>
					<ul>
						<li>
							- prise de rdv (environ 15 min) afin de cerner votre besoin, vos
							attentes. Mais également que ce projet correspond à mon
							savoir-faire.
						</li>
						<li>
							- Validation d’un devis ( Une étude approfondie peut être
							nécessaire avant le dessin, celle ci est facturée)
						</li>
						<li>- validation échelonnement paiement</li>
						<li>- paiement de la prochaine étape (étude / dessin)</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Étape 3: étude approfondie du projet</h3>
					<ul>
						<li>
							- proposition / validation du style, la taille, l’emplacement ...
						</li>
						<li>
							- rencontre intermédiaire et finale en fonction de l’importance du
							projet afin de valider tous les paramètres avant le dessin.
						</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Etape 4: Dessin</h3>
					<ul>
						<li>
							- création du projet, sur papier, tablette ou directement sur
							vous.
						</li>
						<li>- validation du dessin</li>
					</ul>
				</div>
				<div className="single__step">
					<h3>Etape 5: Tatouage</h3>
					<p>- ne bouge pas !</p>
				</div>
			</div>
		</div>
	);
};
export default Steps;
