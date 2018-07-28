<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require_once '_db.php';

    class CRUD extends DBConfig {
        
        public function __construct()
        {
            parent::__construct();
        }
        public function getData($query) {
            $result=$this->connection->query($query);
            if(!$result) return false;

            $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
            return $rows;
        }

        public function execute($query) {
            $result=$this->connection->query($query);
            if($result==false) {
                echo "Cannot execute the command";
                return false;
            }
            else {
                return true;
            }
        }
        
        public function escape_string($value) {
            return $this->connection->real_escape_string($value);
        }
        public function getResult($query) {
            return $result = $this->connection->query($query);
        }
    }

?>
