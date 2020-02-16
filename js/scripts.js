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
    var gender =getGender ();
    var date = newDate ( year +"/" + month + "/" + day);
    var dayToBorn = date.getDate();
    var akanName;
    var validDate = (year > 0 && (month > 0 && month<= 12) && (date > 0 && day <= 31));
    var validDateGenger = ( gender == "male"  && gender == "female");
     
    if ( month<= 0 || month >12) {
        alert("Error! Enter correctly")
    }
    else if (date <=0 || date>=31) {
        alert( "Invalid!!")
    }
    else if (year =0) {
        alert("Error!!")
    }
    if (gende === "female " && year > 0 )
     
}
