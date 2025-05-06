// Function to store theme preference
function savePreference() {
    localStorage.setItem('preferredTheme', 'dark');
    document.getElementById('statusText').textContent = "Preference saved: dark theme";
    triggerAnimation();
  }
  
  // Function to load theme preference
  function loadPreference() {
    const theme = localStorage.getItem('preferredTheme');
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#2c3e50';
      document.getElementById('statusText').textContent = "Dark theme loaded from preference.";
    }
  }
  
  // Function to trigger animation
  function triggerAnimation() {
    const btn = document.getElementById('themeBtn');
    btn.classList.add('animate');
    setTimeout(() => btn.classList.remove('animate'), 500);
  }
  
  // Attach event and load preference on page load
  document.getElementById('themeBtn').addEventListener('click', savePreference);
  window.onload = loadPreference;
  
  