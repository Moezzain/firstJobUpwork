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
    while (($data = fgetcsv($handle, 100000000, ",")) !== FALSE) {
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
		$query1row = "";
		for($x = 0; $x < 106; $x++){
			$case_item[1] = $items[$x];
			for ($y = 0; $y < 5; $y++) {
				//echo "The number is: " . $data[$startcase_item + $x + (106 * $y)] . " <br>";
				$case_item[2 + $y] = $data[$startcase_item + $x + (106 * $y)];
			}
				//echo $case_item[$z] . " ";
				$sql = "INSERT INTO data_raw (case_id, item, self_rating, superior_rating, subordinate_rating, peer_rating, avg_rating)
				VALUES ('" . $case_item[0] . "', '" . $case_item[1] . "', '"  . $case_item[2] .  "', '" . $case_item[3] . "', '" . $case_item[4] . "', '" . $case_item[5] . "', '" . $case_item[6] . "');";
				
				$query1row = $query1row . $sql . " ";
				
				/*

				if ($conn->query($sql) === TRUE) {
				  echo "New record Case Number " . $case_item[0] . " Field " . $case_item[1]. " created successfully.<br>";
				} else {
				  echo "Error: " . $sql . "<br>" . $conn->error;
				}
				
				*/
				//echo "<br>";
		}
		echo $query1row . "<br><br>";
		if ($conn->multi_query($query1row) === TRUE) {
				  echo "New record Case Number " . $case_item[0] . " created successfully.<br><br><br>";
				} else {
				  echo "Error: " . $sql . "<br><br>" . $conn->error . "<br><br><br>";
				}
		do {
			if ($res = $conn->store_result()) {
				var_dump($res->fetch_all(MYSQLI_ASSOC));
				$res->free();
			}
		} while ($conn->more_results() && $conn->next_result());
			$row++;
			//sleep(10);
    }
    fclose($handle);
}

$conn->close();

?>