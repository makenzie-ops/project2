var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var males = ["Kwasi", "Kwadwo", "Kwabena", " Kwaku", "Yaw", "Kofi", " Kwame"];
var females = ["Akosua", " Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];
let submitDetails = document.getElementById('submit')

submitDetails.addEventListener('click', submitBirthDay)
function submitBirthDay(e) {
    e.preventDefault();
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var gender =document.getElementById("gender").value;
    
    var akanName;
   
    var validDateGenger = ( gender == "male"  && gender == "female");
    
    CC = document.getElementById("year").value.slice(0,2);
    YY = document.getElementById("year").value.slice(2,4);
     
    if ( month<= 0 || month >12) {
        alert("Error! Enter correctly");
    }
    else if (date <=0 || date>=31) {
        alert( "Invalid!!");
    }
    else if (year =0) {
        alert("Error!!");
        }
        else {
            var dateWeek = Math.floor  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7
        }
    }


function findAkanName (){
    var newDateWeek = storeInput();
    var newGender = getGender();
    if( newGender = "female"){
        document.getElementById("answer") 
        alert("you are a female born on ") +days[newDateWeek] +( "and your akan name is ");
    }
    else if (newGender = "male"){
        document.getElementById ("answer")
        alert("you are a male born on ") +days[newDateWeek] + ("and your akan name is ");
    }
    else {
        document.getElementById ("answer")
        alert("check your data input");
    }

}

