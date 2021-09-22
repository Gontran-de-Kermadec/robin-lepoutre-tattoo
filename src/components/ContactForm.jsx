import "../style/ContactForm.css";
const ContactForm = () => {
	return (
		<div className="section" id="contact">
			<p>Contactez moi</p>
			<form>
				<div className="control">
					<label htmlFor="name">Nom</label>
					<input id="name" type="text" required />
				</div>
				<div className="control">
					<label htmlFor="email">Email </label>
					<input id="email" type="email" required></input>
				</div>
				<div className="control">
					<label htmlFor="subject">Sujet</label>
					<input id="subject" type="text" required></input>
				</div>
				<div className="control">
					<label htmlFor="message">Message </label>
					<textarea id="message" required />
				</div>
				<div className="control">
					<label htmlFor="send"></label>
					<input type="submit" id="send"></input>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
