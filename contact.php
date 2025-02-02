<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $address = htmlspecialchars(trim($_POST["address"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if ($email) {
        $to = "ba@gmail.com";  // Replace with your email
        $headers = "From: $email\r\n";
        $fullMessage = "Name: $name\nAddress: $address\nEmail: $email\n\nMessage:\n$message";

        if (mail($to, $subject, $fullMessage, $headers)) {
            echo "<script>
                alert('Email sent successfully!');
                window.location.href = 'index.html'; // Replace with your homepage URL
            </script>";
        } else {
            echo "<script>
                alert('Failed to send the email. Please try again later.');
                window.history.back();
            </script>";
        }
    } else {
        echo "<script>
            alert('Invalid email address.');
            window.history.back();
        </script>";
    }
}
?>
