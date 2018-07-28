<?php
    require_once '_crud.php';

    $crud = new CRUD;

    $data = json_decode(file_get_contents("php://input"));

    $query = "SELECT * FROM item WHERE it_id = '$data->id' LIMIT 1";

    $data = $crud->getData($query);

    if($data){
        echo json_encode($data);
    }
?>