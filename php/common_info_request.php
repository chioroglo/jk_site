<?php

  $servername = "localhost";
  $username = "root";
  $password = "";
  $db_name = "jk";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $db_name);

  // Check connection
  if ($conn->connect_error) {
    die("connection error , CODE: " . $conn->connect_error);
  }

  // perform request 
  $sql_request = "SELECT percentage_done_for_slider FROM jk.common_info;";

  $req = $conn->prepare($sql_request);
  $req->execute();
  $req->store_result();
  $req->bind_result($percentage);
  $req->fetch();
  $req->close();
  echo json_encode(array("stage" => $percentage));
?>