<?php
header('content-type: application/json');
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME','karthik');
define('DB_PASSWORD','');
define('DB_NAME','miniproject');
$mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
if(!$mysqli){
    die("connection failed:".$mysqli->error);
}
$query = sprintf("select sum(maxmarks) from mid2maxmarks");
$result = $mysqli->query($query);
$data = array();
foreach($result as $row){
    $data[]=$row;
}
$result->close();
$mysqli->close();
print json_encode($data);
?> 

