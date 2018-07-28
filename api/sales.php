<?php

    require_once '_crud.php';

    $crud = new CRUD;
    $_POST = json_decode(file_get_contents("php://input"));

    
    $plateId = $_POST['id'];

    try {


    } 
    catch (Exception $e) {

        json_encode("Error: " . $e->getMessage());

    }

?>