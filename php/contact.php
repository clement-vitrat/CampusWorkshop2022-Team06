<?php
	$entete  = 'MIME-Version: 1.0' . "\r\n";
	$entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$entete .= 'From: ' . $_POST['user_email'] . "\r\n";

	$message = '<h1>Message envoyé depuis la page Contact de monsite.fr</h1>
	<p><b>Nom : </b>' . $_POST['user_name'] . '<br>
	<b>Email : </b>' . $_POST['user_email'] . '<br>
	<b>Message : </b>' . $_POST['user_message'] . '</p>';

	mail('clementvitrat@gmail.com', 'Envoi depuis page Contact', $message, $entete);

?>