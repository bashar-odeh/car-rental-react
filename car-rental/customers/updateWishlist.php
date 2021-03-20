<?php
session_start();
//
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
//
include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rowPostData = file_get_contents('Php://input');
    $postData = json_decode($rowPostData, true);

    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $type = $postData['type'];
    $customer->car_id = $postData['car_id'];
    $customer->customer_id = $_SESSION['login'];

    $respones = $customer->updateWishlist($type);

    print_r(json_encode($respones));
}
