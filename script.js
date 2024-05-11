function alertx() {
    alert("loading weather repost ....")
}

element1 = document.querySelectorAll(".num1")
ele = document.getElementById("degree")

function changeD() {
    if (ele.value =="C"){
        for(i=0 ; i<element1.length; i++){
            x = element1[i].innerText 
            b = (x-32)*5/9
            element1[i].innerText =Math.floor(b) 
        }
    }
    else if(ele.value =="F"){
        for(i=0 ; i<element1.length; i++){
            x = element1[i].innerText 
            b = (x*9/5)+32
            element1[i].innerText = Math.floor(b) 
        }
    }

}


function remove() {
    element0 = document.querySelector(".cookies")
    element0.remove();
}