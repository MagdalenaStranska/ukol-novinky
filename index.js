const bodyElement = document.querySelector("body")

bodyElement.style.backgroundColor = "#e9e9e9"

const novinky = document.querySelector(".news")

novinky.style.backgroundColor = "white"
novinky.style.width = "60rem"

const nadpis = document.querySelector("h1")
nadpis.classList.add("news__title")
nadpis.textContent = "Aktualní novinky"

const zprava1 = document.querySelector("#zprava1")
zprava1.classList.add("post--main")

const zprava3 = document.querySelector("#zprava3 img")
zprava3.src = "images/zprava3-novy.jpg"
console.log(zprava3)