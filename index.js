window.addEventListener('load',changeImg)
window.addEventListener('resize',changeImg)

function changeImg(){
    var element=document.getElementById('resize-img');
    if(window.innerWidth < 700){
        element.classList.remove('left-large');
        element.classList.add('left-small');
    }
    else{
        element.classList.remove('left-small');
        element.classList.add('left-large');  
    }
}