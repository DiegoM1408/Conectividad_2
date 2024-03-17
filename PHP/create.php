<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "database-1.c920o00syb4q.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "Colombia123_";
$database = "users"; 
$conexion = mysqli_connect($servername, $username, $password, $database);

if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
} 

else {
    // echo "Conexión exitosa a la base de datos.";
    // $nombre = $_POST['nombre'];
    // // $fecha = $_POST['fecha'];
    // $telefono = $_POST['telefono'];
    // $correo = $_POST['email'];
    // $contraseña = $_POST['password'];
    // $sql = "INSERT * FROM user WHERE nombre = '$nombre' and telefono = '$telefono' and email = '$correo' and contraseña = '$contraseña'";
    // $query = mysqli_query($conexion, $sql); 
   
    //     echo "<script>alert('Usuario creado con éxito');</script>";

    echo "Conexión exitosa a la base de datos.";

    // Recibir datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['email'];
    $contraseña = $_POST['password'];

    // Crear la consulta de inserción
    $sql = "INSERT INTO user (nombre, telefono, email, contraseña) 
            VALUES ('$nombre', '$telefono', '$correo', '$contraseña')";

    // Ejecutar la consulta
    $query = mysqli_query($conexion, $sql);

    // Verificar si la inserción fue exitosa
    if ($query) {
        echo "<script>alert('Usuario creado con éxito');</script>";
    } else {
        // Si hay un error, mostrar un mensaje de error
        echo "Error al crear el usuario: " . mysqli_error($conexion);
    }


}
header("Location: ../index.html")

?>
