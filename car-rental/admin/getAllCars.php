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

    $response =  $admin->getAllCars();
    $data = array();
    if ($response->rowCount() > 0) {
        while ($row = $response->fetch(PDO::FETCH_ASSOC)) {
            $fetched = array(
                'car_id' => $row['car_id'],
                'make' => $row['make'],
                'model' => $row['model'],
                'status' => $row['status'],
                'made_year' => $row['made_year'],
                'cost' => $row['cost'],
                'date' => $row['date'],
                'fuel' => $row['fuel'],
                'transition' => $row['transition'],
                'warranty' => $row['warranty']
            );
            array_push($data, $fetched);
        }
        print_r(json_encode($data));
        exit();
    } else {
        print_r(json_encode(false));
        exit();
    }
}
