<?php
require_once 'config.php';

$conn = getDBConnection();

$sql = "SELECT name, level, color FROM skills ORDER BY level DESC";
$result = $conn->query($sql);

$skills = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $skills[] = $row;
    }
}

$conn->close();

sendResponse(true, 'Skills retrieved successfully', ['skills' => $skills]);
?>

