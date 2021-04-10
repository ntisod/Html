var valet

function softwar(){

  valet = "Software!";

  document.getElementById("dropdowntitle").innerHTML = "Välj dina val innom Software!";

  document.getElementById("mySelect1").innerHTML = "";
  document.getElementById("mySelect2").innerHTML = "";

  var list1 = document.getElementById("mySelect1");

  /*var title = document.createElement("option");
  title.text = "Software";
  title.disabled = true;
  title.value = "0";
  title.hidden = true;

  list1.add(title);*/ //Ifall man vill att det står Software i den översta listan.

  var def1 = document.createElement("option");
  def1.text = "Engelska 7";
  def1.value = "1";
  var def2 = document.createElement("option");
  def2.text = "Idrott och hälsa 2";
  def2.value = "2";
  var def3 = document.createElement("option");
  def3.text = "Entreprenörskap";
  def3.value = "3";
  var def4 = document.createElement("option");
  def4.text = "Modersmål";
  def4.value = "4";

  var opt1 = document.createElement("option");
  opt1.text = "Digitalt skapande 2";
  opt1.value = "5";
  var opt2 = document.createElement("option");
  opt2.text = "Fysik 2";
  opt2.value = "6";
  var opt3 = document.createElement("option");
  opt3.text = "Matematik 4";
  opt3.value = "7";

  list1.add(def1);
  list1.add(def2);
  list1.add(def3);
  list1.add(def4);

  list1.add(opt1);
  list1.add(opt2);
  list1.add(opt3);


  var list2 = document.getElementById("mySelect2");

  var def2_1 = document.createElement("option");
  def2_1.text = "Engelska 7";
  def2_1.value = "1";
  var def2_2 = document.createElement("option");
  def2_2.text = "Idrott och hälsa 2";
  def2_2.value = "2";
  var def2_3 = document.createElement("option");
  def2_3.text = "Entreprenörskap";
  def2_3.value = "3";
  var def2_4 = document.createElement("option");
  def2_4.text = "Modersmål";
  def2_4.value = "4";

  var opt2_1 = document.createElement("option");
  opt2_1.text = "Digitalt skapande 2";
  opt2_1.value = "5";
  var opt2_2 = document.createElement("option");
  opt2_2.text = "Fysik 2";
  opt2_2.value = "6";
  var opt2_3 = document.createElement("option");
  opt2_3.text = "Matematik 4";
  opt2_3.value = "7";

  list2.add(def2_1);
  list2.add(def2_2);
  list2.add(def2_3);
  list2.add(def2_4);
  
  list2.add(opt2_1);
  list2.add(opt2_2);
  list2.add(opt2_3);

  var y = document.createElement("OPTGROUP");
  y.setAttribute("label", "Standard valen");
  
  y.appendChild(def1);
  y.appendChild(def2);
  y.appendChild(def3);
  y.appendChild(def4);
  
  list1.insertBefore(y, list1.options[0]);

  var x = document.createElement("OPTGROUP");
  x.setAttribute("label", "Software valen");
  
  x.appendChild(opt1);
  x.appendChild(opt2);
  x.appendChild(opt3);
  
  list1.insertBefore(x, list1.options[4]);

  var y2 = document.createElement("OPTGROUP");
  y2.setAttribute("label", "Standard valen");
  
  y2.appendChild(def2_1);
  y2.appendChild(def2_2);
  y2.appendChild(def2_3);
  y2.appendChild(def2_4);
  
  list2.insertBefore(y2, list2.options[0]);

  var x2 = document.createElement("OPTGROUP");
  x2.setAttribute("label", "Software valen");
  
  x2.appendChild(opt2_1);
  x2.appendChild(opt2_2);
  x2.appendChild(opt2_3);
  
  list2.insertBefore(x2, list2.options[4]);

  document.getElementById("mySelect1").selectedIndex = 7;
  document.getElementById("mySelect2").selectedIndex = 7;

}

