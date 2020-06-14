<?php
   error_reporting(0);
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['InputEmail']);
      $mypassword = mysqli_real_escape_string($db,$_POST['InputPassword']); 
      
      $sql = "SELECT id FROM registration WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $count = mysqli_num_rows($result);
      echo $count;
     
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['email'] = $myusername;
         header("location:../index.php?user=$myusername");
      }else {
         $error = "Your Login Name or Password is invalid";
         header("location:../login.php?error=$error");
      }
   }
    mysqli_close($conn);

?> 
