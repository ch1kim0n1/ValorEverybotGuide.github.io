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
const button10 = document.getElementById('button-10');
const button11 = document.getElementById('button-11');
const button12 = document.getElementById('button-12');
const button13 = document.getElementById('button-13');
const button14 = document.getElementById('button-14');
const button15 = document.getElementById('button-15');
const button16 = document.getElementById('button-16');
const button17 = document.getElementById('button-17');
const button18 = document.getElementById('button-18');

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

button10.addEventListener('click', () => {
  const buttonValue = 'variable-10';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button11.addEventListener('click', () => {
  const buttonValue = 'variable-11';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button12.addEventListener('click', () => {
  const buttonValue = 'variable-12';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button13.addEventListener('click', () => {
  const buttonValue = 'variable-13';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button14.addEventListener('click', () => {
  const buttonValue = 'variable-14';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button15.addEventListener('click', () => {
  const buttonValue = 'variable-15';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button16.addEventListener('click', () => {
  const buttonValue = 'variable-16';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button17.addEventListener('click', () => {
  const buttonValue = 'variable-17';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});

button18.addEventListener('click', () => {
  const buttonValue = 'variable-18';
  if (codeInput.value.includes(buttonValue)) {
    codeInput.value = codeInput.value.replace(buttonValue, '');
  } else {
    codeInput.value += buttonValue;
  }
});



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

const toggleButton7 = document.getElementById('toggle-button7');
const hiddenElement7 = document.getElementById('hidden-element7');

toggleButton7.addEventListener('click', function() {
  if (hiddenElement7.style.display === 'none') {
    hiddenElement7.style.display = 'block';
  } else {
    hiddenElement7.style.display = 'none';
  }
});

const toggleButton8 = document.getElementById('toggle-button8');
const hiddenElement8 = document.getElementById('hidden-element8');

toggleButton8.addEventListener('click', function() {
  if (hiddenElement8.style.display === 'none') {
    hiddenElement8.style.display = 'block';
  } else {
    hiddenElement8.style.display = 'none';
  }
});

const toggleButton9 = document.getElementById('toggle-button9');
const hiddenElement9 = document.getElementById('hidden-element9');

toggleButton9.addEventListener('click', function() {
  if (hiddenElement9.style.display === 'none') {
    hiddenElement9.style.display = 'block';
  } else {
    hiddenElement9.style.display = 'none';
  }
});

const toggleButton10 = document.getElementById('toggle-button10');
const hiddenElement10 = document.getElementById('hidden-element10');

toggleButton10.addEventListener('click', function() {
  if (hiddenElement10.style.display === 'none') {
    hiddenElement10.style.display = 'block';
  } else {
    hiddenElement10.style.display = 'none';
  }
});

const toggleButton11 = document.getElementById('toggle-button11');
const hiddenElement11 = document.getElementById('hidden-element11');

toggleButton11.addEventListener('click', function() {
  if (hiddenElement11.style.display === 'none') {
    hiddenElement11.style.display = 'block';
  } else {
    hiddenElement11.style.display = 'none';
  }
});

const toggleButton12 = document.getElementById('toggle-button12');
const hiddenElement12 = document.getElementById('hidden-element12');

toggleButton12.addEventListener('click', function() {
  if (hiddenElement12.style.display === 'none') {
    hiddenElement12.style.display = 'block';
  } else {
    hiddenElement12.style.display = 'none';
  }
});

const toggleButton13 = document.getElementById('toggle-button13');
const hiddenElement13 = document.getElementById('hidden-element13');

toggleButton13.addEventListener('click', function() {
  if (hiddenElement13.style.display === 'none') {
    hiddenElement13.style.display = 'block';
  } else {
    hiddenElement13.style.display = 'none';
  }
});

const toggleButton14 = document.getElementById('toggle-button14');
const hiddenElement14 = document.getElementById('hidden-element14');

toggleButton14.addEventListener('click', function() {
  if (hiddenElement14.style.display === 'none') {
    hiddenElement14.style.display = 'block';
  } else {
    hiddenElement14.style.display = 'none';
  }
});

const toggleButton15 = document.getElementById('toggle-button15');
const hiddenElement15 = document.getElementById('hidden-element15');

toggleButton15.addEventListener('click', function() {
  if (hiddenElement15.style.display === 'none') {
    hiddenElement15.style.display = 'block';
  } else {
    hiddenElement15.style.display = 'none';
  }
});

const toggleButton16 = document.getElementById('toggle-button16');
const hiddenElement16 = document.getElementById('hidden-element16');

toggleButton16.addEventListener('click', function() {
  if (hiddenElement16.style.display === 'none') {
    hiddenElement16.style.display = 'block';
  } else {
    hiddenElement16.style.display = 'none';
  }
});

const toggleButton17 = document.getElementById('toggle-button17');
const hiddenElement17 = document.getElementById('hidden-element17');

toggleButton17.addEventListener('click', function() {
  if (hiddenElement17.style.display === 'none') {
    hiddenElement17.style.display = 'block';
  } else {
    hiddenElement17.style.display = 'none';
  }
});

const toggleButton18 = document.getElementById('toggle-button18');
const hiddenElement18 = document.getElementById('hidden-element18');

toggleButton18.addEventListener('click', function() {
  if (hiddenElement18.style.display === 'none') {
    hiddenElement18.style.display = 'block';
  } else {
    hiddenElement18.style.display = 'none';
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
  
  //------------------------------------------PICED OPTION CODE--------------------------------------------
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
