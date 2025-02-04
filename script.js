// Get references to the video player, range input, and speed display
const video = document.getElementById('videoPlayer');
const speedControl = document.getElementById('speedControl');
const speedBar = document.querySelector('.speed-bar');

// Function to update video speed and display
function updateSpeed() {
    // Update the video playback speed
    video.playbackRate = speedControl.value;

    // Update the speed display to show the current playback rate (e.g., 1x, 1.5x, 2x)
    speedBar.textContent = `${speedControl.value}×`;
}

// Event listeners for when the speed control is changed (via mouse move or change)
speedControl.addEventListener('input', updateSpeed);
speedControl.addEventListener('change', updateSpeed);

// Initialize the speed display to match the initial speed value
updateSpeed();
