<?php
    
    // Variables de la conexion a la DB
  $host_name = 'db5014720409.hosting-data.io';
  $database = 'dbs12231557';
  $user_name = 'dbu672816';
  $password = 'Ekaitz2008!';

  $link = new mysqli($host_name, $user_name, $password, $database);

    // Comprobamos la conexion
    if($mysqli->connect_errno) {
        die("Fallo la conexion");
    } else {
        //echo "Conexion exitosa";
    }