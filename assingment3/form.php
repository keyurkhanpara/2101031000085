<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>

    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="connect.php" method="post">

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 col-lg-offset-4 col-lg-4"
                    id="CNAForm">
                    <h3 class="text-center"><i class="fa fa-chat"></i>&nbsp;Feedback Form</h3>
                    <hr>

                    <div class="form-group">
                        <b>Name : </b>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" id="fname" placeholder="Enter First Name Here" maxlength="20"
                                class="form-control" name="name">
                        </div><br>
                        <small class="text-danger" id="fnameValidation"></small>
                    </div>

        
                    <div class="form-group">
                        <b>Email : </b>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input type="text" id="email" placeholder="Enter Email Here" maxlength="40"
                                class="form-control" name="email">
                        </div><br>
                        <small class="text-danger" id="emailValidation"></small>
                    </div>

               
                    <div class="form-group">
                        <b><i class="fa fa-comments" aria-hidden="true"></i>Feedback:</b>
                        <textarea id="msg" cols="30" rows="5" placeholder="Write Feedback Here"
                            maxlength="300" name="feedback" ></textarea><br>
                        <small id="msgValidation"></small>
                        <br>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" id="btnSubmit" type="submit" name="submit">Submit</button>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>

</html>