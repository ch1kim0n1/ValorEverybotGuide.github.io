// Get references to the buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const button11 = document.getElementById('button11');
const button12 = document.getElementById('button12');
const inputBox = document.getElementById('inputbox');
const inputBox2 = document.getElementById('inputbox2');
const clearButton = document.getElementById('clearbutton');
const submitButton = document.getElementById('submitbutton');


// Hide buttons 4-6 and 7-12 by default
button4.style.display = 'none';
button5.style.display = 'none';
button6.style.display = 'none';
button7.style.display = 'none';
button8.style.display = 'none';
button9.style.display = 'none';
button10.style.display = 'none';
button11.style.display = 'none';
button12.style.display = 'none';

function changeInputValue(inputValue) {
  let customText = '';

  // Set custom text based on the input value
  switch (inputValue) {
    case 'variable-4':
      customText = "if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5\nm_robotDrive.ArcadeDrive(0.0, 0.0, false);\n} \nelse if(m_timer.Get() < 0.15_s + secondsX){\n     m_robotDrive.TankDrive(-0.6, -0.6, false);\n} \nelse if(m_timer.Get() < 1.5_s + secondsX){\n     m_robotDrive.TankDrive(0, 0, false);  //this is going between 0.15 and 1.2  \n}";
      break;
    case 'variable-5':
      customText = "if(m_timer.Get() < secondsX){                     // PERFECT VOLTAGE - 12.3 - 12.5 \n m_robotDrive.ArcadeDrive(0.0, 0.0, false); \n     } \n else if(m_timer.Get() < 0.15_s + secondsX){ \n     m_robotDrive.TankDrive(-0.6, -0.6, false); \n } \n else if(m_timer.Get() < 1.5_s + secondsX){ \n m_robotDrive.TankDrive(0, 0, false);  //this is going between 0.15 and 1.2  \n } ";
      break;
    case '3':
      customText = 'Custom Text 3';
      break;
    case '4':
      customText = 'Custom Text 4';
      break;
    case '5':
      customText = 'Custom Text 5';
      break;
    default:
      customText = 'Default Text';
  }

  inputBox2.value = customText;
}

// Add event listener to submit button to change the input value when clicked
submitButton.addEventListener('click', function() {
  changeInputValue(inputBox.value);
});


function setInputValue(number) {
  inputBox.value = `variable-${number}`;
}
for (let i = 4; i <= 12; i++) {
  const button = document.getElementById(`button${i}`);
  button.addEventListener('click', function() {
    setInputValue(i);
  });
}

// Add an event listener to button 1
button1.addEventListener('click', function() {
  if (button4.style.display === 'none') {
    // Buttons 4-6 are hidden, show them and hide buttons 2-3 and 7-12
    button2.style.display = 'none';
    button3.style.display = 'none';
    button7.style.display = 'none';
    button8.style.display = 'none';
    button9.style.display = 'none';
    button10.style.display = 'none';
    button11.style.display = 'none';
    button12.style.display = 'none';
    button4.style.display = 'block';
    button5.style.display = 'block';
    button6.style.display = 'block';
  } else {
    // Buttons 4-6 are shown, hide them and show buttons 2-3 and 7-12
    button2.style.display = 'block';
    button3.style.display = 'block';
    button7.style.display = 'none';
    button8.style.display = 'none';
    button9.style.display = 'none';
    button10.style.display = 'none';
    button11.style.display = 'none';
    button12.style.display = 'none';
    button4.style.display = 'none';
    button5.style.display = 'none';
    button6.style.display = 'none';
  }
});

// Add an event listener to button 2
button2.addEventListener('click', function() {
  if (button7.style.display === 'none') {
    // Buttons 7-9 are hidden, show them and hide buttons 1, 3, 4-6, and 10-12
    button1.style.display = 'none';
    button3.style.display = 'none';
    button4.style.display = 'none';
    button5.style.display = 'none';
    button6.style.display = 'none';
    button10.style.display = 'none';
    button11.style.display = 'none';
    button12.style.display = 'none';
    button7.style.display = 'block';
    button8.style.display = 'block';
    button9.style.display = 'block';
  } else {
    // Buttons 7-9 are shown, hide them and show buttons 1, 3, 4-6, and 10-12
    button1.style.display = 'block';
    button3.style.display = 'block';
    button4.style.display = 'none';
    button5.style.display = 'none';
    button6.style.display = 'none';
    button10.style.display = 'none';
    button11.style.display = 'none';
    button12.style.display = 'none';
    button7.style.display = 'none';
    button8.style.display = 'none';
    button9.style.display = 'none';
}
});

// Add an event listener to button 3
button3.addEventListener('click', function() {
if (button10.style.display === 'none') {
// Buttons 10-12 are hidden, show them and hide buttons 1, 2, 4-6, and 7-9
button1.style.display = 'none';
button2.style.display = 'none';
button4.style.display = 'none';
button5.style.display = 'none';
button6.style.display = 'none';
button7.style.display = 'none';
button8.style.display = 'none';
button9.style.display = 'none';
button10.style.display = 'block';
button11.style.display = 'block';
button12.style.display = 'block';
} else {
// Buttons 10-12 are shown, hide them and show buttons 1, 2, 4-6, and 7-9
button1.style.display = 'block';
button2.style.display = 'block';
button4.style.display = 'none';
button5.style.display = 'none';
button6.style.display = 'none';
button7.style.display = 'none';
button8.style.display = 'none';
button9.style.display = 'none';
button10.style.display = 'none';
button11.style.display = 'none';
button12.style.display = 'none';
}
//fix here --------------------------------------------------------------
clearButton.addEventListener('click', function() {
  clearInputValue();
});
    
function clearInputValue() {
  inputBox.value = '';
}
});
