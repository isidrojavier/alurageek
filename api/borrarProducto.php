<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $json = file_get_contents("php://input");
    
    $objProducto = json_decode($json);

    $sql = "DELETE FROM productos WHERE idproducto = $objProducto->idproducto";
    
    if ($link->query($sql) === TRUE) {
        //echo "New record created successfully";
        $jsonRespuesta = array('msg' => 'OK');
        echo json_encode($jsonRespuesta);
      } else {
        echo "Error: " . $sql . "<br>" . $link->error;
      }

     // $jsonRespuesta = array('msg' => $sql);
     // echo json_encode($jsonRespuesta);