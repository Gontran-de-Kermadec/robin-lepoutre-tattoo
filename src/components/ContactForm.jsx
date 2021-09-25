import "../style/ContactForm.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const form = useRef();
	const [success, setSuccess] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		setSuccess(!success);
		emailjs
			.sendForm(
				// "service_ff0nc3o",
				"service_y8i6wok",
				"template_emnd0iq",
				form.current,
				"user_Ucen0nIkMHGKzdR7E0veU"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(!success);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(!success);
			}, 10000);
		}
	}, [success]);
	return (
		<div className="section" id="contact">
			<h2>Contactez moi</h2>
			<div className="contact__flex">
				<div className="contact__location">
					<div className="contact__position">
						{/* <p>2 rue Thomas Edison</p>
						<p>
							97122 Baie Mahault (ZI JARRY – face à la nouvelle concession Jeep,
							à l’étage de Renée Boulangerie)
						</p> */}
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
				{/* <div className="form__container"> */}
				<form ref={form} onSubmit={sendEmail}>
					<div className="form__fullname">
						<div className="control">
							{/* <label htmlFor="name">Nom</label> */}
							<input
								id="name"
								type="text"
								name="user_name"
								placeholder="Nom"
								required
							/>
						</div>
						<div className="control">
							{/* <label htmlFor="firstname">Prénom</label> */}
							<input
								id="firstname"
								type="text"
								name="user_firstname"
								placeholder="Prénom"
								required
							/>
						</div>
					</div>
					<div className="control">
						{/* <label htmlFor="email">Email </label> */}
						<input
							id="email"
							type="email"
							name="user_email"
							placeholder="Email"
							required
						></input>
					</div>
					<div className="control">
						{/* <label htmlFor="subject">Sujet</label> */}
						<input
							id="subject"
							type="text"
							name="user_subject"
							required
							placeholder="Sujet"
						></input>
					</div>
					<div className="control">
						{/* <label htmlFor="message">Message </label> */}
						<textarea
							id="message"
							name="user_message"
							placeholder="Message"
							required
						/>
					</div>
					<div className="control">
						<label htmlFor="send"></label>
						<input type="submit" id="send" value="ENVOYER"></input>
					</div>
				</form>
				{/* </div> */}
			</div>
			{success && (
				<p className="contact__messagesent">Votre message a bien été envoyé</p>
			)}
		</div>
	);
};
export default ContactForm;