function engin(){

  document.getElementById("dropdowntitle").innerHTML = "Välj dina val innom Engineering!";

  document.getElementById("mySelect1").innerHTML = "";
  document.getElementById("mySelect2").innerHTML = "";

  var list1 = document.getElementById("mySelect1");

  /*var title = document.createElement("option");
  title.text = "Engineering";
  title.disabled = true;
  title.value = "0";
  title.hidden = true;

  list1.add(title);*/ //Ifall man vill att det står Engineering i den översta listan.

  var def1 = document.createElement("option");
  def1.text = "Engelska 7";
  def1.value = "1";
  var def2 = document.createElement("option");
  def2.text = "Idrott och hälsa 2";
  def2.value = "2";
  var def3 = document.createElement("option");
  def3.text = "Entreprenörskap";
  def3.value = "3";
  var def4 = document.createElement("option");
  def4.text = "Modersmål";
  def4.value = "4";

  var opt1 = document.createElement("option");
  opt1.text = "Digitalt skapande 1";
  opt1.value = "5";
  var opt2 = document.createElement("option");
  opt2.text = "Matematik 5";
  opt2.value = "6";
  var opt3 = document.createElement("option");
  opt3.text = "Webbserverprogrammering 1";
  opt3.value = "7";
  
  list1.add(def1);
  list1.add(def2);
  list1.add(def3);
  list1.add(def4);
  
  list1.add(opt1);
  list1.add(opt2);
  list1.add(opt3);

  
  var list2 = document.getElementById("mySelect2");

  var def2_1 = document.createElement("option");
  def2_1.text = "Engelska 7";
  def2_1.value = "1";
  var def2_2 = document.createElement("option");
  def2_2.text = "Idrott och hälsa 2";
  def2_2.value = "2";
  var def2_3 = document.createElement("option");
  def2_3.text = "Entreprenörskap";
  def2_3.value = "3";
  var def2_4 = document.createElement("option");
  def2_4.text = "Modersmål";
  def2_4.value = "4";
  
  var opt2_1 = document.createElement("option");
  opt2_1.text = "Digitalt skapande 1";
  opt2_1.value = "5";
  var opt2_2 = document.createElement("option");
  opt2_2.text = "Matematik 5";
  opt2_2.value = "6";
  var opt2_3 = document.createElement("option");
  opt2_3.text = "Webbserverprogrammering 1";
  opt2_3.value = "7";

  list2.add(def2_1);
  list2.add(def2_2);
  list2.add(def2_3);
  list2.add(def2_4);
  
  list2.add(opt2_1);
  list2.add(opt2_2);
  list2.add(opt2_3);

  var y = document.createElement("OPTGROUP");
  y.setAttribute("label", "Standard valen");
  
  y.appendChild(def1);
  y.appendChild(def2);
  y.appendChild(def3);
  y.appendChild(def4);
  
  list1.insertBefore(y, list1.options[0]);

  var x = document.createElement("OPTGROUP");
  x.setAttribute("label", "Engineering valen");
  
  x.appendChild(opt1);
  x.appendChild(opt2);
  x.appendChild(opt3);
  
  list1.insertBefore(x, list1.options[4]);

  var y2 = document.createElement("OPTGROUP");
  y2.setAttribute("label", "Standard valen");
  
  y2.appendChild(def2_1);
  y2.appendChild(def2_2);
  y2.appendChild(def2_3);
  y2.appendChild(def2_4);
  
  list2.insertBefore(y2, list2.options[0]);

  var x2 = document.createElement("OPTGROUP");
  x2.setAttribute("label", "Engineering valen");
  
  x2.appendChild(opt2_1);
  x2.appendChild(opt2_2);
  x2.appendChild(opt2_3);
  
  list2.insertBefore(x2, list2.options[4]);

  document.getElementById("mySelect1").selectedIndex = 7;
  document.getElementById("mySelect2").selectedIndex = 7;
} 

var clicks = 0;

function getOption() {
  
  clicks++;
  
  document.getElementById("valtext").innerHTML ="Dina val:";

  var obj = document.getElementById("fname");
  document.getElementById("fname2").innerHTML = "Namn: " + obj.value; 

  var obj1 = document.getElementById("lname");
  document.getElementById("lname2").innerHTML = "Efternamn: " + obj1.value; 

  var obj2 = document.getElementById("epost");
  document.getElementById("epost2").innerHTML = "Din E-post: " + obj2.value; 
  
  var obj3 = document.getElementById("mySelect1");
  document.getElementById("val1").innerHTML = "Förstahandsval: " + 
  obj3.options[obj3.selectedIndex].text;

  var obj4 = document.getElementById("mySelect2");
  document.getElementById("val2").innerHTML = "Andrahandsval: " + 
  obj4.options[obj4.selectedIndex].text;
  
  var x = document.getElementById("hide");
  x.style.display = "block";

  document.getElementById("goback").innerHTML = "Du kan fortfarande ändra dig!";
}

function lastcheck() {
  document.getElementById("valtext").innerHTML ="Är det här dina val??";

  var obj = document.getElementById("fname");
  document.getElementById("lastfname2").innerHTML = "Namn: " + obj.value; 

  var obj1 = document.getElementById("lname");
  document.getElementById("lastlname2").innerHTML = "Efternamn: " + obj1.value; 

  var obj2 = document.getElementById("epost");
  document.getElementById("lastepost2").innerHTML = "Din E-post: " + obj2.value; 
  
  var obj3 = document.getElementById("mySelect1");
  document.getElementById("lastval1").innerHTML = "Förstahandsval: " + 
  obj3.options[obj3.selectedIndex].text;

  var obj4 = document.getElementById("mySelect2");
  document.getElementById("lastval2").innerHTML = "Andrahandsval: " + 
  obj4.options[obj4.selectedIndex].text;

  var x = document.getElementById("lasthide");
  x.style.display = "block";
}

$(document).ready(function(){

  $('select').on('change', function(event ) {
    var prevValue = $(this).data('previous');
  
  $('select').not(this).find('option[value="'+prevValue+'"]').show();    
    var value = $(this).val();

    $(this).data('previous',value);         
    $('select').not(this).find('option[value="'+value+'"]').hide();
  
  });
  
});

function repeatchoise(){
  if(clicks > 0){
    getOption();
  }
}

$("body").css("overflow", "hidden"); //Hindra scrolla

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function changedittval(){
  document.getElementById("väljvaltxt").innerHTML = "Du kan fortfarande ändra dig mellan Software och Engineering";
  var val = document.getElementById("dropdowntitle");
  document.getElementById("dittval").innerHTML = "Du har valt: " + valet.value; //fixa
}