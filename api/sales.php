<?php

    header("Access-Control-Allow-Methods: POST");

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

    function reduceQty($array, $crud) {
        foreach($array as $item=>$item_value) {
            $id = $item_value->it_id;
            $qty = $item_value->qty;

            $getItem = "UPDATE item SET qty_in_stock = (qty_in_stock - $qty) WHERE it_id = '$id'  LIMIT 1";
            $row = $crud->execute($getItem);

        }
    }
    
    $customerDetails = $_POST->data->customerDetails;

    $name = $crud->escape_string($customerDetails->name);
    $tel = $crud->escape_string($customerDetails->telephone);
    $res = $crud->escape_string($customerDetails->residence);

    $orderId = $_POST->data->orderId;
    $totalPrice = $_POST->data->orderDetails->total;
    $orderItems = $_POST->data->orderDetails->items;

    try {
        $it_ids = createArray($orderItems, 'it_id');
        $it_ids = implode(',', $it_ids);

        $qtys = createArray($orderItems, 'qty');
        $qtys = implode(',', $qtys);

        reduceQty($orderItems, $crud);

        $addSale = "INSERT INTO sales (sale_id, it_id, qty, total_price, cust_name, telephone, residence, date_of_sale) 
                    VALUES ('$orderId', '$it_ids', '$qtys', '$totalPrice', '$name', '$tel', '$res', NOW())";

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