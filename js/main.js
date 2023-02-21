const bulletPoints = document.querySelectorAll('.bullet-point');
const submitButton = document.getElementById('submit-button');
const outputBox = document.getElementById('output-box');
const copyButton = document.getElementById('copy-button');
const codeInput = document.getElementById('code-input');

let selectedVariable = '';

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
// Add event listeners to the buttons
button1.addEventListener('click', () => {
  const buttonValue = 'variable-1';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button2.addEventListener('click', () => {
  const buttonValue = 'variable-2';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button3.addEventListener('click', () => {
  const buttonValue = 'variable-3';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button4.addEventListener('click', () => {
  const buttonValue = 'variable-4';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button5.addEventListener('click', () => {
  const buttonValue = 'variable-5';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button6.addEventListener('click', () => {
  const buttonValue = 'variable-6';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button7.addEventListener('click', () => {
  const buttonValue = 'variable-7';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button8.addEventListener('click', () => {
  const buttonValue = 'variable-8';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
button9.addEventListener('click', () => {
  const buttonValue = 'variable-9';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});
// Repeat for the other 5 buttons...


const toggleButton1 = document.getElementById('toggle-button1');
const hiddenElement1 = document.getElementById('hidden-element1');

toggleButton1.addEventListener('click', function() {
  if (hiddenElement1.style.display === 'none') {
    hiddenElement1.style.display = 'block';
  } else {
    hiddenElement1.style.display = 'none';
  }
});

const toggleButton2 = document.getElementById('toggle-button2');
const hiddenElement2 = document.getElementById('hidden-element2');

toggleButton2.addEventListener('click', function() {
  if (hiddenElement2.style.display === 'none') {
    hiddenElement2.style.display = 'block';
  } else {
    hiddenElement2.style.display = 'none';
  }
});

const toggleButton3 = document.getElementById('toggle-button3');
const hiddenElement3 = document.getElementById('hidden-element3');

toggleButton3.addEventListener('click', function() {
  if (hiddenElement3.style.display === 'none') {
    hiddenElement3.style.display = 'block';
  } else {
    hiddenElement3.style.display = 'none';
  }
});

const toggleButton4 = document.getElementById('toggle-button4');
const hiddenElement4 = document.getElementById('hidden-element4');

toggleButton4.addEventListener('click', function() {
  if (hiddenElement4.style.display === 'none') {
    hiddenElement4.style.display = 'block';
  } else {
    hiddenElement4.style.display = 'none';
  }
});

const toggleButton5 = document.getElementById('toggle-button5');
const hiddenElement5 = document.getElementById('hidden-element5');

toggleButton5.addEventListener('click', function() {
  if (hiddenElement5.style.display === 'none') {
    hiddenElement5.style.display = 'block';
  } else {
    hiddenElement5.style.display = 'none';
  }
});

const toggleButton6 = document.getElementById('toggle-button6');
const hiddenElement6 = document.getElementById('hidden-element6');

toggleButton6.addEventListener('click', function() {
  if (hiddenElement6.style.display === 'none') {
    hiddenElement6.style.display = 'block';
  } else {
    hiddenElement6.style.display = 'none';
  }
});

// Get the clear button
const clearButton = document.getElementById('clearButton');

// Event listener for the clear button
clearButton.addEventListener('click', () => {
  // Clear the input box
  codeInput.value = '';
  outputBox.value = '';
});

// Event listener for the submit button
submitButton.addEventListener('click', () => {
  // Get the value of the code input and generate the custom code based on the selected variable
  const selectedVariable = codeInput.value;
  let customCode = '';
  
  switch (selectedVariable) {
    case 'variable-1':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false);  //this is going between 0.15 and 1.2
      }`;
      break;
    case 'variable-2':
      customCode = `Custom code for variable 2: ${selectedVariable}`;
      break;
    case 'variable-3':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false);  //this is going between 0.15 and 1.2
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-4':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false);  //this is going between 0.15 and 1.2
      }`;
      break;
    case 'variable-5':
      customCode = `Custom code for variable 5: ${selectedVariable}`;
      break;
    case 'variable-6':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false);  //this is going between 0.15 and 1.2
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-7':
    customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
      m_robotDrive.ArcadeDrive(0.0, 0.0, false);
    }
    else if(m_timer.Get() < 0.15_s + secondsX){
      m_robotDrive.TankDrive(-0.6, -0.6, false); 
    }
    else if(m_timer.Get() < 1.5_s + secondsX){
      m_robotDrive.TankDrive(0, 0, false);  //this is going between 0.15 and 1.2
    }`;
    break;
    case 'variable-8':
    customCode = `Custom code for variable 8: ${selectedVariable}`;
    break;
    case 'variable-9':
    customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
      m_robotDrive.ArcadeDrive(0.0, 0.0, false);
    }
    else if(m_timer.Get() < 0.15_s + secondsX){
      m_robotDrive.TankDrive(-0.6, -0.6, false); 
    }
    else if(m_timer.Get() < 15_s + secondsX){
      m_robotDrive.TankDrive(0, 0, false);
    }`;
    break;
    case 'variable-1variable-2':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false);  //this is going between 0.15 and 1.2
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 2_s + secondsX){
        m_robotDrive.TankDrive(-0.65, 0.65, false); 
      }
      else if(m_timer.Get() < 2.6_s + secondsX){ //0.3sec to turn 90 degrees with speed 0.62
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 3.1_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 3.4_s + secondsX){
        m_robotDrive.TankDrive(0.57, -0.57, false); 
      }
      else if(m_timer.Get() < 4.65_s + secondsX){
        m_robotDrive.TankDrive(-0.8, -0.8, false); 
      }
      else if(m_timer.Get() < 4.7_s + secondsX){
        m_robotDrive.TankDrive(0.8, 0.8, false); 
      }
      else if(m_timer.Get() < 6_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-2variable-3':
      customCode = `IT IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    case 'variable-4variable-5':
      customCode = `//MUST FACE THE DRIVER
      if(m_timer.Get() < secondsX){
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(0.6, 0.6, false); 
      }
      else if(m_timer.Get() < 1.3_s + secondsX){
        m_robotDrive.TankDrive(-0.7, -0.7, false); //initially 0.9 
      }
      else if(m_timer.Get() < 1.35_s + secondsX){
        m_robotDrive.TankDrive(0.8, 0.8, false); 
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-5variable-6':
      customCode = `IT IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    case 'variable-7variable-8':
      customCode = `if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false);  //this is going between 0.15 and 1.2
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 2_s + secondsX){
        m_robotDrive.TankDrive(0.65, -0.65, false); 
      }
      else if(m_timer.Get() < 2.6_s + secondsX){ //0.3sec to turn 90 degrees with speed 0.62
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 3.1_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 3.4_s + secondsX){
        m_robotDrive.TankDrive(-0.57, 0.57, false); 
      }
      else if(m_timer.Get() < 4.65_s + secondsX){
        m_robotDrive.TankDrive(-0.8, -0.8, false); 
      }
      else if(m_timer.Get() < 4.7_s + secondsX){
        m_robotDrive.TankDrive(0.8, 0.8, false); 
      }
      else if(m_timer.Get() < 6_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-8variable-9':
      customCode = `IT IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    case 'variable-1variable-3':
      customCode = `if(m_timer.Get() < secondsX){
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false); 
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-4variable-6':
      customCode = `//MUST FACE THE DRIVER
      if(m_timer.Get() < secondsX){
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(0.6, 0.6, false); 
      }
      else if(m_timer.Get() < 1.3_s + secondsX){
        m_robotDrive.TankDrive(-0.53, -0.53, false); 
      }
      else if(m_timer.Get() < 1.35_s + secondsX){
        m_robotDrive.TankDrive(0.8, 0.8, false); 
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }
      else if(m_timer.Get() < 3.3_s + secondsX){
        m_robotDrive.TankDrive(-0.3, -0.3, false); 
      }
      else if(m_timer.Get() < 3.9_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false);
      }
      else if(m_timer.Get() < 15_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false);
      }`;
      break;
    case 'variable-7variable-9':
      customCode = `if(m_timer.Get() < secondsX){
        m_robotDrive.ArcadeDrive(0.0, 0.0, false);
      }
      else if(m_timer.Get() < 0.15_s + secondsX){
        m_robotDrive.TankDrive(-0.6, -0.6, false); 
      }
      else if(m_timer.Get() < 1.5_s + secondsX){
        m_robotDrive.TankDrive(0.9, 0.9, false); 
      }
      else if(m_timer.Get() < 1.7_s + secondsX){
        m_robotDrive.TankDrive(0, 0, false); 
      }`;
      break;
    case 'variable-1variable-2variable-3':
      customCode = `Bridge + GoOut IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    case 'variable-4variable-5variable-6':
      customCode = `Bridge + GoOut IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    case 'variable-7variable-8variable-9':
      customCode = `Bridge + GoOut IS NOT POSSIBLE, CLEAR AND PICK SOMETHING ELSE`;
      break;
    default:
      customCode = 'No variable selected';
  }

  // Update the output box with the generated custom code
  outputBox.value = customCode;
  });
  
  // Event listener for the copy button
  copyButton.addEventListener('click', () => {
  // Copy the text inside the output box to the clipboard
  outputBox.select();
  document.execCommand('copy');
  alert('Custom code copied to clipboard');
  });

//------------------------------------------------------------TABS----------------------------------------------
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

//------------------------------------------------------------Switch TABS----------------------------------------------

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
