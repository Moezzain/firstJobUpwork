<?php

#$fileName = $_GET['fileName'];
parse_str(implode('&', array_slice($argv, 1)), $_GET);
$fileName = $argv[1];
$case_item = array("case_id", "item", "self_rating", "superior_rating", "subordinate_rating", "peer_rating", "avg_rating");
$items = array();

require("connect.php");

$sql = "truncate data_raw;";

if ($conn->query($sql) === TRUE) {
  echo "Table data_raw cleared.<br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

if (($handle = fopen("./Reporting Files/" . $fileName, "r")) == FALSE){
	die("Can't Open File");
}

$row = 0;
if (($handle = fopen("./Reporting Files/" . $fileName, "r")) !== FALSE) {
//if (($handle = fopen("VariablesAndDefinitionsTable.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 100000, ",")) !== FALSE) {
		$case_item[0] = $row;
        $num = count($data);
		$startcase_item = 7;
		if($row==0){
			for($x = 0; $x < 106; $x++){
				array_push($items, substr($data[$startcase_item + $x], 5));
			}
			$row++;
			continue;
		}
		for($x = 0; $x < 106; $x++){
			$case_item[1] = $items[$x];
			for ($y = 0; $y < 5; $y++) {
				//echo "The number is: " . $data[$startcase_item + $x + (106 * $y)] . " <br>";
				$case_item[2 + $y] = $data[$startcase_item + $x + (106 * $y)];
			}
				//echo $case_item[$z] . " ";
				$sql = "INSERT INTO data_raw (case_id, item, self_rating, superior_rating, subordinate_rating, peer_rating, avg_rating)
				VALUES ('" . $case_item[0] . "', '" . $case_item[1] . "', '"  . $case_item[2] .  "', '" . $case_item[3] . "', '" . $case_item[4] . "', '" . $case_item[5] . "', '" . $case_item[6] . "');";

				if ($conn->query($sql) === TRUE) {
				  echo "New record Case Number " . $case_item[0] . " Field " . $case_item[1]. " created successfully.<br>";
				} else {
				  echo "Error: " . $sql . "<br>" . $conn->error;
				}
				//echo "<br>";
		}
			$row++;
    }
    fclose($handle);
}

$conn->close();

?>