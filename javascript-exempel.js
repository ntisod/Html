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

function writeText(){
    var namn = document.getElementById("fnamn").value;
    document.getElementById("Text").innerHTML = namn;
  }

function respons(){
    var x, text;

    x = document.getElementById("fnamn").value;

    text = "Hej " + x + "!";
    document.getElementById("Text").innerHTML = text
}

function calculator() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var text;
    if (document.getElementById("expression").value == "+") {
      text = (num1 + num2);
    }
    else if (document.getElementById("expression").value == "-") {
      text = parseFloat(num1 - num2);
    }
    else if (document.getElementById("expression").value == "*") {
      text = parseFloat(num1 * num2);
    }
    else if (document.getElementById("expression").value == "/") {
      text = parseFloat(num1 / num2);
    }
  
    document.getElementById("num3").value = text;
  }
  
  function changeexpression() {
    if (document.getElementById("expression").value == "+") {
      document.getElementById("expression").value = "-";
    }
    else if (document.getElementById("expression").value == "-") {
      document.getElementById("expression").value = "*";
    }
    else if (document.getElementById("expression").value == "*") {
      document.getElementById("expression").value = "/";
    }
    else if (document.getElementById("expression").value == "/") {
      document.getElementById("expression").value = "+";
    }
  }