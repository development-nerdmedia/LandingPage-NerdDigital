<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="img/png" href="../icons/favicon-1.png">
    <title>Nerd | Creative Digital Agency</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;800;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
</head>
<body>
<?php 
$myemail = 'development@nerdmedia.pe';
$name = $_POST['Nombre'];
$tel = $_POST['Teléfono'];
$email = $_POST['Email'];
$message = $_POST['Mensaje'];

$to = $myemail;
$email_subject = "Contacto NERD: $subject";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Email: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>
    <main>
        <section class="thanks">
            <div class="container">
                <div class="padd">
                    <div class="cabezapage">
                        <h2>Studio Desgin</h2>
                        <div class="closebrannnn">
                            <a href="#"><img src="icons/flechablanca.svg" alt=""></a>
                        </div>
                    </div>   
                    <div class="pagemidd asdd">
                        <div class="title">        
                            <h1>thank you</h1>
                        </div>
                        <p>In a few moments we are going to contact you </p>  
                    </div>
                    <div class="pagbtnc">
                        <!-- <div class="close closebrannnn closeani"> -->
                            <a href="index.html">
                                <img src="icons/button2.svg" alt="">
                                <img src="icons/flechath.svg" alt="">
                                <h2>GO HOME</h2>
                            </a> 
                        <!-- </div>    -->
                        <a class="btn2" href="https://www.instagram.com/?hl=es" target="_blank">
                            <img class="prime" src="icons/button3.svg" alt="">
                            <img src="icons/flechath.svg" alt="">
                            <h2>GO INSTAGRAM</h2>
                        </a>  
                    </div>
                </div>          
            </div>
            <div class="downth">                    
                <p class="marqu3">
                    <span>WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK -&nbsp;</span>
                </p>
                <p class="marquo">
                    <span>WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - 
                        WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK -&nbsp;</span>
                </p>
                <p class="marquo marquo2">
                    <span>WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK - 
                    WORK - WORK - WORK - WORK - WORK - WORK - WORK - WORK -&nbsp;</span>
                </p>
            </div>
        </section>
    </main>
        <script src="js/main.js"></script>
</body>
</html>
