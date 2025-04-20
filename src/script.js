let currentTheme = getTheme();

  // Set the current theme on page load
  document.addEventListener("DOMContentLoaded", () => {
    changeThemePage(currentTheme);  // Change the theme on load
  });

  // Function to toggle the theme
  function toggleTheme() {
    // Toggle the theme between light and dark
    currentTheme = (currentTheme === "light") ? "dark" : "light";

    // Change the theme of the page
    changeThemePage(currentTheme);
  }

  // set the theme to local storage value or default to light
  function setTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  // get the current theme from local storage
  function getTheme() {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  }

  // Apply the theme to the page and update the button text
  function changeThemePage(theme) {
    // Set the theme in localStorage
    setTheme(theme);

    // Remove old theme classes and apply the new one
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);

    // Update button text based on the theme
    // const button = document.querySelector("#change-theme-button");
    // button.querySelector("i").textContent = theme === "light" ? "🌙" : "☀️"; // Moon for light, Sun for dark
  }