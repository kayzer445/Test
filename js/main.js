var show = false;

function showMenu(p){
    show = !show;
    if(show)
        document.getElementById("menu").style.display = "block";
    else
        document.getElementById("menu").style.display = "none";
}