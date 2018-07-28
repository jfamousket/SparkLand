<?php


    include '_crud.php';
    include '_validate.class.php';

    $crud = new CRUD();

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)) {

        if(filter_var($data->email, FILTER_VALIDATE_EMAIL)) {

            echo json_encode($data);
        } else {
    }
    
    }
    else{
        echo 'no data';
    }
?>