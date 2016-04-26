<!--

* roster0702.php

* Roster 0702 interface 

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761

*

*/

-->

<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico">

    <title>Shifts</title>

    <!-- Scripts -->
    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="rosterjava.js" type="text/javascript"></script>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

    <div id='cssmenu'>
<ul>
            <li class='active'>
                <a href='roster0702.php'><span>Rosters</span></a>
            </li>
            <li>
                <a href='request.php'><span>Requests</span></a>
            </li>
            <li>
                <a href='chat2.php'><span>Chat</span></a>
            </li>
            <li class='last'>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
</div>
  </head>

  <body background="dark.jpg">

  

    <div class="container">

      
        <center><img src="company.png" width="750" height="100"></center>
        <h2 class="form-signin-heading"><font color="white"><center>Roster for Week Ending 07/02/2016</center></font></h2>
<center><div class="tg-wrap"><table class="roster">
  <tr>
    <th class="tg-jlrw">Name</th>
    <th class="tg-yw4l" id="Date1"></th>
    <th class="tg-yw4l" id="Date2"></th>
    <th class="tg-yw4l" id="Date3"></th>
    <th class="tg-yw4l" id="Date4"></th>
    <th class="tg-yw4l" id="Date5"></th>
    <th class="tg-yw4l" id="Date6"></th>
    <th class="tg-yw4l" id="Date7"></th>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp1"></td>
    <td class="tg-yw4l" id="Emp1Mon"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp2"></td>
    <td class="tg-yw4l" id="Emp2Mon"></td>
    <td class="tg-yw4l">HOLS</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">9:30 - 21:30</td>
    <td class="tg-yw4l">10:00 - 18:00</td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp3"></td>
    <td class="tg-yw4l" id="Emp3Mon"></td>
    <td class="tg-yw4l">9:30 - 21:30</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">9:30 - 21:30</td>
    <td class="tg-yw4l">9:30 - 17:30</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">10:00 - 18:00</td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp4"></td>
    <td class="tg-yw4l" id="Emp4Mon"></td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">9:30 - 17:30</td>
    <td class="tg-yw4l">9:30 - 21:30</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">15:30 - 21:30</td>
    <td class="tg-yw4l">OFF</td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp5"></td>
    <td class="tg-yw4l" id="Emp5Mon"></td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">9:30 - 21:30</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">9:30 - 17:30</td>
    <td class="tg-yw4l">OFF</td>
    <td class="tg-yw4l">OFF</td>
  </tr>
</table></div></center>

</br>

<center>
<table border="0">
<tr>
<td><form action="roster3101.php">
<input type="submit" class="rosterclicks" value="Last Week">
</form></td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td><form action="roster1402.php">
<input type="submit" class="rosterclicks" value="Next Week">
</form></td>
</tr>
</table>
</center>



  </body>
</html>