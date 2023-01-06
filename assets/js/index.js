function calcular () {
    const cantidad = document .querySelector('#cantidad').value;
    const color = document .querySelector('#color').value;
    const precio = document .querySelector('#precio').innerHTML;

    console.log('Cantidad: ', cantidad)
    console.log('Color: ', color)
    console.log('precio: ', precio)

    document.querySelector('#resumen_total').innerHTML = cantidad * precio
    document.querySelector('#resumen_cantidad').innerHTML = cantidad
    document.querySelector('#resumen_color').style.backgroundColor = color 
}   