
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones con la clase 'btn-request'
    const requestButtons = document.querySelectorAll('.btn-request');
    
    requestButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtén el elemento del contador del carrito
            const cartCountElement = document.getElementById('cart-count');
            // Actualiza el contador sumando 1 cada vez que se hace clic en un botón 'Request'
            let currentCount = parseInt(cartCountElement.textContent, 10);
            cartCountElement.textContent = currentCount + 1;
            
            // Mostrar notificación
            showNotification("Product added to cart!");
        });
    });
});


function showNotification(message) {
    // Crear el div de la notificación si aún no existe
    if (!document.querySelector('.notification')) {
        const notification = document.createElement('div');
        notification.classList.add('notification', 'fade-in');
        document.body.appendChild(notification);
    }
    
    // Configurar el mensaje y mostrar la notificación
    const notificationElement = document.querySelector('.notification');
    notificationElement.textContent = message;
    notificationElement.classList.add('show');
    
    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notificationElement.classList.remove('show');
    }, 3000);
}