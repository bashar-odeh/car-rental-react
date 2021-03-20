<?php

session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/admin.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $db = new Database();
    $conn = $db->connect();
    $admin = new Admin($conn);
    // 
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    //
    $admin->report_status = $postData['report_id'];
    $response =  $admin->updateReportStatus();
    print_r(json_encode($response));
}
