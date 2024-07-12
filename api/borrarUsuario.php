<?php

/*    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $json = file_get_contents("php://input");

    $objEmpleado = json_decode($json);

    //$sql = "UPDATE usuarios SET usuario='$objEmpleado->usuario', contrasena='$objEmpleado->contrasena', email='$objEmpleado->email' WHERE idUsuario='$objEmpleado->idUsuario'";
    $sql = "DELETE FROM usuarios WHERE idUsuario='$objId->idUsuario'";
    
    $query = $link->query($sql);

    $jsonRespuesta = array('msg' => 'OK' + idUsuario);
    echo json_encode($jsonRespuesta);*/

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $json = file_get_contents("php://input");
    
    $objEmpleado = json_decode($json);

    $sql = "DELETE FROM usuarios WHERE idUsuario = $objEmpleado->idUsuario";
    
    if ($link->query($sql) === TRUE) {
        //echo "New record created successfully";
        $jsonRespuesta = array('msg' => 'OK');
        echo json_encode($jsonRespuesta);
      } else {
        echo "Error: " . $sql . "<br>" . $link->error;
      }

     // $jsonRespuesta = array('msg' => $sql);
     // echo json_encode($jsonRespuesta);