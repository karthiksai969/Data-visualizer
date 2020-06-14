<?php
    error_reporting(0);
    session_start();
    $servername = "localhost";
    $username = "karthik";
    $password = "";
    $database="miniproject";

    $firstname = $_REQUEST["exampleFirstName"];
    $lastname = $_REQUEST["exampleLastName"];
    $email = $_REQUEST["exampleInputEmail"];
    $password1 = $_REQUEST["exampleInputPassword"];
    $repeatpassword = $_REQUEST["exampleRepeatPassword"];
// Create connection
    $conn = mysqli_connect($servername, $username, $password,$database);
    $message="";
    if (mysqli_connect_errno()) {
        $message="We apologize for the
        inconvenience as we
        were experiencing
        technical difficulties
        today (Server Down !! ). ";
        header("loaction:../register.php?msg=$message");
        exit();
    }
    elseif($conn)
    {
        $sql = "INSERT INTO registration(first_name,last_name,email,password) VALUES ('$firstname','$lastname','$email','$password1')";
        if (mysqli_query($conn, $sql)) {
        $message="Registration Successful !!!";
        header("location:../login.php?msg=$message");
        } else {
            
        $message="The provided E-mail is already linked to another account !!!!";
        session_start();
        $_SESSION['msg']=$message;
        header("location:../register.php?msg=$message");
                
        }
    
    
    }
    mysqli_close($conn);

?> 
