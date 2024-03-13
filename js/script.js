
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
// Calendar script 
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap', 
        initialView: 'dayGridMonth',
        events: [
            { title: 'Evento 1', date: '2024-03-01', extendedProps: { description: 'Descripción del Evento 1' } },
            { title: 'Evento 2', date: '2024-03-02', extendedProps: { description: 'Descripción del Evento 2' } },
            { title: 'Evento 3', date: '2024-03-03', extendedProps: { description: 'Descripción del Evento 3' } },
            { title: 'Evento 4', date: '2024-03-05', extendedProps: { description: 'Descripción del Evento 4' } },
            { title: 'Evento 5', date: '2024-03-05', extendedProps: { description: 'Descripción del Evento 5' } },
            { title: 'Evento 6', date: '2024-03-15', extendedProps: { description: 'Descripción del Evento 6' } },
            { title: 'Evento 7', date: '2024-03-20', extendedProps: { description: 'Descripción del Evento 7' } }
           
        ],
        eventClick: function(info) {
            var eventObj = info.event;
            $('#eventDetailsModalLabel').text(eventObj.title);
            $('.modal-body').text(eventObj.extendedProps.description);
            $('#eventDetailsModal').modal('show');
        }
    });

    calendar.render();
});
