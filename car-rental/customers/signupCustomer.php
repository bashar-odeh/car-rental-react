<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';
include_once '../testInput.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    $customer = new Customer($conn);

    $customer->customer_id = test_input($postData['customer_id']);
    $customer->password = password_hash(test_input($postData['password']), PASSWORD_DEFAULT);
    $customer->full_name = test_input($postData['full_name']);
    $customer->license = test_input($postData['license']);
    $customer->phone = test_input($postData['phone']);
    $customer->email = test_input($postData['email']);
    $customer->status = 1;
    $customer->register_date =  date("Y/m/d");
    $respone = $customer->signUpCustomer();
    print_r(json_encode($respone));
}
