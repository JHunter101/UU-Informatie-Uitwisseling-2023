<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Construct the email subject and body and headers
    $subject = "Thank you for submitting the form";
    $body = "Dear $name,\n\nThank you for submitting the form. Your details have been received.\n\nBest regards,\nTeam XXX";
    $headers = "From: j.chen7@students.uu.nl";

    // Send email to the user
    mail($email, $subject, $body, $headers);

    // Create a file in /res/submissions folder using the name as part of the filename
    $filename = "./res/submissions/" . strtolower(str_replace(' ', '-', $name)) . ".txt";
    $myfile = fopen($filename, "w") or die("Unable to open file 1!");
    $fileContent = "Name: $name\nEmail: $email\nMessage: $message";
    fwrite($myfile, $fileContent);
    fclose($myfile);
    
    // Append to AAA.csv
    $filename = "./res/submissions/AAA.txt";
    $myfile = fopen($filename, "a") or die("Unable to open file 2!");
    $fileContent = "$name,$email,$message\n";
    fwrite($myfile, $fileContent);
    fclose($myfile);
}
?>

<html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Form Submission Result</title>
        <link rel='stylesheet' href='./dist/css/output.css'>
        <link rel='icon' href='./favicon.ico' type='image/x-icon'>
    </head>
    <body>
        <nav>
            <a href='index.html'>Home</a>
            <a href='pag1.html'>Video</a>
            <a href='pag2.html'>Icoon</a>
            <a href='contact.html'>Contact</a>
            <a href='responsive/bootstrap.html'>bootstrap</a>  
            <a href='responsive/responsive.html'>responsive</a>  
        </nav>
        <div class='section-container'>
            <h1>Thank you <?php echo $_POST["name"]; ?> for submitting the form!</h1>
            <p>Your details have been received, and a confirmation email has been sent to <?php echo $_POST["email"]; ?></p>
        </div>
        
        <div class='section-container'>
            <button onclick='goBack()'>Go Back</button>
            <button onclick='openTextFile()'>Open Text File</button>
            <button onclick='openCSVFile()'>Open CSV File</button>
        </div>
        <script>
            function goBack() {
                window.history.back();
            }

            function openTextFile() {
                window.open('./res/submissions/' + '<?php echo strtolower(str_replace(' ', '-', $_POST["name"]));?>' + '.txt', '_blank');
            }

            function openCSVFile() {
                window.open('./res/submissions/AAA.txt', '_blank');
            }
        </script>
    </body>
</html>