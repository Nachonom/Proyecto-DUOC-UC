$(document).ready(function() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarritoUI();

    // Función para actualizar la interfaz del carrito
    function actualizarCarritoUI() {
        const detallesCarrito = $('#detalles-carrito');
        detallesCarrito.empty();

        let totalPrecio = 0;

        carrito.forEach((producto, index) => {
            totalPrecio += producto.precio * producto.cantidad;

            detallesCarrito.append(`
                <div class="producto-carrito">
                    <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 50px; height: auto; float: left; margin-right: 10px;">
                    ${producto.titulo} - 
                    <button class="disminuir-cantidad" data-index="${index}">-</button> 
                    ${producto.cantidad} 
                    <button class="aumentar-cantidad" data-index="${index}">+</button> 
                    x $${producto.precio}  =  $${producto.precio * producto.cantidad}
                    <button class="eliminar-producto" data-index="${index}">Eliminar</button>
                </div>
            `);
        });

        $('#precio-total').text(totalPrecio.toFixed(0));
    }

    // Manejar el evento clic para aumentar la cantidad
    $(document).on('click', '.aumentar-cantidad', function() {
        const index = parseInt($(this).data('index'));
        carrito[index].cantidad++;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
    });

    // Manejar el evento clic para disminuir la cantidad
    $(document).on('click', '.disminuir-cantidad', function() {
        const index = parseInt($(this).data('index'));
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
    });

    // Manejar el evento clic para eliminar un producto
    $(document).on('click', '.eliminar-producto', function() {
        const index = $(this).data('index');
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
    });

    // Redirigir a la página de menú al hacer clic en pagar
    $(document).on('click', '#btn-pagar', function() {
        window.location.href = 'menu.html';
    });
});
