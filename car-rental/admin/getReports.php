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
    $admin->report_status = $_GET['status'];
    $response =  $admin->getReports();
    $data = array();
    if ($response->rowCount() > 0) {
        while ($row = $response->fetch(PDO::FETCH_ASSOC)) {
            $fetched = array(
                'report_id' => $row['report_id'],
                'customer_id' => $row['customer_id'],
                'full_name' => $row['full_name'],
                'car_id' => $row['car_id'],
                'message' => $row['message'],
                'email' => $row['email'],
                'status' => $row['status'],

            );
            array_push($data, $fetched);
        }
        print_r(json_encode($data));
    } else {
        print_r(json_encode(false));
    }
}
