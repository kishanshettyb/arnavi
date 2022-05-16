// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multiparty = require("multiparty");
// require("dotenv").config();

// const PORT = process.env.PORT || 5000;

// // instantiate an express app
// const app = express();
// // cors
// app.use(cors({ origin: "*" }));

// app.use("/public", express.static(process.cwd() + "/public")); //make public static

// const transporter = nodemailer.createTransport({
// 	host: "smtp-mail.outlook.com",
// 	port: 587,
// 	auth: {
// 		user: process.env.EMAIL,
// 		pass: process.env.PASS
// 	}
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log("Server is ready to take our messages");
// 	}
// });

// app.post("/send", (req, res) => {
// 	let form = new multiparty.Form();
// 	let data = {};
// 	form.parse(req, function (err, fields) {
// 		Object.keys(fields).forEach(function (property) {
// 			data[property] = fields[property].toString();
// 		});
// 		console.log(data);
// 		const mail = {
// 			sender: `${data.name} <${data.email}>`,
// 			to: process.env.EMAIL, // receiver email,
// 			subject: data.subject,
// 			text: `${data.name} <${data.email}> \n${data.message}`
// 		};
// 		transporter.sendMail(mail, (err, data) => {
// 			if (err) {
// 				console.log(err);
// 				res.status(500).send("Something went wrong.");
// 			} else {
// 				res.status(200).send("Email successfully sent to recipient!");
// 			}
// 		});
// 	});
// });

// //Index page (static HTML)
// app.route("/").get(function (req, res) {
// 	res.sendFile(process.cwd() + "/public/index.html");
// });

// /*************************************************/
// // Express server listening...
// app.listen(PORT, () => {
// 	console.log(`Listening on port ${PORT}...`);
// });

const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5500;

//middleware
app.use(express.static("/"));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/contact.html");
});

app.post("/", (req, res) => {
	console.log(req.body);
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "kaleigh.tremblay10@ethereal.email",
			pass: "endACpe8WktEuBqAWz"
		}
	});
	const mailOptions = {
		from: req.body.email,
		to: "kishanshetty1992@gmail.com",
		subject: `Message from  ${req.body.email}`,
		text: req.body.message
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.send("error");
		} else {
			console.log("Email sent:" + info.response);
			res.send("success");
		}
	});
});
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
