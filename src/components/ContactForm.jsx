const ContactForm = () => {
	return (
		<div className="section">
			<p>Contactez moi</p>
			<form>
				<div className="control">
					<label htmlFor="name">Nom</label>
					<input id="name" type="text" />
				</div>
				<div className="control">
					<label htmlFor="email">Email </label>
					<input id="email" type="email"></input>
				</div>
				<div className="control">
					<label htmlFor="message">Message </label>
					<textarea id="message" />
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
