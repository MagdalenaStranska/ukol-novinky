// Vytvořte si repozitář ze šablony cviceni-novinky. V repozitáři je připravena webová stránka, která zobrazuje několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly z tohoto cvičení proveďte v JavaScriptovém souboru index.js.

// 1. Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
// 2. Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
// 3. Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
// 4. Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
// 5. Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.
// Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže:

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


// Reseni dle lektora:
// // a.
// const bodyElement = document.querySelector('body');
// bodyElement.style.backgroundColor = '#e9e9e9';

// // b.
// const newsElm = document.querySelector('.news');
// newsElm.style.backgroundColor = 'white';
// newsElm.style.maxWidth = '60rem';

// // c.
// const headingElm = document.querySelector('h1');
// headingElm.classList.add('news__title');
// headingElm.textContent = 'Aktuální novinky';

// // d.
// const firstPostElm = document.getElementById('zprava1');
// firstPostElm.classList.add('post--main');

// // e.
// const lastPostImgElm = document.querySelector('#zprava3 img');
// lastPostImgElm.src = 'images/zprava3-novy.jpg';