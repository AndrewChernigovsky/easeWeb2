<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'dzharuzov@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('dzharuzov@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('gomudusu@p33.org');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>

<!-- /////////////////////////////
//////////////////////////\/
///////////////////////////////// -->

<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['username'];
$phone = $_POST['userphone'];
// $email = $_POST['user_email'];

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'easewebcompany@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Sinkhr0fazatron'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('easewebcompany@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('easewebcompany@mail.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);         // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}
?>
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
		header('location: thank-you.html');
    } else {
        $answer = '0';
        echo 'Письмо не может быть отправлено. ';
        echo 'Ошибка: ' . $mail->ErrorInfo;
    }
    die($answer);
}

?>
