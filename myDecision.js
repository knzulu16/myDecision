var DepartPlace=document.querySelector('#DepartPlace');
var transportTemplate=document.querySelector('#transportTemplate');
var DepartTime=document.querySelector('#DepartTime');
var ArrivalPlace=document.querySelector('#ArrivalPlace');
var ArrivalTime=document.querySelector('#ArrivalTime');
var DepartStationTemp=document.querySelector('.DepartStationTemp');
var timeTable=document.querySelector('.timeTable');
var DepartTimeTemp=document.querySelector('.DepartTimeTemp');
var ArrivalStationTemp=document.querySelector('.ArrivalStationTemp');
var ArrivalTimeTemp=document.querySelector('.ArrivalTimeTemp');
var arrTime=document.querySelector('.ArrTime');
var TimeUpdate=document.querySelector('.TimeUpdate');
var myTable=document.querySelector('#myTable');
var routeDisplay=document.querySelector('.routeDisplay');
var DepStation=document.querySelector('.DepStation');
var UpdateTimeTemp=document.querySelector('#UpdateTimeTemp');
var dropDwnTemp=document.querySelector('#dropDwnTemp');
var transportTemplate=document.querySelector('#transportTemplate');
var UpdateTime=document.querySelector('.UpdateTime');
var dropDown=document.querySelector('.dropDown');
var TemplateInstance = Handlebars.compile(transportTemplate.innerHTML);
var loginBtn=document.querySelector('#loginBtn');
var user=document.querySelector('#user').innerHTML;
var passwrd=document.querySelector('#passwrd').innerHTML;



var RouteSearch=[

  {DepartStation:'SiteC',
  DepartTime:'07:30',
  ArrivalStation:'Mandalay',
  ArrivalTime:'07:37',

},
{DepartStation:'Mandalay',
DepartTime:'07:43',
ArrivalStation:'StockRoad',
ArrivalTime:'07:53',

},
{DepartStation:'StoakRoad',
DepartTime:'07:56',
ArrivalStation:'Philipi',
ArrivalTime:'08:04',

},
{DepartStation:'Philipi',
DepartTime:'08:07',
ArrivalStation:'Nyanga',
ArrivalTime:'08:14',},

{DepartStation:'Nyanga',
DepartTime:'08:17',
ArrivalStation:'Hiedeveld',
ArrivalTime:'08:22',
},

{DepartStation:'Hiedeveld',
DepartTime:'08:25',
ArrivalStation:'Netreg',
ArrivalTime:'08:30',
},

{DepartStation:'Netreg',
DepartTime:'08:33',
ArrivalStation:'Bontuiwel',
ArrivalTime:'08:38',
},
{
  DepartStation:'Bontuiwel',
  DepartTime:'08:41',
  ArrivalStation:'Langa',
  ArrivalTime:'08:46',

},
{DepartStation:'Langa',
DepartTime:'08:49',
ArrivalStation:'Mutual',
ArrivalTime:'08:54',},

{DepartStation:'Mutual',
DepartTime:'08:57',
ArrivalStation:'Yiesteplart',
ArrivalTime:'09:03',
},

{DepartStation:'Yiesteplart',
DepartTime:'09:06',
ArrivalStation:'Esplanade',
ArrivalTime:'09:11',
},

{DepartStation:'Esplanade',
DepartTime:'09:14',
ArrivalStation:'Cape Town',
ArrivalTime:'09:25',
}];

var searchRoute=document.querySelector('#searchRoute');
//alert(searchRoute);
var showRoute=document.querySelector('.showRoute');
searchRoute.addEventListener('click',function(){
  var results = TemplateInstance({route:RouteSearch});
  routeDisplay.innerHTML= results;

});
var UpdateTimeTemp=document.querySelector('#UpdateTimeTemp');
var TempInstance = Handlebars.compile(UpdateTimeTemp.innerHTML);

loginBtn.addEventListener('click',function(){
  if(validate()){
  var result = TempInstance({route:RouteSearch});
  //   passUseruser.value='';
  routeDisplay.innerHTML= result;

}
else{
  alert("error password or username");
}
document.querySelector('#user').value = '';
document.querySelector('#passwrd').value ='';

});



var dropDwnTemp=document.querySelector('#dropDwnTemp');
var InstanceTemp = Handlebars.compile(dropDwnTemp.innerHTML);
var product = InstanceTemp({data:RouteSearch});
routeDisplay.innerHTML= product;

