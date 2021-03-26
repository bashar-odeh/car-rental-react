<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/admin.php';
include_once '../testInput.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $conn = $db->connect();
    $admin = new Admin($conn);
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);

    $admin->admin_id = test_input($postData['admin_id']);
    $admin->admin_password = password_hash(test_input($postData['password']), PASSWORD_DEFAULT);
    $admin->admin_status = 0;

    $respone = $admin->signupAdmin();
    print_r(json_encode($respone));
}
