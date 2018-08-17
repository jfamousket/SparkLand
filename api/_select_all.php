<?php
    require_once '_crud.php';

    $crud = new CRUD;

    $query = "SELECT * FROM item WHERE qty_in_stock != 0";

    $data = $crud->getData($query);

    if($data){
        echo json_encode($data);
    } else {
        
        echo json_encode(
            array('error' => 'No items Found')
        );
    }

?>