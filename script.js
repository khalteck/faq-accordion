//the faq questions
/*let q1 = document.getElementById("q1"); let q2 = document.getElementById("q2"); let q3 = document.getElementById("q3"); let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");

//the faq answers
const ans1 = document.getElementById("ans1"); const ans2 = document.getElementById("ans2"); const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4"); const ans5 = document.getElementById("ans5");

//the close dropdown arrows
let close1 = document.getElementById("close1"); let close2 = document.getElementById("close2"); let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4"); let close5 = document.getElementById("close5");

//to display the faq answers
let clicked1 = false; let clicked2 = false; let clicked3 = false; let clicked4 = false; let clicked5 = false;
q1.addEventListener("click", () => {
    if (clicked1 === false) {
        ans1.classList.remove("hide");
        close1.style.transform = "rotate(180deg)";
        clicked1 = true;
    } else if (clicked1 === true) {
        ans1.classList.add("hide");
        close1.style.transform = "rotate(360deg)";
        clicked1 = false;
    }
})
q2.addEventListener("click", () => {
    if (clicked2 === false) {
        ans2.classList.remove("hide");
        close2.style.transform = "rotate(180deg)";
        clicked2 = true;
    } else if (clicked2 === true) {
        ans2.classList.add("hide");
        close2.style.transform = "rotate(360deg)";
        clicked2 = false;
    }
})
q3.addEventListener("click", () => {
    if (clicked3 === false) {
        ans3.classList.remove("hide");
        close3.style.transform = "rotate(180deg)";
        clicked3 = true;
    } else if (clicked3 === true) {
        ans3.classList.add("hide");
        close3.style.transform = "rotate(360deg)";
        clicked3 = false;
    }
})
q4.addEventListener("click", () => {
    if (clicked4 === false) {
        ans4.classList.remove("hide");
        close4.style.transform = "rotate(180deg)";
        clicked4 = true;
    } else if (clicked4 === true) {
        ans4.classList.add("hide");
        close4.style.transform = "rotate(360deg)";
        clicked4 = false;
    }
})
q5.addEventListener("click", () => {
    if (clicked5 === false) {
        ans5.classList.remove("hide");
        close5.style.transform = "rotate(180deg)";
        clicked5 = true;
    } else if (clicked5 === true) {
        ans5.classList.add("hide");
        close5.style.transform = "rotate(360deg)";
        clicked5 = false;
    }
})*/

//using jquery
/*$(document).ready(function() {
    let clicked = false;
    $(".quest").click(function(){
        if(clicked == false) {
            $(".quest :nth-child(2)").removeClass("hide");
            $(".quest-cont :nth-child(2)").css("transform", "rotate(180deg)");
            $(".quest :nth-child(2)").css("transform", "rotate(0deg)");
            clicked = true;
        } else if(clicked == true) {
            $(".quest :nth-child(2)").addClass("hide");
            $(".quest-cont :nth-child(2)").css("transform", "rotate(360deg)");
            clicked = false;
        }
    })
    }
  );*/


let questCont = document.querySelectorAll(".quest-cont");
let qaCont = document.querySelectorAll(".quest");

//for each quest cont
questCont.forEach((que, index) => {
    let hiddenAns = qaCont[index].lastElementChild;
    let close = questCont[index].lastElementChild;
    let clicked = false;
    que.addEventListener("click", () => {
        if (clicked === false) {
            hiddenAns.classList.remove("hide");
            close.style.transform = "rotate(180deg)";
            clicked = true;
        } else if (clicked === true) {
            hiddenAns.classList.add("hide");
            close.style.transform = "rotate(360deg)";
            clicked = false;
        }

    })
})