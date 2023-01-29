let theme = document.getElementById("theme-button");

theme.classList.toggle("light-nav");
theme.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if(theme.src.includes("sun")) {
        theme.src = "svgs/moon-solid.svg";
    }
    else {
        theme.src = "svgs/sun-regular.svg";
    }
    theme.classList.toggle("light-nav");
 });