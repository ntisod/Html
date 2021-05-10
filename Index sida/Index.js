function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
}
if(seconds < 10){
    seconds = "0" + seconds;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(hours < 10){
    hours = "0" + hours;
}
time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;});

function sike(){
    alert("Sike,\ndu trode att jag hade\nmen har inte");
}

function progressbar(){
    var el1 = document.getElementById('firstprogress');
    el1.style.animation = 'none';
    el1.offsetHeight; /* trigger reflow */
    el1.style.animation = null; 

    var el2 = document.getElementById('secondprogress');
    el2.style.animation = 'none';
    el2.offsetHeight; /* trigger reflow */
    el2.style.animation = null;

    var el3 = document.getElementById('thirdprogress');
    el3.style.animation = 'none';
    el3.offsetHeight; /* trigger reflow */
    el3.style.animation = null;
}

function email(){
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Subject = document.getElementById("Subject").value;
    var Message = document.getElementById("Message").value;
    /*mailto:" + Email + "?cc=" + Name + "&subject=" + Subject + "&body=" + Message*/
    var new_email_link = "mailto:" + Email + "?subject=" + Subject + "&body=" + Name + "%0D%0A%0D%0A" + Message;
    
    window.location.href = new_email_link;
}