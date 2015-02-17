
 <?php
include("config.php");

// Connect to server and select the databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");


if(isset($_GET['name'])){ $name = $_GET['name'];  } 
if(isset($_GET['pass'])){ $pass = $_GET['pass']; } 
 


//$name = $_GET['name']; if(!isset($name))$name='';
//$pass = $_GET['pass']; if(!isset($pass))$pass='';



    //Once you get the values of the parameters do whatever you need to...perhaps connect to a database running on the local machine
   $continued = mysql_connect("localhost","root","");
            if ( $continued) {
			//Obviously the next thing to do would be to run queries against the database and send the response
			//echo ("Connection is succeed! ");
                 // Mysql_num_row is counting table row
			
			// username and password sent from in login 
			$db_selected = mysql_select_db("user",$continued);

		

	$sql="SELECT * FROM user WHERE name='$name' and pass='$pass'";


$result=mysql_query($sql);

			//echo "result ";
			$count=mysql_num_rows($result);
			//echo $count;
			


            }
			else{
			
			echo 'Error: Could not connect to database.  Please try again later.';
			}
if($count=="1"){
//echo "ok!!!";
// Register $name, $pass and redirect to file "login_success.php"
$_SESSION['name'] = $name;
$_SESSION['pass'] = $pass; 
header( "Location:main.html" ) ; exit ;

}
else {
echo "Wrong Username or Password";

}	
		
?>