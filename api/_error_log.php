<?php

    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: text/plain");

    require_once '_crud.php';
    $crud = new CRUD;
    $_POST = file_get_contents("php://input");

    $errorFile = fopen('./errors/frontEndErrors.txt','a+')or die(error_log($_POST, 1, "jfamousket@gmail.com"));
    fwrite($errorFile, $_POST);
    fclose($errorFile);

    echo json_encode("An error occured but it has been reported. Try reloading the page");
    return;

?>