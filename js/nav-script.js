window.oncontextmenu = function () {
    
    navMenu('nav-container');
    return false;
                
}


function navMenu(id) {
    
    toggle_visibility(id);
    
    var e = document.getElementById(id);
    e.style.left = mouse.x;
    e.style.top = mouse.y;
    
}

var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
}, false);