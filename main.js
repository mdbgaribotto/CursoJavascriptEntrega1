let nombreIngresado = prompt("Ingrese su nombre")
console.log(nombreIngresado);

let productos = [{id: 1 , nombreProducto: "Llavero", precio: 800 },
    {id: 2, nombreProducto: "Foto", precio: 500},
    {id: 3, nombreProducto: "Cuadro", precio: 1200}];

const listaNombre   = productos.map ( producto => producto.nombreProducto )
console.log(listaNombre)
alert("Estos son los productos disponibles " + listaNombre );


let productoBuscado = prompt("Ingrese el nombre del producto")
console.log(productoBuscado);

let buscador = productos.find ( producto => producto.nombreProducto  === productoBuscado);
console.log(buscador);
alert("El precio es $" + buscador.precio);

alert("A continuacion podra calcular el valor de las cuotas")
let montoIngresado = prompt("Ingrese el importe")
console.log(montoIngresado);

let cuotasIngresadas = prompt("Ingrese las cuotas deseadas (3,6 o 12)")
console.log(cuotasIngresadas);

let resultado = 0

function validarCuotas(primerNumero, segundoNumero) {
    resultado = primerNumero / segundoNumero;
    if (segundoNumero == 3)
        resultado = resultado * 1.05;
    else if (segundoNumero == 6)
        resultado = resultado * 1.15;
    else if (segundoNumero == 12)
        resultado = resultado * 1.20;
        else resultado = 0;
}

validarCuotas(montoIngresado, cuotasIngresadas);

console.log(resultado);

function validarResultado(resultado) {
    if (resultado == 0)
    alert("No es posible realizar el pago en esas cuotas.");
    else alert("El valor de la cuota es $" + resultado);}

validarResultado(resultado);

let productoOferta = prompt("Ingrese el valor de su presupuesto")
console.log(productoOferta);
const oferta = productos.filter( producto => producto.precio < productoOferta)
console.log(oferta)


alert("Que producto queres agregar al carrito")
let productoCarrito = [];
let newProduct = prompt("Ingrese el producto");

function agregarCarrito() {
    
        let buscadorCarrito = productos.find ( producto => producto.nombreProducto  === newProduct);
        productoCarrito.push(buscadorCarrito)
        console.log(buscadorCarrito);
    }
agregarCarrito();










