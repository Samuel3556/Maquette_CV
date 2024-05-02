// Set your birth date and time
const birthDate = new Date(2001, 4, 5, 22, 11);

// Function to update the countdown every second
function updateCountdown() {
  // Get the current date and time
  const now = new Date();

  // Calculate the time difference in milliseconds
  const diffMs = now - birthDate;

  // Convert milliseconds to seconds, minutes, hours, days, months, and years
  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHours = diffMin / 60;
  const diffDays = diffHours / 24;
  const diffMonths = Math.floor(diffDays / 30.437); // Average number of days in a month
  const diffYears = Math.floor(diffMonths / 12);

  // Calculate age in years, months, days, hours, minutes, and seconds
  const years = diffYears;
  const months = diffMonths % 12;
  const days = Math.floor(diffDays % 30.437);
  const hours = Math.floor(diffHours % 24);
  const minutes = Math.floor(diffMin % 60);
  const seconds = Math.floor(diffSec % 60);

  // Format the countdown
  const formattedCountdown = `J'ai ${years} ans, ${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`;

  // Update the countdown element in the HTML
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = formattedCountdown;
}

// Update the countdown initially
updateCountdown();

// Set an interval to update the countdown every second
setInterval(updateCountdown, 1000);
