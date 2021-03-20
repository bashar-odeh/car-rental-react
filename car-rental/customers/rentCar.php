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
    $customer->car_style_id = $postData['car_style_id'];
    $customer->start_date = $postData['start_date'];
    $customer->end_date = $postData['end_date'];
    $customer->pick_up = $postData['pick_up'];
    $customer->drop_off = $postData['drop_off'];
    $customer->deal_cost = $postData['cost'];
    $customer->deal_status = 'not';
    $response = $customer->rentCar();
    if ($response === true) {
        $admin->sendGCM('REQ');
    }
    print_r(json_encode($response));
}
