<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="navbar" >
        <h1 class="heading">DojoWeather</h1>
        <ul class="links" >
            <li><a onclick="alert('Loading Weather Report ...')" >Burbank</a></li>
            <li><a onclick="alert('Loading Weather Report ...')" >Chicago</a></li>
            <li><a onclick="alert('Loading Weather Report ...')" >Dallas</a></li>
        </ul>
        
    </div>
    <div class="small-heading" >
        <div><h1 class="san" >San Jose</h1></div>
        <div class="temperature" >
            <h2>Show Temperature in </h2>
            <select onchange="changeD()" >
                <option >C°</option>
                <option >F°</option>
            </select>
        </div>
    </div>
    <div class="weather" >
        <div class="box" >
            <div><h1>Today</h1></div>
            <div><img src="some_rain.png" class="clouds" alt="some-rain"> </div>
            <div><h2>some rain</h2></div>
            <div class="degree" >
                <h1 class="left-degree"><span  class="num1" >24 </span>°</h1>
                <h1  class="right-degree"><span  class="num1" >18 </span>°</h1>
            </div>
        </div>
        <div class="box" >
            <div><h1>Tomorrow</h1></div>
            <div><img src="some_sun.png" class="clouds" alt="some-sun"> </div>
            <div><h2>some sun</h2></div>
            <div class="degree" >
                <h1 class="left-degree" ><span  class="num1" >27 </span>°</h1>
                <h1  class="right-degree"><span  class="num1" >19 </span>°</h1>
            </div>
        </div>
        <div class="box" >
            <div><h1>Friday</h1></div>
            <div><img src="some_clouds.png" class="clouds" alt="some-cloud"> </div>
            <div><h2>some clouds</h2></div>
            <div class="degree" >
                <h1  class="left-degree"><span  class="num1" >21 </span>°</h1>
                <h1  class="right-degree"><span  class="num1" >16 </span>°</h1>
            </div>
        </div>
        <div class="box" >
            <div><h1>Saturday</h1></div>
            <div><img src="some_sun.png" class="clouds" alt="some-sun"> </div>
            <div><h2>some sun</h2></div>
            <div class="degree" >
                <h1 class="left-degree"><span  class="num1" >26 </span>°</h1>
                <h1  class="right-degree"><span  class="num1" >21 </span>°</h1>
            </div>
        </div>
    </div>
    <div class="cookies" >
        <div><img src="cookie.png"  alt="cookies"> </div>
        <div class="cookie-text" >
            <h1>Stop! Cookie time</h1>
            <h3>We use cookies (sadly not the edible ones) to personalize content and ads, to provide social media features and to analyse our traffic. <a href="#">Read more ...</a> </h3>
        </div>
        <div><button class="accept-cookies" onclick="remove()" >I Accept</button></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
