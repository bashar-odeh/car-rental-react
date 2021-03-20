
<?php

session_start();

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['login'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->customer_id = $_SESSION['login'];
    $stmt = $customer->getWishlist();
    $data = array();
    if ($stmt !== false) {
        if ($stmt->rowCount() > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $fetched = array(
                    'customer' => $row['customer_id'],
                    'car_id' => $row['car_id'],
                    'make' => $row['make'],
                    'model' => $row['model'],
                    'cost' => $row['cost'],
                    'path' => $row['path'],
                );
                array_push($data, $fetched);
            }

            print_r(json_encode($data));
        } else {
            print_r(json_encode(false));
        }
    } else {
        print_r(json_encode(false));
    }
}
