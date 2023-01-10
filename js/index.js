console.log(productos)

function productoHTML(array) {
    
    const contenedor = document.querySelector (".contenedor")

    array.forEach((productos) => {
        const precio =document.createElement ("div")
        precio.className = "precio"
        console.log(precio)
        precio.innerHTML=  `
            <div class=contenedor-img">
                <img src = ${productos.img} alt =${productos.producto}>
             </div>
             <h2>
                ${productos.descripción}
            </h2>
            <button> Comprar
            </button>
        `
        contenedor.appendChild(precio)
    })

}

productoHTML(productos)

const carrito = document.querySelector(".compras")

carrito.addEventListener ("click", () => {
    console.log ("Usted ha agregado un producto")
})