<?php

class Car
{
    private $conn;

    public $car_id;
    public $make;
    public $model;
    public $status;
    public $made_year;
    public $description;
    public $fuel;
    public $engine;
    public $horsepower;
    public $transition;
    public $doors;
    public $interior_color;
    public $date;
    public $cost;
    public $warranty;
    // style
    public $path;
    public $color;
    public $customer_id;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function signupCar()
    {

        // check if car is already exists 

        try {
            $sql = 'SELECT `car_id` FROM `car_info` WHERE car_id=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_id);
            $stmt->execute();
            $num = $stmt->rowCount();
            if ($num === 1) {
                return 'exist';
            }
            $sql = 'INSERT INTO `car_info`(`car_id`, `make`, `model` ,`status`,`description`, `made_year`, `cost`,`date`,`fuel`,`transition`,`warranty`) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_id);
            $stmt->bindParam(2, $this->make);
            $stmt->bindParam(3, $this->model);
            $stmt->bindParam(4, $this->status);
            $stmt->bindParam(5, $this->description);
            $stmt->bindParam(6, $this->made_year);
            $stmt->bindParam(7, $this->cost);
            $stmt->bindParam(8, $this->date);
            $stmt->bindParam(9, $this->fuel);
            $stmt->bindParam(10, $this->transition);
            $stmt->bindParam(11, $this->warranty);
            if ($stmt->execute()) {
                return true;
            }
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }


    function storeStyles()
    {
        try {
            $sql = 'INSERT INTO `car_pic_style`(`car_id`, `path`, `color`) VALUES (?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_id);
            $stmt->bindParam(2, $this->path);
            $stmt->bindParam(3, $this->color);
            $stmt->execute();
            return true;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
    function getAllCarsGallery()
    {
        try {
            $sql = 'SELECT car_info.* , car_pic_style.* from car_info join car_pic_style using (car_id)  GROUP BY (car_info.car_id) HAVING car_info.status = 1';
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
    function top9()
    {
        try {
            $sql = 'SELECT car_info.* , car_pic_style.* from car_info join car_pic_style using (car_id)  GROUP BY (car_info.car_id) HAVING car_info.status = 1';
            $stmt = $this->conn->prepare($sql);
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $ex) {
            return $ex->getMessage();
        }
    }

    function getRandomCars()
    {
        $sql = "SELECT * FROM car_info WHERE `status` = 1 ORDER BY RAND() LIMIT 6";;
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return false;
        }
    }
    function getSingleCar()
    {
        $res = array();
        try {
            $sql = 'SELECT *  from car_info WHERE car_id = ? ';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_id);
            if ($stmt->execute()) {
                $res['car_data'] = $stmt;
            } else {
                $res['error'] = false;
                die();
            }
            $sql = 'SELECT * FROM `car_pic_style` WHERE   car_id = ? and car_style_id not in (SELECT car_style_id from deals where deals.status != "declined" ) 
            ';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_id);
            if ($stmt->execute()) {
                $res['car_styles'] = $stmt;
            } else {
                $res['error'] = false;
                die();
            }
            if ($this->customer_id !== false) {
                $sql = 'SELECT * FROM `wishtlist` WHERE car_id=? and customer_id = ?';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->car_id);
                $stmt->bindParam(2, $this->customer_id);
                if ($stmt->execute()) {
                    $res['wishlist'] = $stmt;
                } else {
                    $res['error'] = false;
                    die();
                }
            }

            return $res;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }

    function getSingleCarColors()
    {
        $sql = 'SELECT * FROM `car_pic_style` WHERE `car_id` = ?';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(1, $this->car_id);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return false;
        }
    }
    function getRelated()
    {
        $sql = 'SELECT * FROM `car_info` WHERE `manufacturer` = ? AND `car_id`!=? LIMIT 3';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(1, $this->manufacturer);
        $stmt->bindParam(2, $this->car_id);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return false;
        }
    }

    function getAllColors()
    {
        $sql = 'SELECT color FROM `car_pic_style` GROUP BY color';
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return false;
        }
    }


    function filter($sql_cont)
    {
        $sql = "SELECT * FROM `car_info` JOIN car_pic_style USING(car_id) WHERE $sql_cont GROUP by `car_id` ";
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return false;
        }
    }

    function updateCar()
    {
        $sql = 'UPDATE `car_info` SET `make`=?,`model`=?,`status`=?,`description`=? ,`cost`=?,`fuel`=?,`transition`=? ,`warranty`=? WHERE  `car_id`=?';
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(1, $this->make);
        $stmt->bindParam(2, $this->model);
        $stmt->bindParam(3, $this->status);
        $stmt->bindParam(4, $this->description);
        $stmt->bindParam(5, $this->cost);
        $stmt->bindParam(6, $this->fuel);
        $stmt->bindParam(7, $this->transition);
        $stmt->bindParam(8, $this->warranty);
        $stmt->bindParam(9, $this->car_id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