function updateRoute(){

for(var i=0;i<RouteSearch.length;i++){
  var updated = false;
   if(RouteSearch[i].DepartStation == document.querySelector('#DepartPlace').value && RouteSearch[i].ArrivalStation == document.querySelector('#ArrivalPlace').value){
          RouteSearch[i].DepartTime = document.querySelector('#DepartTime').value;
          RouteSearch[i].ArrivalTime = document.querySelector('#ArrivalTime').value;
          updated = true;
    }

}
if(updated == true){
  RouteSearch.push({
    DepartStation:document.querySelector('#DepartPlace').value,
    DepartTime:document.querySelector('#DepartTime').value,
    ArrivalStation:document.querySelector('#ArrivalPlace').value,
    ArrivalTime:document.querySelector('#ArrivalTime').value,
  });
}

var result = TempInstance({route:RouteSearch});
routeDisplay.innerHTML = result;

}

function routeFilter(){
var routeDisplay=document.querySelector('.routeDisplay');
var selectedDepStation=document.querySelector('.DepStation');
var selectedDepTime=document.querySelector('.DepTime');
var selectedArrStation=document.querySelector('.ArrStation');
var selectedArrTime=document.querySelector('.ArrTime');


var routeList=[];
for(var i=0;i<RouteSearch.length;i++){
  var routes=RouteSearch[i];
  if(selectedDepStation.value==routes.DepartStation
    && selectedDepTime.value==routes.DepartTime){
    routeList.push(routes);


  }
  if(selectedDepTime.value==routes.DepartTime){
    routeList.push(routes);

  }
if(selectedDepStation.value==routes.DepartStation){
  routeList.push(routes);
}

if(selectedDepTime.value==routes.DepartTime){
  routeList.push(routes);
}
if(selectedArrStation.value==routes.ArrivalStation){
  routeList.push(routes);
}
if(selectedArrTime.value==routes.ArrivalTime){
  routeList.push(routes);
}




  // var product=InstanceTemp({data:routeList});
  // document.querySelector('.routeDisplay').innerHTML=product;
  var results = TemplateInstance({route:routeList});
  routeDisplay.innerHTML= results;
}
}

function validate(){
  var flag=true;
  if(document.querySelector('#user').value!=='Admin'){
    flag=false;
  }
  if(document.querySelector('#passwrd').value!=='123'){
    flag=false;
  }
  console.log("Login Status: "+flag);
  return flag;
}

// function login(){
//   var form='';
//   var username='';
//   var password='';
//   var usernameValue = username.value;
//   var passwordValue = password.value;
//
// if(username.value!== ''
//  && password.value!== ''){
//    username.value='';
//    password.value='';
// }
// else  if(username.value=="Admin" && password.value=="knzulu"){
//     routeDisplay.innerHTML=update;
//
//   }
//   else{
//     alert("error password or username")
// }
//
// }
// =======
//
// function validate(){
//   var flag=true;
//
//   // const text=input.value;
//   // input.value='';
//   if(document.querySelector('#user').value!=='Admin'){
//     // document.querySelector('.user').value=''
//
//     flag=false;
//   }
//     if(document.querySelector('#passwrd').value!=='123'){
//     // document.querySelector('.passUser').value=''
// >>>>>>> 06b5cfbeebb4df16dae1472b5a59c99280de3906
//
//     flag=false;
//   }
//
//
//   console.log("Login Status: "+flag);
//   // console.log(passwrd);
//   // console.log(user);
//   return flag;
// }


//
// function Clearform(){
//    // Get the first form with the name
//    // Hopefully there is only one, but there are more, select the correct index
//    var form = document.getElementsByName('Login')[0];
//    form.validate(); // Submit
//    form.reset();  // Reset
//    return false; // Prevent page refresh
// }


// function addExisting(motion){
//   var list=[];
//   var listMap={};
//   for(var i=0;i<motion;i++){
//     var array=motion[i];
//     if(listMap[array.DepartTime]===undefined){
//       listMap[array.DepartTime]=array.DepartTime;
//       list.push(array.DepartTime);
//     }
//     var result = TempInstance({route:list});
//     routeDisplay.innerHTML = result;
//   }
//   addExisting(RouteSearch);
// }




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
