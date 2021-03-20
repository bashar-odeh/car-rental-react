<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');


include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['login'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->customer_id = $_SESSION['login'];

    $data = $customer->getAllCustomerData();
    if ($data) {
        print_r(json_encode($data));
    } else {
        print_r(json_encode($data));
    }
}
