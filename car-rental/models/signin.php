<?php
session_start();

include_once '../dataBaseConn/connection.php';
class signin
{
    private $conn;
    function __construct($conn)
    {
        $this->conn = $conn;
    }
    function getUserDetails($username, $password)
    {
        $result = '';
        if (empty(trim($username))) {
            $result = 'empty';
            return $result;
        }
        try {
            $sql = "SELECT `customer_id`, `password` , `status` from customer_info where customer_id= ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $username);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $fetched_username = $row['customer_id'];
            $fetched_password = $row['password'];
            $fetched_status = $row['status'];
            if ($fetched_status === 0) {
                $result = 'disabled';
                return $result;
            }
            $de_hashed = password_verify($password, $fetched_password);
            if ($fetched_username === $username && $de_hashed) {
                $_SESSION["login"] = $fetched_username;
                $result = 'sucess';
            } else {
                $result = 'wrong';
            }
            return $result;
        } catch (Exception $err) {
            $result = $err->getMessage();
        }
        return $result;
    }
    function adminLogin($username, $password)
    {
        $result = '';
        if (empty(trim($username))) {
            $result = 'empty';
            return $result;
        }
        try {
            $sql = "SELECT * FROM `admin` WHERE   id= ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $username);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $fetched_username = $row['id'];
            $fetched_password = $row['password'];
            $fetched_status = $row['status'];
            if ($fetched_status === 0) {
                $result = 'disabled';
                return $result;
            }
            $de_hashed = password_verify($password, $fetched_password);
            if ($fetched_username === $username && $de_hashed) {
                $_SESSION["admin"] = $fetched_username;
                $result = 'sucess';
            } else {
                $result = 'wrong';
            }
            return $result;
        } catch (Exception $err) {
            $result = $err->getMessage();
        }
        return $result;
    }
}
