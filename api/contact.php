<?php

    header("Access-Control-Allow-Methods: POST");

    require_once '_crud.php';

    $crud = new CRUD;
    $_POST = json_decode(file_get_contents("php://input"));    
    $data = $_POST->data;

    $email = filter_var($data->email, FILTER_VALIDATE_EMAIL);
    $street = $crud->escape_string($data->location);
    $message = $crud->escape_string($data->message);
    $phone = $crud->escape_string($data->number);
    $dsex = $crud->escape_string($data->name->sex);
    $dname = $crud->escape_string($data->name->fullname);
    $name = $dsex . ' ' . $dname;

    try {

        $addMessage = "INSERT INTO contact (name, email, street, phone, message, time_stamp) 
                    VALUES ('$name', '$email', '$street', '$phone', '$message', NOW())";

        $query = $crud->execute($addMessage);

        if($query) {
            echo(json_encode("Message has been sent we'll get back to you shortly"));
            return;
        }

        throw new Exception("Couldn't add new message error");
        http_response_code(400);

        echo (json_encode("Couldn't send request message try again"));
        return;

    } 
    catch (Exception $e) {

        return json_encode("Error: " . $e->getMessage());

    }

?>