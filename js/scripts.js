
let submitDetails = document.getElementById('submit')

submitDetails.addEventListener('click', submitBirthDay)
function submitBirthDay(e) {
    e.preventDefault();
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var Males = ["Kwasi", "Kwadwo", "Kwabena", " Kwaku", "Yaw", "Kofi", " Kwame"];
    var Females = ["Akosua", " Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];

    if (date <= 0 || date >31 ) {
        alert("Error!Enter correctly!!");
    }
    if(month <= 0 || month >12 ) {
        alert("Error! Enter correctly!!");
    }

    var day=new Date(year+"/"+ month+"/"+ date);
    var birthDay=day.getDay();

    if (Female.checked ==true ){
        alert("You were born on "+days[birthDay]);
        alert("Your name is "+Females[birthDay]);
    }
    else if (Males.checked ==true){
            alert("You were born on"+days[Birthday]);
            alert("Your name is "+Males[Birthday]);
    }

}