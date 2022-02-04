const headerInfo = document.querySelector(".loading");
headerInfo.style.color = "black";
headerInfo.style.fontSize = "50px";
setTimeout(function(){
    headerInfo.innerHTML = "DONE"
}, 5000)

const button = document.querySelector(".btn");
setTimeout(function() {
    button.innerHTML = "HACKED"
    
}, 400)