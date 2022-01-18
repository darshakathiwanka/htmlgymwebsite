var dropdown_on = false;
function dropdown(menu){
    if(dropdown_on){
        document.getElementById("dropdown").style.height = "0";
        document.getElementById("dropdown-links").style.display = "none";
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
        dropdown_on = false;            
    }else{
        document.getElementById("dropdown").style.height = "215px";
        document.getElementById("dropdown-links").style.display = "block";
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
        dropdown_on = true;                
    }
}