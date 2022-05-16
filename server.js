const express = require("express");
const app = express();
const port = 5000;

//env variable
require("dotenv").config();

//path for tendering html files
const path = require("path");

app.use(express.static("/"));

// cors
const cors = require("cors");
app.use(cors());

//accept post form data
const bodyParser = require("express").json;
app.use(bodyParser());

//node mailer config
const nodemailer = require(nodemailer);

const transporter = nodemailer.createTransport({
	service: "gamil",
	auth: {
		user: "kishanqr@gmail.com",
		pass: "KishuChinnuAnjaneya@123"
	}
});
