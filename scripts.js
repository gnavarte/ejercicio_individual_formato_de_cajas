document.getElementById("light-mode").addEventListener("click", function() {
    document.getElementById("theme-style").setAttribute("href", "light.css");
});

document.getElementById("dark-mode").addEventListener("click", function() {
    document.getElementById("theme-style").setAttribute("href", "dark.css");
});
