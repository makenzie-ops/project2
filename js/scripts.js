var gender;
var CC;
var YY;
var month;
var date;
let submitDetails = document.getElementById('submit');

submitDetails.addEventListener('click', submitBirthDay)
function submitBirthDay(e) {
    e.preventDefault();
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    gender =document.getElementById("gender").value;
    
    
    CC =parseInt(document.getElementById("year").value.slice(0,2)) ;
    YY =parseInt(document.getElementById("year").value.slice(2,4)) ;
     
    if ( month<= 0 || month >12) {
        alert("Error! Enter correctly");
        return;
    }
    else if (date <=0 || date>=31) {
        alert( "Invalid!!");
        return;
    }
    else if (year =0) {
        alert("Error!!");
        return;
        }
        findAkanName();
    
    }


function findAkanName (){
    var dateWeek = Math.floor  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7
    
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var males = ["Kwasi", "Kwadwo", "Kwabena", " Kwaku", "Yaw", "Kofi", " Kwame"];
    var females = ["Akosua", " Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];
    if( gender === "female"){
        
        alert("you are a female born on " +days[dateWeek] + " and your akan name is " + females[dateWeek]);
        
    }
    else if (gender === "male"){
        
        alert("you are a male born on " +days[dateWeek] + " and your akan name is "+ males[dateWeek]);
    }
    else {
        
        alert("check your data input");
    }

}