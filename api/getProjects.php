<?php
require_once 'config.php';

$conn = getDBConnection();

$sql = "SELECT id, title, description, image, technologies, github, live FROM projects ORDER BY id DESC";
$result = $conn->query($sql);

$projects = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Convert technologies JSON string to array
        $row['technologies'] = json_decode($row['technologies'], true);
        $projects[] = $row;
    }
}

$conn->close();

sendResponse(true, 'Projects retrieved successfully', ['projects' => $projects]);
?>

