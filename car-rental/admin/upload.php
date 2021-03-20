<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../models/car.php';
include_once '../dataBaseConn/connection.php';
session_start();
$error = "";
$error_main = "";
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $rawPostBody = file_get_contents('php://input');
    $postData = json_decode($rawPostBody, true);

    $db = new Database();
    $conn = $db->connect();
    $car = new Car($conn);

    $allowed = array('jpg', 'jpeg', 'png', 'gif');

    $files = array();
    //to get colors
    $files = array();
    foreach ($_FILES as  $value) {
        array_push($files, $value);
    }
    $arr = array_keys($_FILES);

    $filesCount = count($_FILES);

    for ($i = 0; $i < $filesCount; $i++) {
        $file_size = $files[$i]['size'];
        $file_error = $files[$i]['error'];

        if ($file_error === 0) {
            if ($file_size > 10000000) {
                $error = 'file too large';
                print_r(json_encode($response));
                die();
            } else {
                $file_name = $files[$i]['name'];
                $file_ext = strtolower(explode(".", $file_name)[1]);
                if (in_array($file_ext, $allowed)) {
                    $file_unique_name = uniqid('', true) . '.' . $file_ext;
                    $file_dist = 'uploaded/' . $file_unique_name;
                    $file_temp = $files[$i]['tmp_name'];
                    move_uploaded_file($file_temp,  $file_dist);

                    $car->car_id = $_POST['car_id'];
                    $car->path = $file_dist;
                    $car->color = $arr[$i];
                    $response = $car->storeStyles();
                } else {
                    $error = 'wrong file type only jbg , png and jbeg are allowed';
                    print_r(json_encode($$error));
                    die();
                }
            }
        } else {
            $error = 'an error occured';
            print_r(json_encode($$error));
            die();
        }
    }
    print_r(json_encode(true));
}
