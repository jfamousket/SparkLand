<?php

    require_once '_crud.php';

    $crud = new CRUD;
    $_POST = json_decode(file_get_contents("php://input"));

    
    $customerId = $_POST->data->customerId;
    $customerDetails = $_POST->data->customerDetails;

    try {
        $name = $customerDetails->name;
        $tel = $customerDetails->telephone;
        $res = $customerDetails->residence;

        $addCustomer = "INSERT INTO customer (cust_id, cust_name, tel, residence) 
                    VALUES ('$customerId', '$name', '$tel', '$res')";

        $query = $crud->execute($addCustomer);


    } 
    catch (Exception $e) {

        json_encode("Error: " . $e->getMessage());

    }

?>