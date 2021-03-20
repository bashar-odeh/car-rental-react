<?php

session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/admin.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['admin'])) {

    $db = new Database();
    $conn = $db->connect();
    $admin = new Admin($conn);
    // 
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    //
    $admin->deal_id = $postData['deal_id'];
    $admin_response = $postData['admin_response'];
    $response =  $admin->handleRent($admin_response);
    print_r(json_encode(array('data' => $response)));
}
