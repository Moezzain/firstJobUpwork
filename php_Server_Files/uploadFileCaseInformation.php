<?php

//$fileName = $_GET['fileName'];
//$fileName = parse_str($argv[0], $_GET);
parse_str(implode('&', array_slice($argv, 1)), $_GET);
$fileName = $argv[1];

function generateRandomString($length = 15) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

require("connect.php");

if (($handle = fopen($fileName, "r")) == FALSE){
	die("Can't Open File");
}

$sql = "truncate case_information;";

if ($conn->query($sql) === TRUE) {
  echo "Table case_information cleared.<br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$row = 0;
if (($handle = fopen($fileName, "r")) !== FALSE) {
//if (($handle = fopen("VariablesAndDefinitionsTable.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 100000, ",")) !== FALSE) {
        $num = count($data);
		$row++;
        if($row == 1) continue;
			
		$sql = "INSERT INTO case_information (token, date, email, name, job, rating_supervisors, rating_subordinates, rating_peers, url)
		VALUES ('" . $data[1] . "', '" . $data[2] . "', '', '" . $data[0] . "', '" . $data[3] . "', '" . $data[4] . "', '" . $data[5] . "', '" . $data[6] . "', '" . generateRandomString() . "');";

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