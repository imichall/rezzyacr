<?php
include('./functions.php');
$urlLang = $_GET['lang'];

$url = new Translator();

if (!$urlLang) {
    $urlLang = 'cs';
}

$isCz = $urlLang === 'cs' ? true : false;
$isEn = $urlLang === 'en' ? true : false;
$isPl = $urlLang === 'pl' ? true : false;

?>


<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./build/css/main.css?cssbuild=1653845623865">
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
    <link rel="manifest" href="./favicon/site.webmanifest">
    <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2d89ef">
    <meta name="theme-color" content="#ffffff">
    <title>Rezzy + Arc</title>
</head>

<body>

    <nav class="Navigation">
        <div class="Container Container--small Navigation-menu">
            <ul class="Navigation-list -menu">
                <li class="one active"><a href="#one">01</a></li>
                <li class="two"><a href="#two">02</a></li>
                <li class="three"><a href="#three">03</a></li>
                <li class="four"><a href="#four">04</a></li>
                <li class="five"><a href="#five">05</a></li>
                <li class="six"><a href="#six">06</a></li>
                <li class="seven"><a href="#seven">07</a></li>
                <li class="eight"><a href="#eight">08</a></li>
            </ul>
            <ul class="Navigation-list -lang">
                <li class="cs <?php if($isCz == true) echo 'active'; ?>"><a href="/">CZ</a></li>
                <li class="en <?php if($isEn == true) echo 'active'; ?>"><a href="?lang=en">EN</a></li>
                <li class="pl <?php if($isPl == true) echo 'active'; ?>"><a href="?lang=pl">PL</a></li>
            </ul>
        </div>
    </nav>

    <div id="one" class="CardLayout" data-section="one">
        <div class="Container Container--small CardLayout-HeaderBlock">
            <div class="Section-Counter" data-id="1">01
                <span class="Counter-dot"></span>
            </div>
            <div class="CardLayout-LeftBlock">
                <div class="CardLayout-Brands">
                    <a href="https://rezzy.eu" target="_blank">
                        <div class="Brand-Logo">
                            <img src="./images/Rezzy.png" alt="Rezzy" data-logo="rezzy">
                        </div>
                    </a>
                    <span class="separator">+</span>
                    <div class="Brand-Logo">
                        <img src="./images/arc.svg" alt="Arc" data-logo="arc">
                    </div>
                </div>
                <div class="CardLayout-Content">
                    <h1><?php echo $url->getTranslate($urlLang)->CardLayout_Content ?></h1>

                    <div class="CardLayout-Intro">
                        <video autoplay muted playsinline loop>
                            <source src="./video/panel-01.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="CardLayout-Text">
                        <div class="CardLayout-left">
                            <h2><?php echo $url->getTranslate($urlLang)->CardLayout_left_h2 ?></h2>
                            <p><?php echo $url->getTranslate($urlLang)->CardLayout_left_p ?></p>
                        </div>
                        <div class="CardLayout-right">
                            <h2><?php echo $url->getTranslate($urlLang)->CardLayout_right_h2 ?></h2>
                            <p><?php echo $url->getTranslate($urlLang)->CardLayout_right_p ?></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="Section-Content">
        <div id="two" class="Section-Data" data-section="two">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="2">02
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="two"><?php echo $url->getTranslate($urlLang)->Section_2_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_2_info_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_2_info_p2 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-02.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="three" class="Section-Data" data-section="three">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="3">03
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="three"><?php echo $url->getTranslate($urlLang)->Section_3_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_3_info_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_3_info_p2 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_3_info_p3 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-03.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="four" class="Section-Data" data-section="four">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="4">04
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="four"><?php echo $url->getTranslate($urlLang)->Section_4_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_4_info_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_4_info_p2 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-04.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="five" class="Section-Data" data-section="five">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="5">05
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="five"><?php echo $url->getTranslate($urlLang)->Section_5_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_5_info_p1 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-05.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="six" class="Section-Data" data-section="six">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="6">06
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="six"><?php echo $url->getTranslate($urlLang)->Section_6_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_6_info_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_6_info_p2 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-06.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="seven" class="Section-Data" data-section="seven">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="7">07
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="seven"><?php echo $url->getTranslate($urlLang)->Section_7_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_7_info_p1 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-07.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div id="eight" class="Section-Data" data-section="eight">
            <div class="Container Container--small mainSection">
                <div class="Section-Counter" data-id="8">08
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                    <span class="Counter-dot"></span>
                </div>
                <div class="Section-Content-Title">
                    <h2 data-title="eight"><?php echo $url->getTranslate($urlLang)->Section_8_h2 ?></h2>
                </div>
                <div class="Section-Content-Info">
                    <p><?php echo $url->getTranslate($urlLang)->Section_8_info_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Section_8_info_p2 ?></p>
                </div>
                <div class="Section-Content-Intro">
                    <video autoplay muted playsinline loop>
                        <source src="./video/panel-08.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>

        <?php if($isCz == true) {; ?>
        <div class="CardLayout-Video">
            <div class="Container Container--small">
                <div class="-VideoBlock">
                    <object data="https://www.youtube.com/embed/71NGr3UZbfc"></object>
                </div>
            </div>
        </div>
        <?php } ?>

        <div class="preFooterLayout">
            <div class="Container Container--small preFooterLayout-Grid">
                <div class="preFooter-Info">
                    <h2><?php echo $url->getTranslate($urlLang)->Footer_header_h2 ?></h2>
                    <p><?php echo $url->getTranslate($urlLang)->Footer_content_p1 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Footer_content_p2 ?></p>
                    <p><?php echo $url->getTranslate($urlLang)->Footer_content_p3 ?></p>
                </div>
                <div class="preFooter-Image">
                    <img src="./images/calculator.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <section class="FooterLayout">
        <div class="Container Container--small">
            <div class="Footer-Grid">
                <div class="Brands">
                    <a href="https://rezzy.eu" target="_blank">
                        <div class="Brand-Logo">
                            <img src="./images/Rezzy.png" alt="Rezzy" data-logo="rezzy">
                        </div>
                    </a>
                    <a href="">
                        <div class="Brand-Logo">
                            <img src="./images/arc.svg" alt="Arc" data-logo="arc">
                        </div>
                    </a>
                </div>
                <div class="Brand-Links">
                    <a href="http://www.rezzy.eu" data-link="rezzy">www.rezzy.eu</a>
                    <a href="http://www.calypso.eu" data-link="callypso">www.calypso.eu</a>
                </div>
            </div>

        </div>
    </section>

    <footer class="Contact">
        <div class="Container Container--small">
            <div class="ContactBlock">
                <h3><?php echo $url->getTranslate($urlLang)->Contacts ?></h3>
                <ul class="ContactBlock-List">
                    <li>
                        <span class="ContactBlock -name">Jakub Hůla</span>
                        <span class="ContactBlock -phone">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+420734230201">+420 734 230 201</a>
                        </span>
                        <span class="ContactBlock -mail">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:hula@calypso.eu">hula@calypso.eu</a>
                        </span>
                    </li>
                    <li>
                        <span class="ContactBlock -name">Filip Herudek</span>
                        <span class="ContactBlock -phone">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+420734440405">+420 734 440 405</a>
                        </span>
                        <span class="ContactBlock -mail">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:sales@rations.eu">sales@rations.eu</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </footer>

    <script type="module" src="build/js/app.js"></script>

</body>

</html>
