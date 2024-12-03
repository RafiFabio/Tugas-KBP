const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const list = document.querySelectorAll("li");
const paragraph = document.querySelectorAll("P");

container1.style.backgroundColor = "Yellow";
container2.style.backgroundColor = "Green";

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.backgroundColor = 'Blue';
}

for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = 'Yellow';
    list[i].style.fontWeight = '';
    list[i].style.fontFamily = 'TMS';
}