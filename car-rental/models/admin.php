<?php

class Admin
{
    //customer
    public $customer_id;
    public $password;
    public $full_name;
    public $license;
    public $age;
    public $phone;
    public $email;
    public $rating;
    public $register_date;
    public $status;
    public $payment_method;
    // deals
    public $deal_id;
    public $start_date;
    public $end_date;
    public $deal_status;
    //cars 
    public $car_id;
    public $manufacturer;
    public $model;
    public $car_status;
    public $car_rating;
    public $dealing_type;
    public $description;
    //
    public $report_status;
    public $report_id;
    //
    public $admin_id;
    public $admin_password;
    public $admin_status;




    //connection
    private $conn;
    function __construct($conn)
    {
        $this->conn = $conn;
    }
    function getAllCustomers()
    {
        try {
            $sql = "SELECT * FROM `customer_info` ";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);

            if ($stmt->execute()) return $stmt;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    function getAllCars()
    {
        try {
            $sql = "SELECT * FROM `car_info` ";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            if ($stmt->execute()) return $stmt;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    function getDeals()
    {
        $sql = "SELECT * FROM `deals` JOIN car_pic_style USING (car_style_id) join car_info USING (car_id)  WHERE deals.`status` = ? ";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(1, $this->deal_status);
        if ($stmt->execute()) {
            return $stmt;
        } else {
            return null;
        }
    }

    function handleRent($admin_response)
    {
        try {
            $sql = 'UPDATE `deals` SET `status` = ? WHERE `deal_id` = ?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $admin_response);
            $stmt->bindParam(2, $this->deal_id);
            if ($stmt->execute()) return true;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }

    function disableCustomer()
    {
        try {
            $sql = 'UPDATE `customer_info` set `status` = ? WHERE  `customer_id` = ? ';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->status);
            $stmt->bindParam(2, $this->customer_id);
            if ($stmt->execute()) return true;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }

    function disableCar()
    {

        try {
            $sql = 'UPDATE `car_info` set `status` = ? WHERE  `car_id` = ? ';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->car_status);
            $stmt->bindParam(2, $this->car_id);
            if ($stmt->execute())
                return true;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    function getReports()
    {
        try {

            $sql = "SELECT reports.* , customer_info.full_name ,customer_info.email FROM `reports` join customer_info using (customer_id) where reports.status = ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->report_status);
            if ($stmt->execute()) return $stmt;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    function updateReportStatus()
    {
        try {

            $sql = "UPDATE `reports` SET status = 1 WHERE report_id=?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->report_status);
            if ($stmt->execute()) return true;
        } catch (PDOException $err) {
            return $err->getMessage();
        }
    }
    public function signUpAdmin()
    {
        try {
            // first check if the customer exists or not
            $sql  = 'SELECT `id` FROM `admin` WHERE `id`=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->admin_id);
            $stmt->execute();
            if ($stmt->rowCount() !== 0) {
                return 'exists';
            }
            //
            $sql = 'INSERT INTO `admin`(`id`, `password`,`status`) VALUES (?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->admin_id);
            $stmt->bindParam(2, $this->admin_password);
            $stmt->bindParam(3, $this->admin_status);

            if ($stmt->execute()) return true;
        } catch (PDOEXCEPTION $err) {

            return $err->getMessage();
        }
    }
    function sendGCM($message)
    {

        $url = 'https://fcm.googleapis.com/fcm/send';


        $fields = array(
            'to' => 'dBoYaupiIHPc_tKX0fHyT3:APA91bHsEf08nkUI-GsP8LZl8a-Hhf1FONPQFVwN1LxAkNAt5uk-FZbaMECn_LVMgeklYCRQcYw5A30w4YBN2TD5jQ19bMc7-Fpk-5ZfPVjD6KvMql6QPtS4siaksDHLryId6a2vsaiG
            ',
            'data' => array(
                'body' => $message
            )
        );
        $fields = json_encode($fields);

        $headers = array(
            'Authorization: key=' . "AAAAjbQNtt0:APA91bFZGaz8edRh3gDcTdwzwwG_ywZGDtFOZRqDgabR0CFcB1yH-RPaYHXTZWrmofsricVXbEN1FTqaZVsdxOeO8oaXzeDt_MVxklFl97G5NHkt9ssIaxLcXagdK6eP5Rnv75f8Hmen",
            'Content-Type: application/json'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
}
