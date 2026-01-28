<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Invalid request method');
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    sendResponse(false, 'All fields are required');
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, 'Invalid email address');
}

$conn = getDBConnection();

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$subject = $conn->real_escape_string($data['subject']);
$message = $conn->real_escape_string($data['message']);

$sql = "INSERT INTO messages (name, email, subject, message, created_at) 
        VALUES ('$name', '$email', '$subject', '$message', NOW())";

if ($conn->query($sql) === TRUE) {
    // Optionally send email notification here
    sendResponse(true, 'Message sent successfully!');
} else {
    sendResponse(false, 'Error: ' . $conn->error);
}

$conn->close();
?>

