Í
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="./css/main.css" />
    <title id="pname">Patient: </title>
</head>


<body>
    <div class="container">
        <nav class="navbar navbar-default">

            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-collapse-menu">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                <a class="navbar-brand" href="index.html">Diabetes App</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="portfolio-collapse-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Patienten<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="./Be_Faktoren_programmieren_24h.html" data-toggle="modal" data-target="#patient">Patient erstellen</a></li>
                            <li><a href="#">Patient laden</a></li>
                        </ul>

                    </li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Funktionen<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="./Bolus_Rechner.html">Bolus Rechner</a></li>
                            <li><a href="./Be_Faktoren_programmieren_24h.html">BE Faktoren programmieren</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->

            <!-- /.container-fluid -->
        </nav>
        <!-- Modal -->
        <div id="patient" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Neuen Patienten hinzufügen</h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            <div class="form-group">
                                <label for="name">Vorname:</label>
                                <input type="text" class="form-control" id="usr">
                            </div>
                            <div class="form-group">
                                <label for="surname">Nachname:</label>
                                <input type="text" class="form-control" id="pwd">
                            </div>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" id= >Close</button>
                    </div>
                </div>
                <header>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h1 class="">BE-Faktoren programmieren</h1>

                            </div>
                        </div>
                    </div>
                </header>

                <article>

                    <script src="./js/new_Patient_new.js"></script>


                    <div class="row">
                        <div class="col-md-2 col-md-offset-10">
                            <button type="button" class="btn btn-primary btn-lg" onclick="faktoren()">Speichern</button>
                        </div>
                    </div>





                </article>
            </div>

</body>

</html>