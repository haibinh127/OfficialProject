var x = document.getElementById("login-form");
var y = document.getElementById("register-form");
var z = document.getElementById("pointer-btn");
var l = document.getElementById("login");
var r = document.getElementById("register");
var ac = document.getElementById("action_title");
loginbutton = document.getElementById("submitform1");
loginemail = document.getElementById("loginemail");
loginpassword = document.getElementById("loginpassword");
var bmibutton = document.getElementById("testBMIbutton");
bmibutton.addEventListener('click', testBMI);
function testBMI() {
  window.location.assign("bmi.html");
};
// hlvbutton = document.getElementsByClassName("Btn_hlv");
// hlvbutton.addEventListener('onclick', registerCourse);
// function registerCourse() {
//   window.location.assign("indexregister.html");
// };
hlvbutton = document.getElementById("hlv1");
hlvbutton.addEventListener('click', registerCourse);
function registerCourse() {
  window.location.assign("registration.html");
};
hlvbutton = document.getElementById("hlv2");
hlvbutton.addEventListener('click', registerCourse);
function registerCourse() {
  window.location.assign("registration.html");
};
hlvbutton = document.getElementById("hlv3");
hlvbutton.addEventListener('click', registerCourse);
function registerCourse() {
  window.location.assign("registration.html");
};
let feedback = document.getElementById("add-btn");
feedback.addEventListener('click', function(){
  alert("Cảm ơn vì đã gửi phản hồi của bạn ! ")
})
function ClickAccount(){
  window.location.assign("index.html")
}