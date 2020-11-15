<?php

#$fileName = $_GET['fileName'];
parse_str(implode('&', array_slice($argv, 1)), $_GET);
$fileName = $argv[1];

require("connect.php");

if (($handle = fopen("./Reporting Files/" . $fileName, "r")) == FALSE){
	die("Can't Open File");
}

$sql = "truncate text_response_values;";

if ($conn->query($sql) === TRUE) {
  echo "Table text_response_values cleared.<br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$row = 0;
if (($handle = fopen("./Reporting Files/" . $fileName, "r")) !== FALSE) {
//if (($handle = fopen("VariablesAndDefinitionsTable.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
		$row++;
        if($row == 1) continue;
			
		$sql = "INSERT INTO text_response_values (Question, Question_Subscale_or_Scale_Value, Avg_Aggregate_Description_Text_Response, Avg_Self_Comparison_Text_Response, Avg_Supervisor_Comparison_Text_Response, Avg_Subordinate_Comparison_Text_Response, Avg_Peer_Comparison_Text_Response, Coaching_Response)
		VALUES ('" . $data[0] . "', '" . $data[1] . "', '" . $data[2] . "', '" . $data[3] . "', '" . $data[4] . "', '" . $data[5] . "', '" . $data[6] . "', '" . $data[7] . "');";

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