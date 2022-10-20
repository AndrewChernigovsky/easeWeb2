<?php
$fio = $_POST['username'];
$email = $_POST['userphone'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("easeweb@mail.ru", "Заявка с сайта", "ФИО: ". $fio.". E-mail: ". $email ,"From: wordpress@izosimov-andrew.ru \r\n"))
 {     echo "сообщение успешно отправлено";
		echo header('location: thank-you.html');
} else {
    echo "при отправке сообщения возникли ошибки";
	ini_set('display_errors','On');
	error_reporting('E_ALL');
}?>