




/*-------------------CLOCK---------------------*/

/*
I'd like to make this clickable with: 
 - a choice of time zones
 - 12/24hr format options
*/

// get current time and insert into inner text of clock div. 
function getTime() {
  var current = new Date();
  var clockDiv = document.getElementById("clock");
  var hours = (current.getUTCHours() + 1).toString().padStart(2,0);
  var minutes = current.getUTCMinutes().toString().padStart(2,0);
  var seconds = current.getUTCSeconds().toString().padStart(2,0);
  if (hours == 24){
    clockDiv.innerText = ["00", minutes, seconds].join(":") + " BST"
  } else {
    clockDiv.innerText = [hours, minutes, seconds].join(":") + " BST"
  } 
} /* this could be encapsulated better to make it more versatile. Perhaps by returning a "clock" value, 
  and defining a second function to insert that into the DOM. Ideally would have element name as an argument
  of this second function but not yet figured out how to call a function with an argument with setInterval. 
  Working on it. */

setInterval(getTime, 1000); // update time every second. Would be nice if the clock "blinked" too.




/*---------------------RESIZE BEHAVIOUR----------------------*/

// show and hide personal statement (called by ps-button in document which is only visible in narrow viewport width)
function togglePS() {
  var ps = document.getElementById("personal-statement");
  var button = document.getElementById("ps-button");
  if (ps.style.display === "block") {
    ps.style.display = "none";
  } else {
    ps.style.display = "block";
  }
} 

// show personal statement by default in wide view and hide by default in narrow view
window.addEventListener("resize", function() {
  if (window.innerWidth > 800){
    document.getElementById("personal-statement").style.display = "block";
  } else {
    document.getElementById("personal-statement").style.display = "none";
  }
}) 



/*----------------------THEME SWITCHER----------------------*/

var currentTheme = "dark";

function toggleTheme() {
  if (currentTheme == "dark") {
    currentTheme = "light";
    document.documentElement.style.setProperty('--fg-colour', 'var(--blue)');
    document.documentElement.style.setProperty('--bg-colour', 'white');
    document.getElementById("slide").src = "media/descent_schematic_web.png";
  } else if (currentTheme == "light") {
    currentTheme = "dark";
    document.documentElement.style.setProperty('--bg-colour', 'var(--blue)');
    document.documentElement.style.setProperty('--fg-colour', 'white');
    document.getElementById("slide").src = "media/descent_schematic_web_dark.png"
  }
}