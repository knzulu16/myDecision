
var transportTemplate=document.querySelector('#transportTemplate');
var DepartPlace=document.querySelector('#DepartPlace');
var DepartTime=document.querySelector('#DepartTime');
var ArrivalPlace=document.querySelector('#ArrivalPlace');
var ArrivalTime=document.querySelector('#ArrivalTime');
var DepartStationTemp=document.querySelector('.DepartStationTemp');
var DepartTimeTemp=document.querySelector('.DepartTimeTemp');
var ArrivalStationTemp=document.querySelector('.ArrivalStationTemp');
var ArrivalTimeTemp=document.querySelector('.ArrivalTimeTemp');
var arrTime=document.querySelector('.ArrTime');
var TimeUpdate=document.querySelector('.TimeUpdate');
var myTable=document.querySelector('#myTable');
var searchRoute=document.querySelector('#searchRoute');
var routeDisplay=document.querySelector('.routeDisplay');
var DepStation=document.querySelector('.DepStation');
var transportTemplate=document.querySelector('#transportTemplate');
var TemplateInstance = Handlebars.compile(transportTemplate.innerHTML);


var RouteSearch=[{
  DepartStation:'SiteC',
  DepartTime:'07:30',
  ArrivalStation:'Mandalay',
  ArrivalTime:'07:37'

},
{DepartStation:'Mandalay',
DepartTime:'07:43',
ArrivalStation:'StockRoad',
ArrivalTime:'07:53'
},
{DepartStation:'StoakRoad',
DepartTime:'07:56',
ArrivalStation:'Philipi',
ArrivalTime:'08:04'
},
{DepartStation:'Philipi',
DepartTime:'08:07',
ArrivalStation:'Nyanga',
ArrivalTime:'08:14'},

{DepartStation:'Nyanga',
DepartTime:'08:17',
ArrivalStation:'Hiedeveld',
ArrivalTime:'08:22'},

{DepartStation:'Hiedeveld',
DepartTime:'08:25',
ArrivalStation:'Netreg',
ArrivalTime:'08:30'},

{DepartStation:'Netreg',
DepartTime:'08:33',
ArrivalStation:'Bontuiwel',
ArrivalTime:'08:38'},
{
  DepartStation:'Bontuiwel',
  DepartTime:'08:41',
  ArrivalStation:'Langa',
  ArrivalTime:'08:46'
},
{DepartStation:'Langa',
DepartTime:'08:49',
ArrivalStation:'Mutual',
ArrivalTime:'08:54'},

{DepartStation:'Mutual',
DepartTime:'08:57',
ArrivalStation:'Yiesteplart',
ArrivalTime:'09:03'},

{DepartStation:'Yiesteplart',
DepartTime:'09:06',
ArrivalStation:'Esplanade',
ArrivalTime:'09:11'}];

var results = TemplateInstance({route:RouteSearch});
routeDisplay.innerHTML+= results;

function updateRoute(){

RouteSearch.push({
  DepartStation:document.querySelector('#DepartPlace').value,
  DepartTime:document.querySelector('#DepartTime').value,
  ArrivalStation:document.querySelector('#ArrivalPlace').value,
  ArrivalTime:document.querySelector('#ArrivalTime').value,

});

var results = TemplateInstance({route:RouteSearch});
routeDisplay.innerHTML = results;

}



// searchRoute.addEventListener('click',function(){
//
// });





// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementByName("username").value;
// var password = document.getElementByName("password").value;
// if ( username == "Nzulu" && password == "abc&123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementByName("username").disabled = true;
// document.getElementByName("pass").disabled = true;
// document.getElementByName("submit").disabled = true;
// return false;
// }
