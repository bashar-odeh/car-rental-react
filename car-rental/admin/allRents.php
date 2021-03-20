<?php

session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/admin.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $db = new Database();
    $conn = $db->connect();
    $admin = new Admin($conn);
    // 
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    //
    $admin->deal_status = $_GET['type'];
    $response = $admin->getDeals();
    $data = array();
    if ($response->rowCount() > 0) {
        while ($row = $response->fetch(PDO::FETCH_ASSOC)) {
            $fetched = array(
                "deal_id" => $row["deal_id"],
                "customer_id" => $row["customer_id"],
                "car_id" => $row["car_style_id"],
                "make" => $row["make"],
                "car_style_id" => $row["car_style_id"],
                "start_date" => $row["start_date"],
                "end_date" => $row["end_date"],
                "pickup_location" => $row["pickup_location"],
                "dropoff_location" => $row["dropoff_location"],
                "cost" => $row["cost"],
            );
            array_push($data, $fetched);
        }
        print_r(json_encode($data));
    } else {
        print_r(json_encode(false));
    }
}
