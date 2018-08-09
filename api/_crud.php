<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Response-Type: application/json");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods, Authorization, Origin, X-Requested-With, Content-Type");

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
            print_r(error_get_last());
            if($result) return true;
            
            echo json_encode("Couldn't carry out request try again");
            
            $errorFile = fopen("error.txt", "w") or die(error_log(error_get_last(), 1, "jfamousket@gmail.com"));

            fwrite($errorFile, $this->connection->error);
            return false;            
        }
        
        public function escape_string($value) {
            $value = $this->clean_data($value);
            return $this->connection->real_escape_string($value);
        }
        public function getResult($query) {
            return $result = $this->connection->query($query);
        }
        private function clean_data($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
    }

?>
