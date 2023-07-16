<?php
        $servername = 'localhost';
        $database = "mydb";
        $username = "root";
        $password = "";

        $conn =  mysqli_connect($servername, $username,$password, $database);
        
        //  check connection
        if (!$conn) {
            die('Connection failed: ' .mysqli_connect_error());
        }
        // insert value
        $name = $_POST['name'];
        $email = $_POST['email'];
        $feedback = $_POST['feedback'];

    

        $sql = "INSERT INTO table2 (name, email, feedback) VALUES ('$name', '$email', '$feedback')";

        if (mysqli_query($conn , $sql)) {
            echo "Thank you for your feedback!";
        } else {
            echo "Error: ".mysqli_error($conn) ;
        }

        mysqli_close($conn);
    
    ?>
