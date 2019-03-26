<?php

		// Mailtrap
		if( $_SERVER['SERVER_NAME'] === 'localhost' ) {
		  add_action('phpmailer_init', 'mailtrap');
		}
    else
      add_action('phpmailer_init', 'send_smtp_mail_php');

		function mailtrap($phpmailer) {
		  $phpmailer->isSMTP();
		  $phpmailer->Host = 'smtp.mailtrap.io';
		  $phpmailer->SMTPAuth = true;
		  $phpmailer->Port = 2525;
		  $phpmailer->Username = 'db9ee4eeaea737';
		  $phpmailer->Password = '03f5c1cec80cf4';
		}

		function send_smtp_mail_php($phpmailer) {
		  $phpmailer->isSMTP();
		  $phpmailer->Host = SMTP_HOST;
		  $phpmailer->SMTPAuth = SMTP_AUTH;
		  $phpmailer->SMTPSecure = SMTP_SECURE;
		  $phpmailer->Port = SMTP_PORT;
			$phpmailer->SMTPDebug = SMTP_DEBUG;
		}
