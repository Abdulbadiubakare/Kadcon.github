

function openForm() {
  document.getElementById("logform").style.display = "block";
}
function closeForm(){
  document.getElementById("logform").style.display = "none";
}

function closeForm() {
  document.getElementById("logform").style.display = "none";
}
function openAbout(){
  document.getElementById("about").style.display = "block";
}
function openAboutitem(){
  document.getElementById("aboutitem").style.display = "block";
}
function closeIt() {
  document.getElementById("about").style.display = "none";
}
function closeItem(){
  document.getElementById("aboutitem").style.display = "none";
}
function openMenu(){
  document.getElementById("sidebar").style.display = "block";
}
function closeMenu(){
  document.getElementById("sidebar").style.display = "none";
}
 var logform = document.getElementById("logform");

 window.onclick = function(event){
   if(event.target == logform){
     logform.style.display = "none"
   }
 }
