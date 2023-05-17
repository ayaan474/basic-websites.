const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled =true;
        btnEl.innerText = "loading...."
        animeNameEl.innerText = "updating..."
        animeImgEl.src = "loading.svg";
        const response =await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnEl.disabled =false;
        btnEl.innerText = "GET ANIME"
        animeContainerEl.style.display ="block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;

    } catch (error) {
        console.log(error);
    }
})