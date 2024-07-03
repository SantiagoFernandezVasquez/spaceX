document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado.');

    fetch('https://api.spacexdata.com/v4/crew')
        .then(response => {
            console.log('Respuesta recibida de la API.');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos de la API:', data);

            const astronaut = data[0];

            document.getElementById('name').textContent = astronaut.name;
            document.getElementById('agency').textContent = astronaut.agency;
            document.getElementById('crew-image').src = astronaut.image;
            document.getElementById('wikipedia').href = astronaut.wikipedia;

            const statusElement = document.getElementById('status');
            statusElement.textContent = astronaut.status === 'active' ? 'Activo' : 'Inactivo';
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
        });
});
