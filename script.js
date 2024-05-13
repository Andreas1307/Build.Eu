const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');



tabs.forEach((tab, index)=> {
    tab.addEventListener('click', () => {
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active")


        allContent.forEach(content=>{content.classList.remove("active")})
        allContent[index].classList.add("active")
    }) 
})
const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle("active");
    })
}


let bar = document.getElementById("bar");
let close = document.getElementById("close");
let nav = document.getElementById("navbar")


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');

    })
}