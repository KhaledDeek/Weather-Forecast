element1 = document.querySelectorAll(".num1")
function changeD(){
    for(i=0 ; i<element1.length; i++){
        x = element1[i].innerText
        b = x*9/5 + 32
        element1[i].innerText = b
    }
}

element0 = document.querySelector(".cookies")
function remove(){
    element0.remove();
}