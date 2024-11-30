// Define the sound URLs for each instrument
const sounds = {
  piano: 'https://www.soundjay.com/button/beep-07.wav',  // Replace with actual piano sound URL
  guitar: 'https://www.soundjay.com/button/beep-08.wav',  // Replace with actual guitar sound URL
  violin: 'https://www.soundjay.com/button/beep-09.wav',  // Replace with actual violin sound URL
  saxophone: 'https://www.soundjay.com/button/beep-10.wav',  // Replace with actual saxophone sound URL
  trumpet: 'https://www.soundjay.com/button/beep-11.wav'  // Replace with actual trumpet sound URL
};

let selectedInstrument = null;

// Hide loading screen and show main content after 2 seconds
window.onload = () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loadingScreen').style.display = 'none';
      document.getElementById('mainContent').classList.remove('hidden');
    }, 500);
  }, 2000);
};

// Handle button clicks to select an instrument
document.querySelectorAll('.instrument-selection button').forEach(button => {
  button.addEventListener('click', () => {
    // Reset all buttons and set selected state on clicked one
    document.querySelectorAll('.instrument-selection button').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
    selectedInstrument = button.id;
    document.getElementById('selectedInstrument').textContent = button.textContent;
  });
});

// Play the sound for the selected instrument
document.getElementById('playSound').addEventListener('click', () => {
  if (!selectedInstrument) {
    alert('Please select an instrument first!');
    return;
  }

  const audio = new Audio(sounds[selectedInstrument]);
  audio.play();
});