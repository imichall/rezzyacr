<?php
session_start();

$errorMsg = "";
$validUser = isset($_SESSION["admin"]) === true;

if (isset($_POST["pass"])) {
    $validUser = md5($_POST["pass"]) == "43e526f8cd3e37039d42400a65aaa9ec";

    if (!$validUser)
        $errorMsg = "Invalid password";
    else
        $_SESSION["admin"] = true;
}

if ($validUser) {
    header("Location: /");
    die();
}

?>

<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./build/css/main.css?cssbuild=1653776056634">
    <title>Admin Login</title>
</head>

<body>
    <div class="header">

        <div class="inner-header flex">
            <h1>Admin Page - Login</h1>

            <div class="LoginForm">
                <form action="a-edit.php" method="post">

                    <input type="password" name="pass" placeholder="password">
                    <?php if ($errorMsg != "") { ?>
                        <div class="error">
                            <?= $errorMsg ?>
                        </div>
                    <?php } ?>
                    <input type="submit" value="Přihlásit">

                </form>
            </div>
        </div>

        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>

    </div>

    <div class="content flex">
        <p>Rezzy Arc </p>
    </div>
</body>

</html>