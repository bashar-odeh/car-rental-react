<?php
session_start();
//
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
//
include_once '../dataBaseConn/connection.php';
include_once '../models/car.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rowPostData = file_get_contents('Php://input');
    $postData = json_decode($rowPostData, true);

    $db = new Database();
    $conn = $db->connect();
    $car = new Car($conn);

    $car->car_id = test_input($postData['car_id']);
    $car->make = test_input($postData['make']);
    $car->model = test_input($postData['model']);
    $car->status = strtolower(test_input($postData['status'])) === 'active' ? 1 : 0;
    $car->description = test_input($postData['description']);
    $car->made_year = test_input($postData['made_year']);
    $car->cost =  test_input($postData['cost']);
    $car->fuel = test_input($postData['fuel']);
    $car->transition = test_input($postData['transition']);
    $car->warranty = test_input($postData['warranty']);
    $respones = $car->updateCar();
    print_r(json_encode($respones));
}
