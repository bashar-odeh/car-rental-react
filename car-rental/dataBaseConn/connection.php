<?php
class Database
{
    private $host = 'localhost';
    private $db_name = 'carprojectreact';
    private $usernmae    = 'root';
    private $password = '';
    private $conn;
    public $eMessage;
    public function connect()
    {
        $this->conn = null;
        try {
            $this->eMessage = 'connected';
            $this->conn = new PDO("mysql:host=" . $this->host . ';dbname=' . $this->db_name, $this->usernmae, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $ex) {

            $this->eMessage = $ex->getMessage();
        }
        return $this->conn;
    }
}
