const ratingEls = document.querySelectorAll(".rating");
let selectedRating = "";
const btnEl =document.getElementById("btn");
const containerEl = document.getElementById("container");

ratingEls.forEach((ratingEl)=>{

    ratingEl.addEventListener("click",(event)=>{
       removeActive();
       selectedRating = event.target.innerText||event.target.parentNode.innerText;

        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
    btnEl.addEventListener("click", ()=>{
        if(selectedRating !== ""){
        containerEl.innerHTML =`
        <strong>Thank uhh </strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p> Using ur feedback I will try to improve my work...</P>`

        }
    })
});

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    });
        
};