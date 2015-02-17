<?php
//connecting to php configuration
include("config.php");
 


//connecting to the database..
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("appointment")or die("cannot select DB");

//collects the data from fields
if(isset($_POST['select-choice-8'])){ $treatment = $_POST['select-choice-8'];}
if(isset($_POST['time'])){ $time = $_POST['time'];}
if(isset($_POST['name'])){ $name = $_POST['name'];}
if(isset($_POST['email'])){ $email = $_POST['email'];  }
if(isset($_POST['age'])){ $age = $_POST['age'];  }
if(isset($_POST['phone'])){ $phone = $_POST['phone'];  }


echo"Thank you!";

?>