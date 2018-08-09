<?php
    require_once '_crud.php';

    $crud = new CRUD;

    $query = "SELECT category FROM item";

    $data = $crud->getData($query);

    if($data){
        echo json_encode($data);
    }
    else {
        echo json_encode(
            array('message' => 'No Categories Found')
        );
    }

?>