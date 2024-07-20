var box1 = document.getElementsByClassName("box1");
var box2 = document.getElementsByClassName("box2");


var flag1 =true;
function myFun() {
    if(flag1) {
        for (let i = 0; i < 2; i++) {
            box1[i].style.backgroundColor = "blue";
            box2[i].style.backgroundColor = "#F7B7B7";

            box1[i].style.color = "white";
            box2[i].style.color = "black";
        }
        flag1 = false;
    }
    else {
        for (let i = 0; i < 2; i++) {
            box1[i].style.backgroundColor = "#F7B7B7";
            box2[i].style.backgroundColor = "blue";

            box1[i].style.color = "black";
            box2[i].style.color = "white";
        }
        flag1 = true
    }
}

var flag2 = true;
function myFun1() {
    if(flag2) {
        for (let i = 0; i < 2; i++) {
            box2[i].style.backgroundColor = "blue";
            box1[i].style.backgroundColor = "#F7B7B7";

            box2[i].style.color = "white";
            box1[i].style.color = "black";


        }
        flag2 = false;
    }
    else {
        for (let i = 0; i < 2; i++) {
            box2[i].style.backgroundColor = "#F7B7B7";
            box1[i].style.backgroundColor = "blue";

            box2[i].style.color = "black";
            box1[i].style.color = "white";
        }
        flag2 = true
    }
}