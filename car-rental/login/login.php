<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/signin.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    // init data base and connection
    $db = new Database();
    $conn = $db->connect();
    // filter inputs
    $username = test_input($postData['username']);
    $password = test_input($postData['password']);

    // init signin obj
    $signin = new signin($conn);
    //check if match or not 
    $isloggedin = $signin->getUserDetails($username, $password);
    print_r(json_encode($isloggedin));
}
