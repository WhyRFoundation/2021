<?php

/**
 * Ajax Form Sending Scripts
 * Uses php local sendmail service
 */

/**
 * Disabling debug
 */
error_reporting(0);
ini_set('display_errors', 'off');

$to = 'noreply@like-themes.com';
$subject = 'New contact message from '.$_SERVER['SERVER_NAME'];

/**
 * List of all variables from web
 */
$fields = array(

	array('field' => 'name', 'header' => 'User name:', 'required' => true),
	array('field' => 'email', 'header' => 'Email:', 'required' => false),
	array('field' => 'lname', 'header' => 'Last Name:', 'required' => false),
	array('field' => 'phone', 'header' => 'Phone:', 'required' => false),
);


/**
 * Filter
 */
$message = '';
foreach ($fields as $field) {

	if ($field['required'] AND empty($_POST[$field['field']])) {

		echo 'false';
		die();
	}

	$message .= $field['header']." ".$_POST[$field['field']]."<br>";
}

/**
  *  If empty user email, sending from admin address. You can change this.
  */
if (!empty($_POST['email'])) {

	$from = $_POST['email'];
}
	else {

	$from = $to;
}
	
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <{$from}>" . "\r\n";

$query = mail($to , $subject , $message , $headers);

/**
 * Answer will be visible to user
 */
if ($query) {

	echo "Message sent.";
}
	else {

	echo "Message sending error.";
}


