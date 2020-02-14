
let submitDetails = document.getElementById('submit')

submitDetails.addEventListener('click', submitBirthDay)
function submitBirthDay(e) {
    e.preventDefault();
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var CC=parseInt(year.slice(0,2));
    var YY=parseInt(year.slice(2,4));
    var gender = document.getElementById("gender").value;

    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var Males = ["Kwasi", "Kwadwo", "Kwabena", " Kwaku", "Yaw", "Kofi", " Kwame"];
    var Females = ["Akosua", " Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];

    if (date <= 0 || date >31 ) {
        alert("Error!Enter correctly!!");
        return;
    }
    else if(month <= 0 || month >12 ) {
        alert("Error! Enter correctly!!");
        return;
    }
    else {
        var Dayoftheweek = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7);
        return Dayoftheweek;
    }

    
    //var day=new Date(year+"/"+ month+"/"+ date);
    //var birthDay=day.getDay();
    function gender() {
        var pickGender = document.getElementById("gender").value;

    
     if (pickGender == 0){
        alert(days[Dayoftheweek]);
        alert("Your name is "+Females[Dayoftheweek]);
    }
    else if (pickGender ==1){
            alert(days[Dayoftheweek]);
            alert("Your name is "+Males[Dayoftheweek]);
    }
}

}