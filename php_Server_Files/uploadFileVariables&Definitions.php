<?php

#$fileName = $_GET['fileName'];
parse_str(implode('&', array_slice($argv, 1)), $_GET);
$fileName = $argv[1];

require("connect.php");

if (($handle = fopen($fileName, "r")) == FALSE){
	die("Can't Open File");
}

$sql = "truncate scale_and_labels;";

if ($conn->query($sql) === TRUE) {
  echo "Table scale_and_labels cleared.<br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$row = 0;
if (($handle = fopen($fileName, "r")) !== FALSE) {
//if (($handle = fopen("VariablesAndDefinitionsTable.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
		$row++;
        if($row == 1) continue;
			
		$sql = "INSERT INTO scale_and_labels (scale, label, description)
		VALUES ('" . $data[0] . "', '" . $data[1] . "', '" . $data[2] . "');";

		if ($conn->query($sql) === TRUE) {
		  echo "New record Number " . ($row-1) . " created successfully.<br>";
		} else {
		  echo "Error: " . $sql . "<br>" . $conn->error;
		}
    }
    fclose($handle);
}

$conn->close();

?>