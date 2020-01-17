<?php
    $name = $_POST['username'];
    $user_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "arek.banas@hotmail.com";
    
    $email_subject = 'Wiadomość dotycząca portfolio';

    $email_body = "Nazwa użytkownika: $name.\n".
                    "Email użytkownika: $user_email.\n".
                    "Wiadomość: $message.\n";

    $to = "arek.banas@hotmail.com";

    $headers = "Od: $email_from \r\n";

    $headers .= "Odpowiedz do: $user_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Contact.js");

?>