function Birthday() {
    var date = parseInt(document.getElementsByName["date"].value);
    var month = parseInt(document.getElementsByName["month"].value);
    var year = parseInt(document.getElementsByName["year"].value);
    var gender = document.getElementsByName["gender"].value;

    if (date = 0 || date >31 ) {
        alert("Error!Enter correctly!!")
    }
        else (month = 0 || month >12 ) 
            alert("Error! Enter correctly!!")

var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
var Males = ["Kwasi", "Kwadwo", "Kwabena", " Kwaku", "Yaw", "Kofi", " Kwame"]
var Females = ["Akosua", " Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"]

var day=new Date(year+"/"+ month+"/"+ date);
var Birthday=day.getDay();

if (Female.checked ==true ){
    alert("You were born on "+days[Birthday]);
    alert("Your name is "+Males[Birthday]);
}
else if (Males.checked ==true){
         alert("You were born on"+days[Birthday]);
         alert("Your name is "+Females[Birthday]);
}
        else (gender="")
        alert("Error!!")

}