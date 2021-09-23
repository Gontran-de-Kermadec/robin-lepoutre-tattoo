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
			<form ref={form} onSubmit={sendEmail}>
				<div className="control">
					<label htmlFor="name">Nom</label>
					<input id="name" type="text" name="user_name" required />
				</div>
				<div className="control">
					<label htmlFor="email">Email </label>
					<input id="email" type="email" name="user_email" required></input>
				</div>
				<div className="control">
					<label htmlFor="subject">Sujet</label>
					<input id="subject" type="text" name="user_subject" required></input>
				</div>
				<div className="control">
					<label htmlFor="message">Message </label>
					<textarea id="message" name="user_message" required />
				</div>
				<div className="control">
					<label htmlFor="send"></label>
					<input type="submit" id="send" value="Envoyer"></input>
				</div>
			</form>
			{success && (
				<p className="contact__messagesent">Votre message a bien été envoyé</p>
			)}
		</div>
	);
};
export default ContactForm;
