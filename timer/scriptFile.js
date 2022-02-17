
function countDown(seconds,elemts){
    var elements = document.getElementById("elemts");
    elements.innerHTML = "please wait for " + seconds+ " seconds";
    seconds--;
    var timer = setTimeout('countDown('+seconds+',"'+elemts+'")',1000);

  if(seconds < 0){
    clearTimeout(timer);
    elements.innerHTML = "<h1>congratulations</h1>"+"<br>";
    elements.innerHTML += "it's just 10 lines js codes";
  }
}

countDown( 10, "elemts");

/*function you(){
   document.getElementById("timeContainer").innerHTML="i love you javaScript";
  // me.innerHTML +="hello world";
}
you();
*/