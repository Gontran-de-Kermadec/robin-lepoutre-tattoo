import "../style/ContactForm.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		console.log(form.current);
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
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
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
		</div>
	);
};
export default ContactForm;
