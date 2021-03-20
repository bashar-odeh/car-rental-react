<?php
session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';
include_once '../models/admin.php';
include_once '../testInput.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['login'])) {
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $admin = new Admin($conn);
    $customer->customer_id = $_SESSION['login'];
    $customer->car_id = $postData['car_id'];
    $customer->message = $postData['message'];
    // 0 is unread 1 
    $customer->report_status = 0;

    $response = $customer->sendReport();
    if ($response === true) {
        $admin->sendGCM('report');
    }
    print_r(json_encode($response));
}
