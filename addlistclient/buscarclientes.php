<?php
    include 'conexion.php';

    $cedula=$_POST['cedula'];
    if(!empty($cedula)){
        $sql = "SELECT * FROM clientes WHERE cedula LIKE '%$cedula%'";
        $res = mysqli_query($conn,$sql);
        $datos = json_encode(mysqli_fetch_all($res));
        echo ($datos);
    }else{
        $sql="SELECT * FROM clientes";
        $res = mysqli_query($conn,$sql);
        $datos = json_encode(mysqli_fetch_all($res));
        echo ($datos);
    }
?>