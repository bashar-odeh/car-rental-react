<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['login'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    // 
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    // fill data
    $customer->customer_id = $_SESSION['login'];
    $customer->full_name = $postData['full_name'];
    $customer->phone = $postData['phone'];
    $customer->password = empty($postData['new_password']) ? "" :  password_hash($postData['new_password'], PASSWORD_DEFAULT);
    $customer->email = $postData['email'];
    // functions
    $response = $customer->updateCustomer();
    print_r(json_encode($response));
}
