console.log('Welcome to JavaScript Revision 03');

//equal to operator
//difference btw =,==,===,!=

a=10;
b="10";
console.log(a == b);
console.log(a === b);
console.log(a != b);

//if else operator
//use case 1

var kaam_kya_hai = "add";
kaam_kya_hai = "multiply";

if(kaam_kya_hai=="add"){
  console.log("add karo sheet ke data ko");
} else{
  console.log("multiply karo sheet ke data ko");
}

//use case 2
kaam_kya_hai = "add";
kaam_kya_hai = "bodmas";
kaam_kya_hai="subtract";


if (kaam_kya_hai == "add") {
  console.log("add karo data ko");
  } else if(kaam_kya_hai=="subtract"){
console.log("subtract karo data ko");  
} else if(kaam_kya_hai=="multiply"){
  console.log("multiply karo data ko");
}else{
  console.log("divide karo data ko");
}

//loops
//Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false 


const queue_logins = ["login_1","login_2","login_3"];

const valid_logins = ["login_2","login_3"];
//const invalid_logins = ["login_1"];


for(var i=0;i<queue_logins.length;i++){
  
 var current_logins = queue_logins[i];
 var IsValidLogins = false;
 
for(var j=0;j < valid_logins.length;j++);{
var valid_logins_jth_index = valid_logins[j];
   if(current_logins === valid_logins_jth_index){
     IsValidLogins = true
     }
 }
      console.log(queue_logins[i]);
   if(IsValidLogins) {
     console.log("login is valid");
   } else {
     console.log("login is invalid");
   }
}

//var i=0(variable initialisation)
//this will execute once in the beginning

//i < array_ka_length
//if true -> execute the logic written in for loop
//false -> it is the condition to stop

//i++
//during traversing we need go ahead
//if we are at 1th index,then next index will be 2
//thererfore we need to increment the index
