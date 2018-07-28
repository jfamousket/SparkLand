<?php
    class DBConfig {
        private $_host = 'localhost';
        private $_username = '';
        private $_password = '';
        private $_database = 'sparkland';

        protected $connection;
        public function __construct() {
            if(!isset($connection)) {
                $this->connection = new mysqli($this->_host, $this->_username, $this->_password, $this->_database);

                if(!$this->connection) {
                    echo "Cannot connect to the database server";
                    exit;
                }
            }
            return $this->connection;
        }

    }


?>