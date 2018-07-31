<?php

    require_once '_crud.php';

    $crud = new CRUD;
    $_POST = json_decode(file_get_contents("php://input"));


    function createArray($array, $value) {
        $arr = [];
        foreach($array as $item=>$item_value) {
            array_push($arr, $item_value->$value);
        }
        return $arr;
    }
    $orderId = $_POST->data->orderId;
    $customerId = $_POST->data->customerId;
    $orderItems = $_POST->data->orderDetails->items;

    try {
        $it_ids = createArray($orderItems, 'it_id');
        $it_ids = implode(',', $it_ids);

        $qtys = createArray($orderItems, 'qty');
        $qtys = implode(',', $qtys);

        $addSale = "INSERT INTO sales (sale_id, it_id, qty, cust_id, date_of_sale) 
                    VALUES ('$orderId', '$it_ids', '$qtys', '$customerId', NOW())";

        $query = $crud->execute($addSale);

        if($query) {
            echo(json_encode("Order has been placed"));
            return;
        }

        throw new Exception("Couldn't place order error");

        echo json_encode("Couldn't place order please try again");
        return;

    } 
    catch (Exception $e) {

        return json_encode("Error: " . $e->getMessage());

    }

?>