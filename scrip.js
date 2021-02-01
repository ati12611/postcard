
let switchMode = document.getElementById("switchMode");
let textDarkMode = document.getElementById("dark")

switchMode.onclick = function () {
    let theme = document.getElementById("theme")
    
    
    if (theme.getAttribute("href") == "style.css"){
        theme.href = "dark-mode.css";
        textDarkMode = "Lightmode";
        
    }else {
        theme.href = "style.css"
    }
    
}

