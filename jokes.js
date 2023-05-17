const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke");
const apikey = "UyPDFKrDsi2j3KMGyoZSoQ==lJhsqiByZj7DYFxT";
const options ={
    method : "GET",
    headers:{
        "X-Api-Key": apikey,
    },
};
const apiurl ="https://api.api-ninjas.com/v1/jokes?limit=1";
async function getjoke(){
    jokeEl.innerText="updating";
    const response =await fetch(apiurl,options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getjoke);


