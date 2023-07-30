const mainCard=document.querySelector(".main");
const thankYouCard=document.querySelector(".thank-you");
const submitBtn=document.querySelector(".submit");
const rating=document.getElementById("rateSelection");
const rates=document.querySelectorAll(".rating-items")

submitBtn.addEventListener("click",()=>{
    thankYouCard.classList.remove("hidden");
    mainCard.style.display="none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", ()=>{
        rating.innerText=rate.innerText;
    })
});