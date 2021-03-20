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
    function getUserDetails($username, $password): array
    {
        $result  = array("isloggedin" => false, "wrongInput" => true, "error" => '', 'disabled' => false);
        if (empty(trim($username))) {
            return $result;
        }
        try {
            $sql = "SELECT `customer_ID`, `password` , `status` from customer_info where customer_ID= ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $username);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $fetched_username = $row['customer_ID'];
            $fetched_password = $row['password'];
            $fetched_status = $row['status'];
            if ($fetched_status === 0) {
                $result['disabled'] = true;
                return $result;
            }
            $de_hashed = password_verify($password, $fetched_password);
            if ($fetched_username === $username && $de_hashed) {
                $_SESSION["login"] = $fetched_username;
                $result['isloggedin'] = true;
                $result['wrongInput'] = false;
            } else {
                $result['wrongInput'] = true;
            }
            return $result;
        } catch (Exception $err) {
            $result['error'] = $err->getMessage();
        }
        return $result;
    }
}
