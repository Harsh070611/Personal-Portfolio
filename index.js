const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
function func(cls,flag){
   if(cls == 'education'){
    document.getElementsByClassName(cls)[0].style.display = "inline flex";
    document.getElementsByClassName('skills')[0].style.display = "none";
    document.getElementsByClassName('certificates')[0].style.display = "none";
    document.getElementsByClassName('hobbies')[0].style.display = "none";

   }
   else if(cls == 'skills'){
    document.getElementsByClassName(cls)[0].style.display = "inline flex";
    document.getElementsByClassName('education')[0].style.display = "none";
    document.getElementsByClassName('certificates')[0].style.display = "none";
    document.getElementsByClassName('hobbies')[0].style.display = "none";

   }
   else if(cls == 'certificates'){
    document.getElementsByClassName(cls)[0].style.display = "inline flex";
    document.getElementsByClassName('education')[0].style.display = "none";
    document.getElementsByClassName('skills')[0].style.display = "none";
    document.getElementsByClassName('hobbies')[0].style.display = "none";

   }
   else if(cls == 'hobbies'){
    document.getElementsByClassName(cls)[0].style.display = "inline flex";
    document.getElementsByClassName('education')[0].style.display = "none";
    document.getElementsByClassName('certificates')[0].style.display = "none";
    document.getElementsByClassName('skills')[0].style.display = "none";

   }
}

function closemenu(){
    document.getElementById('navbarr').style.display = "none";
}
function openmenu(){
    document.getElementById('navbarr').style.display = "inline-flex";
}
let eventt = document.getElementById('navbarr')
eventt.addEventListener('click',func1);
function func1(e){
    if (window.innerWidth < 997){
        eventt.style.display = 'none';
    }
}