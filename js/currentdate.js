//show to the user the current year
let d = new Date();
let year = d.getFullYear();
document.getElementById("current_year").innerHTML = year;


//show to the user the last modified date
let lastModified = document.lastModified;
document.getElementById("last_updated").innerHTML = lastModified;

