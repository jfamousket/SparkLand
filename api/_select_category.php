<?php
    require_once '_crud.php';

    $crud = new CRUD;

    $query = "SELECT category FROM item";

    $data = $crud->getData($query);

    if($data){

        echo json_encode($data);
    }

?>