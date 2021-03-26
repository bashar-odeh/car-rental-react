<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === "GET" && isset($_SESSION['admin'])) {

    print_r(json_encode(true));
} else {
    print_r(json_encode(false));
}
