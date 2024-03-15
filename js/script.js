
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
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-01', 
                extendedProps: { 
                    description: `Lugar: Salón Esplendoroso. Hora: 15:00`
                } 
            },
            { 
                title: 'Oceanic Delights', 
                date: '2024-03-03', 
                extendedProps: { 
                    description: `Lugar: Espacio Festivo. Hora: 17:00`
                } 
            },
            { 
                title: 'Tico Tastes', 
                date: '2024-03-05', 
                extendedProps: { 
                    description: `Lugar: Batara. Hora: 8:30`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-07', 
                extendedProps: { 
                    description: `Lugar: Salón de las Estrellas. Hora: 19:00`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-10', 
                extendedProps: { 
                    description: `Lugar: Sala Brillante. Hora: 14:00`
                } 
            },
            { 
                title: 'Oceanic Delights', 
                date: '2024-03-12', 
                extendedProps: { 
                    description: `Lugar: Salón Esplendoroso. Hora: 16:30`
                } 
            },
            { 
                title: 'Tico Tastes', 
                date: '2024-03-15', 
                extendedProps: { 
                    description: `Lugar: Espacio Festivo. Hora: 20:00`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-18', 
                extendedProps: { 
                    description: `Lugar: Sala de Celebraciones. Hora: 15:30`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-20', 
                extendedProps: { 
                    description: `Lugar: Salón de las Estrellas. Hora: 18:00`
                } 
            },
            { 
                title: 'Oceanic Delights Catering', 
                date: '2024-03-22', 
                extendedProps: { 
                    description: `Lugar: Sala Brillante. Hora: 19:00`
                } 
            },
            { 
                title: 'Tico Tastes', 
                date: '2024-03-24', 
                extendedProps: { 
                    description: `Lugar: Salón Esplendoroso. Hora: 16:00`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-26', 
                extendedProps: { 
                    description: `Lugar: Espacio Festivo. Hora: 17:30`
                } 
            },
            { 
                title: 'Oceanic Delights', 
                date: '2024-03-28', 
                extendedProps: { 
                    description: `Lugar: Sala de Celebraciones. Hora: 18:30`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-29', 
                extendedProps: { 
                    description: `Lugar: Salón de las Estrellas. Hora: 14:30`
                } 
            },
            { 
                title: 'Oceanic Delights', 
                date: '2024-03-31', 
                extendedProps: { 
                    description: `Lugar: Sala Brillante. Hora: 19:30`
                } 
            },
            { 
                title: 'Tico Tastes', 
                date: '2024-03-01', 
                extendedProps: { 
                    description: `Lugar: Salón Esplendoroso. Hora: 15:00`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-03', 
                extendedProps: { 
                    description: `Lugar: Espacio Festivo. Hora: 17:00`
                } 
            },
            { 
                title: 'Oceanic Delights', 
                date: '2024-03-05', 
                extendedProps: { 
                    description: `Lugar: Sala de Celebraciones. Hora: 18:30`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-07', 
                extendedProps: { 
                    description: `Lugar: Coquito. Hora: 21:00`
                } 
            },
            { 
                title: 'Le Carné Exquis', 
                date: '2024-03-10', 
                extendedProps: { 
                    description: `Lugar: Sala Brillante. Hora: 14:00`
                } 
            }
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

// New catering form 
function addPackage() {
    const packagesDiv = document.getElementById('packages');
    const newPackage = packagesDiv.children[0].cloneNode(true);
    newPackage.querySelectorAll('input, textarea, .dishes-container').forEach(input => {
      if (input.tagName === 'DIV') {
        input.innerHTML = ''; // 
      } else {
        input.value = '';
      }
    });
    newPackage.querySelector('.addDishToPackage').addEventListener('click', addDishToPackage);
    packagesDiv.appendChild(newPackage);
  }
  
  function addDish() {
    const menuDiv = document.getElementById('menu');
    const newDish = menuDiv.children[0].cloneNode(true);
    newDish.querySelectorAll('input').forEach(input => input.value = '');
    menuDiv.appendChild(newDish);
  }
  
  function addDishToPackage(event) {
    const dishesContainer = event.target.nextElementSibling;
    const newDish = document.createElement('div');
    newDish.classList.add('dish-item');
    newDish.innerHTML = `
      <div class="form-row">
        <div class="col">
          <label>Dish Name</label>
          <input type="text" class="form-control" required>
        </div>
        <div class="col">
          <label>Dish Price</label>
          <input type="number" class="form-control" required>
        </div>
      </div>
      <label>Dish Description</label>
      <textarea class="form-control" rows="2" required></textarea>
      <label>Dish Image</label>
      <input type="file" class="form-control-file">
    `;
    dishesContainer.appendChild(newDish);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.addDishToPackage').forEach(button => {
      button.addEventListener('click', addDishToPackage);
    });
  });
