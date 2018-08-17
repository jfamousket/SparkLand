<?php
    require_once '_crud.php';

    $crud = new CRUD;

    $id = $_GET['id'];

    $query = "SELECT * FROM item WHERE it_id = '$id' AND qty_in_stock != 0 LIMIT 1";

    $data = $crud->getData($query);

    if($data){
        echo json_encode($data);
    }else {
        echo json_encode(array(
            "message" => "No item found"
        ));
    }
?>