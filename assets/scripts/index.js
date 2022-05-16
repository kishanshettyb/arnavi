const contactform = document.querySelector(".contact-form");
let yourname = document.getElementById("yourname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactform.addEventListener("submit", (e) => {
	e.preventDefault();
	let formData = {
		yourname: yourname.value,
		email: email.value,
		subject: subject.value,
		message: message.value
	};
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.onload = function () {
		console.log(xhr.responseText);
		if (xhr.responseText == "success") {
			yourname.value = "";
			email.value = "";
			subject.value = "";
			message.value = "";
			alert("email sent");
		} else {
			alert("something went wrong");
		}
	};
	xhr.send(JSON.stringify(formData));
});
