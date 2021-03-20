<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');


include_once '../dataBaseConn/connection.php';
include_once '../models/car.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $conn = $db->connect();
    $car = new Car($conn);
    //
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);
    //
    $car->car_id = $postData['car_id'];
    $car->customer_id = isset($_SESSION['login']) ? $_SESSION['login'] : false;
    $details = array();
    $styles = array();
    $wishlist = array();
    $corr = '';
    $response = $car->getSingleCar();

    if ($response) {
        if (isset($response['car_data'])) {

            $stmt = $response['car_data'];
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $details = array(
                'car_id' => $row['car_id'],
                'make' => $row['make'],
                'model' => $row['model'],
                'status' => $row['status'],
                'made_year' => $row['made_year'],
                'cost' => $row['cost'],
                'date' => $row['date'],
                'fuel' => $row['fuel'],
                'description' => $row['description'],

                'transition' => $row['transition'],
                'warranty' => $row['warranty']
            );
        }
        if (isset($response['car_styles'])) {
            $stmt = $response['car_styles'];
            if ($stmt->rowCount() > 0) {

                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $fetched = array(
                        'car_style_id' => $row['car_style_id'],
                        'car_id ' => $row['car_id'],
                        'path' => $row['path'],
                        'color' => $row['color'],

                    );
                    array_push($styles, $fetched);
                }
            }
        }
        if (isset($response['wishlist'])) {

            $stmt = $response['wishlist'];
            if ($stmt->rowCount() > 0) {
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $fetched = array(
                        'wishlist_id' => $row['wishlist_id'],
                    );
                    array_push($wishlist, $fetched);
                }
            }
        }
        print_r(json_encode(array('car_details' => $details, 'styles' => $styles, 'wishlist' => $wishlist)));
    } else {



        print_r(json_encode($response));
    }
}
