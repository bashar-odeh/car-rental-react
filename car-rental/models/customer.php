<?php

class Customer
{
    public $customer_id;
    public $password;
    public $full_name;
    public $license;
    public $age;
    public $phone;
    public $email;
    public $register_date;
    public $status;
    //
    public $start_date;
    public $end_date;
    public $deal_status;
    public $car_style_id;
    public $car_id;
    public $make;
    public $model;
    public $deal_cost;
    public $pick_up;
    public $drop_off;
    //
    public $message;
    public $report_status;
    private $conn;




    function __construct($conn)
    {
        $this->conn = $conn;
    }

    public  function getAllCustomerData()
    {
        $data = array();
        try {
            $sql = "SELECT * FROM `customer_info`  WHERE customer_id = ? ";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            if ($stmt->execute()) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $data['customer_id'] = $row['customer_id'];
                $data['full_name'] = $row['full_name'];
                $data['license'] = $row['license'];
                $data['email'] = $row['email'];
                $data['phone'] = $row['phone'];
                $data['register_date'] = $row['register_date'];
                $data['status'] = $row['status'];
                return $data;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return $data['error'] = 'false';
        }
    }

    public function signUpCustomer()
    {
        try {
            // first check if the customer exists or not
            $sql  = 'SELECT `customer_id` FROM `customer_info` WHERE `customer_id`=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->execute();
            if ($stmt->rowCount() !== 0) {
                return 'exists';
            }
            //
            $sql = 'INSERT INTO `customer_info`(`customer_id`, `password`, `full_name`, `license`, `phone`, `email`, `register_date`, `status`) VALUES (?,?,?,?,?,?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->password);
            $stmt->bindParam(3, $this->full_name);
            $stmt->bindParam(4, $this->license);
            $stmt->bindParam(5, $this->phone);
            $stmt->bindParam(6, $this->email);
            $stmt->bindParam(7, $this->register_date);
            $stmt->bindParam(8, $this->status);

            if ($stmt->execute()) return true;
        } catch (PDOEXCEPTION $err) {

            return $err->getMessage();
        }
    }
    public function getWishlist()
    {
        try {
            $sql = 'SELECT * FROM wishtlist JOIN car_info USING (car_id) join customer_info using(customer_id)  join car_pic_style using(car_id) WHERE customer_info.customer_id = ?   GROUP BY car_info.car_id having car_info.status=1';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            return false;
        }
    }

    function updateWishlist($type)
    {
        try {
            if ($type === 'add') {
                $sql = 'INSERT INTO `wishtlist`(`customer_id`, `car_id`) VALUES (?,?)';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->customer_id);
                $stmt->bindParam(2, $this->car_id);
                if ($stmt->execute()) return true;
            } else {
                $sql = 'DELETE FROM `wishtlist` WHERE car_id=? and customer_id=?';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->car_id);
                $stmt->bindParam(2, $this->customer_id);
                if ($stmt->execute()) return true;
            }
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }

    function updateCustomer()
    {

        try {
            if (!empty($this->password)) {
                $sql = 'UPDATE `customer_info` SET `full_name`=?,`phone`=?,`email`=?,`password`=?  where customer_id = ? ';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->full_name);
                $stmt->bindParam(2, $this->phone);
                $stmt->bindParam(3, $this->email);
                $stmt->bindParam(4, $this->password);
                $stmt->bindParam(5, $this->customer_id);
            } else {
                $sql = 'UPDATE `customer_info` SET `full_name`=?,`phone`=?,`email`=? where customer_id = ? ';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->full_name);
                $stmt->bindParam(2, $this->phone);
                $stmt->bindParam(3, $this->email);
                $stmt->bindParam(4, $this->customer_id);
            }

            if ($stmt->execute()) {
                return true;;
            } else {
                return false;
            }
        } catch (PDOEXCEPTION $err) {
            return $err->getMessage();
        }
    }

    function rentCar()
    {
        try {
            $sql = 'INSERT INTO `deals`(`customer_id`, `car_style_id`, `start_date`, `end_date`, `status`, `cost`, `pickup_location`, `dropoff_location`) VALUES (?,?,?,?,?,?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->car_style_id);
            $stmt->bindParam(3, $this->start_date);
            $stmt->bindParam(4, $this->end_date);
            $stmt->bindParam(5, $this->deal_status);
            $stmt->bindParam(6, $this->deal_cost);
            $stmt->bindParam(7, $this->pick_up);
            $stmt->bindParam(8, $this->drop_off);
            if ($stmt->execute())   return true;
        } catch (PDOEXCEPTION $err) {
            return $err->getMessage();
        }
    }


    function getCustomerDeals()
    {

        try {
            $sql = 'SELECT customer_id,car_id,start_date,end_date,pickup_location,dropoff_location,color,path,cost,deals.status FROM `deals` join customer_info using (customer_id) join car_pic_style using (car_style_id)  
            where customer_id=?';

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);

            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    function sendReport()
    {

        try {
            $sql = 'INSERT INTO `reports`( `customer_id`, `car_id`, `message`, `status`) VALUES (?,?,?,?)';

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->car_id);
            $stmt->bindParam(3, $this->message);
            $stmt->bindParam(4, $this->report_status);

            if ($stmt->execute()) {
                return true;
            }
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
}
