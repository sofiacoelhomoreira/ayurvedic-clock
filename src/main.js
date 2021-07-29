let now = new Date();

let hours = now.getHours();

if (hours <10){
    hours = `0${hours}`;
}

let minutes = now.getMinutes();

if (minutes<10){
    minutes=`0${minutes}`;
}
document.querySelector("#your-local-time").innerHTML = `${hours}:${minutes}`;



if (hours>=6 && hours<10){
    document.querySelector("h3").innerHTML = "Kapha Time";
     document.body.style.backgroundColor= "linear-gradient(to right, #6dc9a6 0%, #66d1ca 100%";
} else if ( hours>=10 && hours < 14) { 
    document.querySelector("h3").innerHTML = "Pitta Time";
document.body.style.background="linear-gradient(to right, #fa709a 0%, #fee140 100%)";
} else if ( hours>=14 && hours <18) { 
    document.querySelector("h3").innerHTML = "Vata Time";
document.body.style.background="linear-gradient(to right, #633cab 0%, #5a95bf 100%)";
} else if (hours>=18 && hours<22){
    document.querySelector("h3").innerHTML = "Kapha Time";
     document.body.style.backgroundColor= "linear-gradient(to right, #6dc9a6 0%, #66d1ca 100%";
} else if ( hours >=22)
{ document.querySelector("h3").innerHTML = "Pitta Time";
    document.body.style.background="linear-gradient(to right, #fa709a 0%, #fee140 100%)";
} else if ( hours == 00 && hours < 02)
{ document.querySelector("h3").innerHTML = "Pitta Time";
    document.body.style.background="linear-gradient(to right, #fa709a 0%, #fee140 100%)";
} else if ( hours>=02 && hours <06) { 
    document.querySelector("h3").innerHTML = "Vata Time";
document.body.style.background="linear-gradient(to right, #633cab 0%, #5a95bf 100%)";
}