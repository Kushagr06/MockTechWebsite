alert("Welcome to Technology.com!\nToday We have been sponsored by RAID:Shadow Legends. Sign up  for our special Link.");

function Click1(){
  alert("You are already on the HomePage!");
}

function Click2(){
  alert("We are a group of enthusiatic tech geeks who love to learn and write about technology. Our site allows anyone to write an publish their own blogs.So Sign Up and join our community!!");
}
function Click3(){
  alert("Pleae bear with us! Our site is new and therefore is not fully functional.");
}

function Click4(){
  alert("All our subscribers get their monthly Newsletter in their registered email id. Please sign Up with us to get access to the newsletter!");
}
//_______________________________________________________
var th=document.getElementById("thankyou");
function Clicke(){
  th.innerHTML='<br>Thank You for your Submission!Even if you got cold feet and did not submit, that is fine! Take your time and perfect your work. Trust me we all want to read what you have to say';
}

sp=document.getElementById("space");
function runEvent(){
sp.innerHTML="<br><h3> All Articles are frequently updated! If you can't find one you like check back later :)</h3>";
}
//________________________________________________________
var box=document.getElementById('box');
box.addEventListener('mousemove',runEvent);

function runEvent(e){
  console.log('EVENT TYPE: '+e.type);
  console.log('event area:'+e.offsetX+'||'+e.offsetY);
 document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}
function Default(){
  document.body.style.backgroundColor="white";
}
