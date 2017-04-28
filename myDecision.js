var transportTemplate=document.querySelector('#transportTemplate');
var myTable=document.querySelector('#myTable');
var searchRoute=document.querySelector('#searchRoute');
var routeDisplay=document.querySelector('.routeDisplay');
var DepStation=document.querySelector('.DepStation');
var DepartStationTemp=document.querySelector('.DepartStationTemp');


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

var transportTemplate=document.querySelector('#transportTemplate');
var TemplateInstance = Handlebars.compile(transportTemplate.innerHTML);
var results = TemplateInstance({route:RouteSearch});
routeDisplay.innerHTML+= results;
