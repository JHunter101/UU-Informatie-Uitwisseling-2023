<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $country = $_POST["country"];
    $postalCode = $_POST["postalCode"];
    $creditcard = $_POST["creditcard"];
    $expiry = $_POST["expiry"];
    $cvv = $_POST["cvv"];
    
    // Append to AAA.csv
    $filename = "submissions.txt";
    $myfile = fopen($filename, "a") or die("Unable to open file!");
    $fileContent = "$fullname,$email,$address,$country,$postalCode,$creditcard,$expiry,$cvv\n";
    fwrite($myfile, $fileContent);
    fclose($myfile);
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sans des Lunes - FW23|24</title>
    <link
      href="https://fonts.cdnfonts.com/css/sf-pro-display"
      rel="stylesheet"
    />
    <link href="https://fonts.cdnfonts.com/css/gobold" rel="stylesheet" />

    <link rel="stylesheet" type="text/css" href="dist/css/output.css" />  
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="dist/src/ts/product-data.js"></script>
  </head>
  <body>
    <nav id="nav-bar" class="">
      <div class="left-section">
        <div
          class="menu-icon mobile-only"
          onclick="toggle_elem('nav-bar-menu'), toggle_elem('nav-middle-section'), toggle_elem('nav-right-section')"
        >
          â˜°
        </div>
        <div id="nav-bar-menu" class="desktop-only">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="search.html">Products</a>
        </div>
      </div>
      <div id="nav-middle-section" class="logo-section">
        <a
          href="index.html"
          style="
            font-family: 'Gobold Thin', sans-serif !important;
            font-size: min(4vw, 1.33rem);
            letter-spacing: min(0.6vw, 0.2rem);
          "
          >SANS DES LUNES</a
        >
      </div>
      <div id="nav-right-section" class="right-section">
        <div id="cart-basket">
          <div id="cart-size"></div>
          <a href="cart.html"
            ><ion-icon name="basket"></ion-icon
            ><i class="fal fa-shopping-cart"></i
          ></a>
        </div>
      </div>
    </nav>

    <div class="air"></div>

    <section class="section-container fill-height">
        <h1>Thank You for Your Order!</h1>
        <h5>We appreciate your business and are thrilled that you chose to shop with us. Your order is being processed, and we'll keep you updated on its status.</p>
        <h5>If you have any questions or need assistance, feel free to reach out to our customer support team at <a href="mailto:support@example.com">support@example.com</a>.</p>
        <h5>Thank you again for choosing us!</p>
    </section>

    <footer class="alt-section">
      <h5>&copy; 2024 All rights reserved.</h5>

      <nav class="nav-light">
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank">Privacy Policy</a>
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank">Use of Cookies</a>
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank">Terms of Use</a>
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank">Sales Terms</a>
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank"
          >Legal Information</a
        >
        <a href="res/pdf/Placeholder-PDF.pdf" target="_blank">Site Map</a>
      </nav>
    </footer>

    <script>
    window.onload = function () {
          window.onload = wipeCart();
    }
    </script>
  </body>
</html>
