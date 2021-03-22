function authorDialog(){
    alert("Philip har skapat den här sidan. Den 03/22/21");
}

function authorDialog2(){
    document.getElementById("rubrik").innerHTML = "Philip";
    document.getElementById("text").style.color = "Cyan";
}

function light() {
    if (document.getElementById("pic").src == "https://hips.hearstapps.com/sev.h-cdn.co/assets/15/32/1438959415-shrek-fierce.jpg") {
        document.getElementById("pic").src = "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png";
    }
    else {
        document.getElementById("pic").src = "https://hips.hearstapps.com/sev.h-cdn.co/assets/15/32/1438959415-shrek-fierce.jpg";
    }

  }