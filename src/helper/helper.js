import ImgDunkin from "../assets/imgs/dunkin.jpg";
import ImgMcdonalds from "../assets/imgs/mcdonalds.jpg";
import ImgStarbucks from "../assets/imgs/starbucks.jpg";
import ImgPizzaH from "../assets/imgs/pizzahut.jpg";
import ImgSubway from "../assets/imgs/subway.jpg";
import ImgBembos from "../assets/imgs/bembos.jpg";

const locales = [
    {
        "id":1,
        "nombre":"Dunkin Donuts",
        "img":ImgDunkin,
        "calificacion":4.5,
    },
    {
        "id":2,
        "nombre":"McDonald's",
        "img":ImgMcdonalds,
        "calificacion":3.5,
    },
    {
        "id":3,
        "nombre":"Starbucks",
        "img":ImgStarbucks,
        "calificacion":4,
    },
    {
        "id":4,
        "nombre":"Bembos",
        "img":ImgBembos,
        "calificacion":3,
    },
    {
        "id":5,
        "nombre":"Subway",
        "img":ImgSubway,
        "calificacion":3.7,
    }
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(locales)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch
