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
        
        private function logErrors($file) {
            $error = json_encode(array(
                        "error-number" => $this->connection->errno,
                        "error-message" => $this->connection->error,
                        "error-state" => $this->connection->sqlstate,
                    ));

            $errorFile = fopen('./errors/'.$file.".txt", "a+") or die(error_log($error, 1, "jfamousket@gmail.com"));
            fwrite($errorFile, $error . "\n\n");
            fclose($errorFile);
        }

        public function getData($query) {
            $result=$this->connection->query($query);
            if(!$result) {
                $this->logErrors('getDataErrors'.$this->connection->errno);
                return false;
            }

            $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
            return $rows;
        }

        public function execute($query) {
            $result=$this->connection->query($query);
            if(!$result){
                $this->logErrors('createDataErrors'.$this->connection->errno);
                return false;
            } 

            return true;                   
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
