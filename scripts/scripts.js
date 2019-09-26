function openNav() {
    document.getElementById("sidenav").style.right = "0px";
}
function closeNav() {
    if (window.innerWidth <= 700)
        document.getElementById("sidenav").style.right = "-250px"; 
}

window.onresize = () => {
    if (window.innerWidth > 700)
        document.getElementById("sidenav").style.right = "0px";
    else    
        document.getElementById("sidenav").style.right = "-250px";
}