import ImgImperial from "../assets/imgs/mate-imperial.jpg";
import ImgPampa from "../assets/imgs/mate-pampa.jpg";
import ImgCalabaza from "../assets/imgs/mate-calabaza02.jpg";

const mates = [
    {
       id:1,
        nombre:"Imperial",
        img:ImgImperial,
        descrip:"Elaborado con calabazas seleccionadas que tienen una característica en particular: sus paredes son gruesas, porque al ser forradas en cuero ancho, lo harán más pesado, una característica distintiva de este tipo de mate.",
        precio: 3500,
        cant:100,
        color:["rojo","azul","verde"],
        categoria: "Novedades"

    },
    {
        id:2,
        nombre:"Pampa",
        img:ImgPampa,
        descrip:"Son los más modernos y también son fáciles de limpiar. Los mates de silicona no fijan bacterias ni gustos, conservan el calor, son  irrompibles y de vaciado fácil. Su punto débil es que al ser flexibles, se complica un poco agarrarlos y a veces se vuelcan, pero es cuestión de acostumbrarse. Pueden encontrarse una gran variedad de colores y diseños.",
        precio: 2500,
        cant:95,
        color:["rojo","azul","verde", "morado", "rosa"],
        categoria: "Otro"
    },
    {
        id:3,
        nombre:"Calabaza",
        img:ImgCalabaza,
        descrip:"Se utiliza la fruta ahuecada como mate, puede aprietarse un poco al cebarlo para darle más sabor cítrico. Con esta combinación se aprovechan las virtudes antioxidantes de la yerba mate y la vitamina C del pomelo, fundamentales para fortalecer nuestras defensas en los meses de otoño e invierno.",
        precio: 1500,
        cant:15,
        color:["gris"],
        categoria: "Otro"
    }
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mates)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch
