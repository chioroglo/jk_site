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
  $sql_request = "SELECT * from jk.plots WHERE plotID = " . $_GET['id_request'];
  
  $req = $conn->prepare($sql_request);
  $req->execute();
  $req->store_result();
  $req->bind_result($plotID, $plot_area, $house_area, $adress, $price, $isBought);
  $req->fetch();
  $req->close();
  echo json_encode(array( "plotID" => $plotID , "plot_area" => $plot_area , "house_area" => $house_area , "adress" => $adress , "price" => $price , "isBought" => $isBought));
?>