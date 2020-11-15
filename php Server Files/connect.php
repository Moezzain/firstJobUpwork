<?php

$username = "cl27-person"; 
$password = "personality@123"; 
$servername = "79.170.44.116"; 
$dbname = "cl27-person";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully.<br>";

?>