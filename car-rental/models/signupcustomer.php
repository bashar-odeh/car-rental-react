<?php
include_once '../dataBaseConn/connection.php';
include_once '../models/signupcustomer.php';
class signup
{
    public $customer_ID;
    public $password;
    public $full_name;
    public $license;
    public $age;
    public $phone;
    public $email;
    public $rating;
    public $register_date;
    public $status = 1;
    public $payment;
    private $conn;
    public $eMessage;
    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function signAcustomer()
    {

        $this->register_date = date("Y-m-d");

        $customer_ID = "";
        try {
            $sql = 'SELECT `customer_ID` FROM `customer_info` WHERE `customer_ID` = ? ';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_ID);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $customer_ID = $row['customer_ID'];
        } catch (PDOException $ex) {
            return $ex->getMessage();
        }

        if ($customer_ID === $this->customer_ID) {
            return 'exist';
        }

        try {
            $sql = 'INSERT INTO `customer_info`(`customer_ID`, `password`, `full_name`, `license`, `age`, `phone`, `email`, `rating`, `register_date`, `status`, `payment_method`) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_ID);
            $stmt->bindParam(2, $this->password);
            $stmt->bindParam(3, $this->full_name);
            $stmt->bindParam(4, $this->license);
            $stmt->bindParam(5, $this->age);
            $stmt->bindParam(6, $this->phone);
            $stmt->bindParam(7, $this->email);
            $stmt->bindParam(8, $this->rating);
            $stmt->bindParam(9, $this->register_date);
            $stmt->bindParam(10, $this->status);
            $stmt->bindParam(11, $this->payment);

            $stmt->execute();
            return 'added';
        } catch (PDOException $ex) {
            return $ex->getMessage();
        }
    }
}
