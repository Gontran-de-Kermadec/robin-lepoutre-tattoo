import "../style/ContactForm.css";
import React, { useRef, useState, useEffect } from "react";
import firebaseConfig from "../firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/functions";
// import emailjs from "emailjs-com";

//initialize Cloud Functions through Firebase
firebase.initializeApp(firebaseConfig);
firebase.functions();
//console.log(firebaseConfig);
const ContactForm = () => {
	const reg = /[@#$%^&*;):(<>+=`_]+/gi;
	const form = useRef();
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const [dataUrl, setDataUrl] = useState([]);
	//firebase callable function
	const sendEmail = firebase.functions().httpsCallable("sendEmail");
	const handleInput = (e) => {
		const value = reg.test(e.currentTarget.value);
		if (value) {
			setIsInvalid(true);
		} else {
			setIsInvalid(false);
		}
	};
	const sendForm = (e) => {
		e.preventDefault();
		let attachments = dataUrl.map((img) => {
			return {
				path: img,
			};
		});
		if (!isInvalid) {
			sendEmail({
				name: e.currentTarget.user_name.value,
				firstname: e.currentTarget.user_firstname.value,
				email: e.currentTarget.user_email.value,
				subject: e.currentTarget.user_subject.value,
				message: e.currentTarget.user_message.value,
				attachments: attachments,
			})
				.then((result) => {
					//console.log(result);
					setSuccess(!success);
					setDataUrl([]);
					e.target.reset();
				})
				.catch((error) => {
					console.log(error);
					setFail(true);
					setDataUrl([]);
					e.target.reset();
				});
			// setDataUrl([]);
			// e.target.reset();
		}
		// if (!isInvalid) {
		// 	emailjs
		// 		.sendForm(
		// 			// "service_ff0nc3o",
		// 			"service_y8i6wok",
		// 			"template_emnd0iq",
		// 			form.current,
		// 			"user_Ucen0nIkMHGKzdR7E0veU"
		// 		)
		// 		.then(
		// 			(result) => {
		// 				console.log(result.text);
		// 				setSuccess(!success);
		// 			},
		// 			(error) => {
		// 				console.log(error.text);
		// 				setFail(true);
		// 			}
		// 		);
		// 	e.target.reset();
		// }
	};
	//function to read files and add them to dataUrl array
	const getImages = (e) => {
		setDataUrl([]);
		let files = e.currentTarget.files;
		if (files.length > 5) {
			alert("Vous pouvez telecharger 5 images max");
			e.target.value = "";
		} else {
			Array.from(files).forEach((file) => {
				const reader = new FileReader();
				reader.addEventListener("load", function () {
					//convert image file to base64 string
					let data = reader.result;
					console.log(dataUrl);
					setDataUrl((dataUrl) => [...dataUrl, data]);
				});
				if (file) {
					reader.readAsDataURL(file);
				}
			});
		}
	};
	const clearImg = (e) => {
		e.preventDefault();
		e.target.parentElement.children[0].value = "";
		setDataUrl([]);
	};
	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(!success);
			}, 15000);
		}
	}, [success]);
	return (
		<div className="section" id="contact">
			<p className="h2--title">CONTACT</p>
			<div className="contact__form">
				<div className="contact__flex">
					<div className="contact__location">
						<div className="contact__position">
							<p>2 rue Thomas Edison</p>
							<p>
								97122 Baie Mahault (ZI JARRY – face à la nouvelle concession
								Jeep, à l’étage de Renée Boulangerie)
							</p>
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
					<form ref={form} onSubmit={sendForm}>
						<div className="form__fullname">
							<div className="control">
								<input
									id="name"
									type="text"
									name="user_name"
									placeholder="Nom"
									required
									onChange={handleInput}
								/>
							</div>
							<div className="control">
								<input
									id="firstname"
									type="text"
									name="user_firstname"
									placeholder="Prénom"
									required
									onChange={handleInput}
								/>
							</div>
						</div>
						<div className="control">
							<input
								id="email"
								type="email"
								name="user_email"
								placeholder="Email"
								required
							/>
						</div>
						<div className="control">
							<input
								id="subject"
								type="text"
								name="user_subject"
								placeholder="Titre de votre projet"
								required
								onChange={handleInput}
							/>
						</div>
						<div className="control">
							<textarea
								id="message"
								name="user_message"
								placeholder="Description"
								required
							/>
						</div>
						<div className="control flex__input">
							<input
								id="attachment"
								type="file"
								name="attachment"
								accept="image/*"
								multiple
								onChange={getImages}
							/>
							{dataUrl.length > 0 ? (
								<button onClick={clearImg}>Supprimer</button>
							) : null}
						</div>
						<div className="control">
							<input type="submit" id="send" value="ENVOYER" />
						</div>
						{isInvalid && (
							<p className="contact__invalid">
								Pas de caractères spéciaux comme (@,{"<"}, =, %...) !!
							</p>
						)}
					</form>
				</div>
				<div className="contact__img--uploaded">
					{dataUrl.map((image, i) => {
						return (
							<img src={image} key={i} className="contact__img" alt="img" />
						);
					})}
				</div>
				{success && (
					<p className="contact__messagesent">
						Votre message a bien été envoyé
					</p>
				)}
			</div>
			{fail && (
				<p className="contact__messageunsent">
					Le message n'a pas été envoyé. Essayer à nouveau plus tard ou
					contactez moi à l'adresse suivante:
					<br />
					<a href="mailto:contact.robinlepoutre@gmail.com">
						contact.robinlepoutre@gmail.com
					</a>
				</p>
			)}
		</div>
	);
};
export default ContactForm;
