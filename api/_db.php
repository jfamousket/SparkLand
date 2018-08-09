<?php

    class DBConfig {
        private $_host = 'localhost';
        private $_username = '';
        private $_password = '';
        private $_database = 'sparkland';

        protected $connection;
        public function __construct() {
            $this->connection = null;

            try {

                $this->connection = new mysqli($this->_host, $this->_username, $this->_password, $this->_database);
                if(!$this->connection) {
                    throw new Exception("Cannot connect to the database");
                    exit;
                }

            } catch (Exception $e) {

                echo "Connection Error:" . $e->getMessage();

            }

        return $this->connection;

    }
}

?>