const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
// const cors = require("cors")({ origin: true });
//const cors = require("cors")({ origin: "http://localhost:3000" });
const cors = require("cors")({ origin: "https://robinlepoutre.com" });
// const cors = require("cors")({ origin: "*" });

const clientId = functions.config().api_config.client_id;
const clientSecret = functions.config().api_config.client_secret;
const refreshToken = functions.config().api_config.refresh_token;

console.log(refreshToken);
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
const accessToken = new Promise((resolve, reject) => {
	oauth2Client.getAccessToken((err, token) => {
		if (err) {
			console.log(err);
			reject("Failed to create access token :(");
		}
		resolve(token);
	});
})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

//create and config transporter
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: "contact.robinlepoutre@gmail.com",
		accessToken,
		clientId: clientId,
		clientSecret: clientSecret,
		refreshToken: refreshToken,
	},
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		const email = req.body.data.email;
		const name = req.body.data.name;
		const firstname = req.body.data.firstname;
		const subject = req.body.data.subject;
		const message = req.body.data.message;
		const datas = req.body.data.attachments;

		const mailOptions = {
			from: email,
			//to: functions.config().config.email,
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
