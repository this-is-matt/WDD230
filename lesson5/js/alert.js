const div = document.querySelector("div");
const weekday = [ 'Sunday', 'Monday', 'tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = weekday[new Date().getDay()];

if(day == 'Friday'){
    div.setAttribute('class', 'alert');  
}else{
    div.style.display = 'none';
}


console.log(day);