const form = document.querySelector(".validation");

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};

// Function to read in values and output them
function displayRadioValue() {
  var ele = document.getElementsByName('month');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("result").innerHTML
              = "Your birth month is "+ele[i].value;
            
  }
  var ele = document.getElementsByName('day');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("resultTwo").innerHTML
              = "Your birth day is "+ele[i].value;
            
  }

  var yr = document.getElementByName("year");
      document.getElementById("resultThree").innerHTML
              = "Your birth year is "+yr;
}
