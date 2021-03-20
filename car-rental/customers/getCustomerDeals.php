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
    $stmt = $customer->getCustomerDeals();
    $data = array();
    if ($stmt->rowCount() > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $fetched = array(
                'customer_id' => $row['customer_id'],
                'car_id' => $row['car_id'],
                'start_date' => $row['start_date'],
                'end_date' => $row['end_date'],
                'pickup_location' => $row['pickup_location'],
                'dropoff_location' => $row['dropoff_location'],
                'path' => $row['path'],
                'cost' => $row['cost'],
                'status' => $row['status'],
            );
            array_push($data, $fetched);
        }
        print_r(json_encode($data));
    } else {
        return false;
    }
}
