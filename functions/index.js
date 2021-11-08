const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require("cors")({ origin: true });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//get gmail api infos
// const clientId =
// 	"551698740740-qd3cn6nsnj1djtg4lbm8b3gj04p34443.apps.googleusercontent.com";
const clientId = functions.config().api_config.client_id;
//const clientSecret = "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";
const clientSecret = functions.config().api_config.client_secret;
const refreshToken = functions.config().api_config.refresh_token;
// const refreshToken =
// 	"1//041lKwbxAm24nCgYIARAAGAQSNwF-L9Irw5-j4DuXE_GJfpTOPPp4eL8TokfQT12uDUdFL6Uk3xXAhWYqP1mzvj_nv1JUWnwyC5g";

//create new instance to authenticate
const oauth2Client = new google.auth.OAuth2(
	clientId,
	clientSecret,
	"https://developers.google.com/oauthplayground"
);

//identifiaction to gmail api
oauth2Client.setCredentials({
	refresh_token: refreshToken,
});

//get access token
//const accessToken = oauth2Client.getAccessToken();
const accessToken = new Promise((resolve, reject) => {
	oauth2Client.getAccessToken((err, token) => {
		if (err) {
			reject("Failed to create access token :(");
		}
		resolve(token);
	});
});

//create and config transporter
let transporter = nodemailer.createTransport({
	service: "gmail",
	// host: "smtp.gmail.com",
	// port: 465,
	// secure: true, // true for 465, false for other ports
	// auth: {
	// 	user: "gontrandekermadec@gmail.com",
	// 	pass: "gtdkmc1990",
	// },
	auth: {
		type: "OAuth2",
		user: "contact.robinlepoutre@gmail.com",
		accessToken,
		clientId: clientId,
		clientSecret: clientSecret,
		refreshToken: refreshToken,
	},
});

// const mailOptions = {
// 	from: "aze@aze.fr",
// 	to: `gontrandekermadec@gmail.com`,
// 	subject: "New message from the nodemailer-form app",
// 	text: "nouveau message",
// };

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		// console.log(
		// 	"from sendEmail function. The request object is: " +
		// 		JSON.stringify(req.body)
		// );
		const email = req.body.data.email;
		const name = req.body.data.name;
		const firstname = req.body.data.firstname;
		const subject = req.body.data.subject;
		const message = req.body.data.message;
		const datas = req.body.data.attachments;

		const mailOptions = {
			from: email,
			//to: functions.config().config.email,
			//to: `gontrandekermadec@gmail.com`,
			to: `contact.robinlepoutre@gmail.com`,
			subject: subject,
			//text: `Vous avez reçu un mail de ${firstname} ${name}, ${email}.${message}`,
			html: `
            <p>Vous avez reçu un mail de <b>${firstname} ${name}</b></p>
            <p>Adresse email de <b>${firstname} ${name}</b>: ${email}</p>
            <p>Message de <b>${firstname} ${name}</b>:<br/>${message}</p>
            `,
			attachments: datas,
		};
		//const datas = req.body.data.dataUrl;
		// return res.status(200).send({
		// 	data: {
		// 		status: 200,
		// 		message: "sent",
		// 	},
		// });
		return transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return res.status(500).send({
					data: {
						status: 500,
						message: error.toString(),
					},
				});
			}
			return res.status(200).send({
				data: {
					status: 200,
					message: "sent",
				},
			});
		});
	});
});
