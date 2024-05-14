<script>
// Datos iniciales de ejemplo
const initialProducts = [
    { id: '001', name: 'Pepsi', type: 'Líquido', quantity: 150, expiration: '2024-12-01' },
    { id: '002', name: 'Muffin', type: 'Masas', quantity: 32, expiration: '2024-05-23' }
];

// Función para inicializar los datos del producto
function initializeProducts() {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(initialProducts));
    }
}

// Función para cargar productos en la tabla
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla

    products.forEach(product => {
        const row = `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.type}</td>
            <td>${product.quantity}</td>
            <td>${product.expiration}</td>
            <td>
                <button class="action-btn" onclick="editProduct('${product.id}')">Editar</button>
                <button class="action-btn" onclick="deleteProduct('${product.id}')">Eliminar</button>
                <button class="action-btn" onclick="replenishProduct('${product.id}', 10)">Reponer</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Funciones de edición, eliminación y reposición de productos
function editProduct(id) {
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === id);
    console.log('Editando producto', product);
    // Aquí deberías implementar un formulario o una interfaz para editar el producto
}

function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    products = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts(); // Recargar la lista de productos
}

function replenishProduct(id, amount) {
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === id);
    product.quantity += amount;
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts(); // Recargar la lista de productos
}

// Inicializar y cargar productos cuando la página esté lista
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    loadProducts();
});
</script>
