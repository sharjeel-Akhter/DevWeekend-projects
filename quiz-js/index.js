const answers = ["B", "A", "C", "D", "C"];

let form = document.querySelector(".quiz-form");
let result = document.querySelector(".result");
let question = document.querySelectorAll(".question")
let score = 0;
let isSubmit = false;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

        if (isSubmit) return;

        isSubmit = true;
        userAns.forEach((ans, index) => {
            if (ans === answers[index]) {
                score++;
                question[index].classList.add("correct")
            } else {
                question[index].classList.add("wrong")
            }
        })
        resDisplay();
       
    })


function resDisplay(){
    result.classList.remove("hide")
    result.querySelector(".detail").innerText = `You Score is ${score}/5`;
}