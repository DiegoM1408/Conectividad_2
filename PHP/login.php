<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "database-2.clkwscwgub55.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "Colombia123_";
$database = "users"; 
$conexion = mysqli_connect($servername, $username, $password, $database);

if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
} 

else {
    echo "Conexión exitosa a la base de datos.";
    // $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $contraseña = $_POST['password'];
    $sql = "SELECT * FROM user WHERE email = '$correo' and contraseña = '$contraseña'";
    $query = mysqli_query($conexion, $sql); 
    if(mysqli_num_rows($query) > 0){
        while($row = mysqli_fetch_assoc($query)){
            $_SESSION['user'] = $row['email'];
            $_SESSION['name'] = $row['nombre'];
        }
    }
    else{
        echo "<script>alert('Usuario o contraseña incorrectos');</script>";
     }   
}
header("Location: ../index.html") 

// Obtener los datos del formulario

// Conectarse a la base de datos (asumiendo que ya tienes una conexión establecida)

// Consulta para verificar las credenciales del usuario
// $query = "SELECT * FROM users WHERE nombre = '$nombre'";
// $resultado = mysqli_query($conexion, $sql);

// if ($resultado) {
//     if (mysqli_num_rows($resultado) > 0) {
//         // Si se encuentra un usuario con las credenciales proporcionadas, la autenticación es exitosa
//         echo "success";
//     } else {
//         // Si no se encuentra ningún usuario, las credenciales son incorrectas
//         echo "Credenciales incorrectas";
//     }
// } else {
//     // Si hay algún error en la consulta SQL
//     echo "Error de consulta: " . mysqli_error($conexion);
// }

// Cerrar la conexión a la base de datos si es necesario

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// session_start();
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// $servername = "localhost";
// $username = "root";
// $password = "";
// $database = "users"; 
// $conexion = mysqli_connect($servername, $username, $password, $database);

// if (!$conexion) {
//     die("Error al conectar a la base de datos: " . mysqli_connect_error());
// } 

// else {
//     // Conexión exitosa a la base de datos
//     $correo = $_POST['email'];
//     $contraseña = $_POST['password'];
//     $sql = "SELECT * FROM user WHERE email = '$correo' and contraseña = '$contraseña'";
//     $query = mysqli_query($conexion, $sql); 
//     if(mysqli_num_rows($query) > 0){
//         // Usuario autenticado, guardar información en la sesión
//         while($row = mysqli_fetch_assoc($query)){
//             $_SESSION['user'] = $row['email'];
//             $_SESSION['name'] = $row['nombre'];
//         }
//         // Mostrar el botón de cerrar sesión
//         echo '<script>$("#exit").show();</script>';
//     }
//     else{
//         // Usuario no autenticado, mostrar mensaje de error
//         echo "<script>alert('Usuario o contraseña incorrectos');</script>";
//     }   
// }

// // Redireccionar a la página principal
// header("Location: ../index.html");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// session_start();
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// $servername = "localhost";
// $username = "root";
// $password = "";
// $database = "users"; 
// $conexion = mysqli_connect($servername, $username, $password, $database);

// if (!$conexion) {
//     die("Error al conectar a la base de datos: " . mysqli_connect_error());
// } 

// else {
//     // Conexión exitosa a la base de datos
//     $correo = $_POST['email'];
//     $contraseña = $_POST['password'];
//     $sql = "SELECT * FROM user WHERE email = '$correo' and contraseña = '$contraseña'";
//     $query = mysqli_query($conexion, $sql); 
//     if(mysqli_num_rows($query) > 0){
//         // Usuario autenticado, guardar información en la sesión
//         while($row = mysqli_fetch_assoc($query)){
//             $_SESSION['user'] = $row['email'];
//             $_SESSION['name'] = $row['nombre'];
//         }
//         // Mostrar el botón de cerrar sesión
//         echo '<script>$("#exit").show();</script>';
//     }
//     else{
//         // Usuario no autenticado, mostrar mensaje de error
//         echo "<script>alert('Usuario o contraseña incorrectos');</script>";
//     }   

//     // Redireccionar a la página principal
//     header("Location: ../index.html");
// }


?>
