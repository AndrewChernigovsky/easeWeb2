<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

//require 'phpmailer/PHPMailer.php';
require 'phpmailer/PHPMailerAutoload.php';

if (!empty($_POST['username'])) {

    $mail = new PHPMailer;
    $mail->isSMTP();

    $mail->SMTPDebug = 1;

    $mail->Host = 'smtp.mail.ru';

    $mail->SMTPAuth = true;
    $mail->Username = 'easewebcompany@mail.ru'; // логин от вашей почты
    $mail->Password = 'Sinkhr0fazatron'; // пароль от почтового ящика
    $mail->SMTPSecure = 'SSL';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'easewebcompany@mail.ru';  // адрес почты, с которой идет отправка
    $mail->FromName = 'Easeweb | сайты, который продают'; // имя отправителя
    $mail->addAddress('easeweb@mail.ru', 'Easeweb');

    $mail->isHTML(true);

    $mail->Subject = $_POST['subject'];
    $mail->Body = "Имя: {$_POST['username']}<br> Телефон: {$_POST['userphone']}<br> Сообщение: " . nl2br($_POST['body']);
    $mail->AltBody = "Имя: {$_POST['username']}\r\n Телефон: {$_POST['userphone']}\r\n Сообщение: {$_POST['body']}";

    //$mail->SMTPDebug = 1;

    if ($mail->send()) {
        $answer = '1';
    } else {
        $answer = '0';
        echo 'Письмо не может быть отправлено. ';
        echo 'Ошибка: ' . $mail->ErrorInfo;
    }
    die($answer);
}

?>