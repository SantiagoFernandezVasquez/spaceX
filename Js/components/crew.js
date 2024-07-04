document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.spacexdata.com/v4/crew')
        .then(response => response.json())
        .then(data => {
            const crewMember = data[0];

            document.querySelector('.information5 .infmini p:nth-child(1)').textContent = crewMember.name;
            document.querySelector('.information5 .infmini p:nth-child(2)').textContent = crewMember.agency;

            // Actualizamos el estado (status)
            document.querySelector('.information5 .infmini p:nth-child(3)').textContent = crewMember.status;

            // Actualizamos el enlace de Wikipedia
            const wikipediaLink = document.querySelector('.texto4 a');
            wikipediaLink.textContent = 'Wikipedia';
            wikipediaLink.href = crewMember.wikipedia;

            // Actualizamos la imagen del miembro
            const crewImage = document.getElementById('crew-image');
            crewImage.src = crewMember.image;
        })
        .catch(error => console.error('Error fetching crew data:', error));
});
