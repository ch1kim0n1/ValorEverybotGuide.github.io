function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

 // Get the bordered text element and tab content elements
const borderedText = document.querySelector('.bordered-text');
const tabContent = document.querySelectorAll('.tabcontent');

// Add an event listener to each tab button
document.querySelectorAll('.tablinks').forEach(tabButton => {
  tabButton.addEventListener('click', (event) => {
    // Remove the 'show' class from the bordered text element
    borderedText.classList.remove('show');
    // Add the 'hide' class to the bordered text element
    borderedText.classList.add('hide');
    
    // Loop through each tab content element
    tabContent.forEach(content => {
      // If the content element's ID matches the tab button's target
      if (content.id === event.target.dataset.target) {
        // Add the 'active' class to the tab button
        tabButton.classList.add('active');
        // Display the tab content element
        content.style.display = 'block';
      } else {
        // Remove the 'active' class from the tab button
        tabButton.classList.remove('active');
        // Hide the tab content element
        content.style.display = 'none';
      }
    });
  });
});
