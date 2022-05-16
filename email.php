<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
 
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();     
		
		
		$mail->Host = 'localhost';  // Specify main and backup SMTP servers original
		// $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers

		$mail->SMTPAuth = false;
		$mail->SMTPSecure = false;
		$mail->SMTPAutoTLS = false;                            // Enable SMTP authentication
		$mail->Username = 'kishanqr@gmail.com';                 // SMTP username
		$mail->Password = 'KishuChinnuAnjaneya@123';                           // SMTP password
		$mail->Port = 587; //original
		// $mail->Port = 465;//Send using SMTP
    

// $mail->Host       = 'smtp.gmail.email';                     //Set the SMTP server to send through
		// $mail->SMTPAuth = true;
		// $mail->SMTPSecure = 'tls';
    // $mail->Username   = 'kishanqr@gmail.com';                     //SMTP username
    // $mail->Password   = 'KishuChinnuAnjaneya@123';                               //SMTP password
    // // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		// // $mail->SMTPSecure = 'tls';
    // $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('kishanqr@gmail.com', 'Kishan B');
    $mail->addAddress('kishanshetty1992@gmail.com', 'Kishan B');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('kishanqr@gmail.com', 'Kishan B');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}