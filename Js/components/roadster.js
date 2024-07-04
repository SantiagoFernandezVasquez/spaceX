document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.spacexdata.com/v4/roadster')
        .then(response => response.json())
        .then(data => {
            const titleSection = document.querySelector('.title p');
            const detailsSection = document.querySelector('.texto1 p');
            const dateSection = document.querySelector('.texto2 p');
            const distanceSection = document.querySelector('.texto3 p');
            const linkSection = document.querySelector('.texto4 p');
            
            titleSection.textContent = data.name;
            detailsSection.textContent = data.details;
            dateSection.textContent = new Date(data.launch_date_utc).toLocaleDateString();
            distanceSection.textContent = `${(data.earth_distance_km / 1000000).toFixed(2)} million km`;
            linkSection.innerHTML = `<a href="${data.wikipedia}" target="_blank">Read more</a>`;

            const images = document.querySelectorAll('.images div');
            data.flickr_images.slice(0, 4).forEach((url, index) => {
                images[index].style.backgroundImage = `url(${url})`;
            });
        })
        .catch(error => console.error('Error fetching roadster data:', error));
});
