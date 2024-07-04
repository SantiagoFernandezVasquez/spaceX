document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.spacexdata.com/v4/landpads')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.containers');
            data.forEach(item => {
                const titleSection = document.querySelector('.title p');
                const detailsSection = document.querySelector('.texto1 p');
                const detailRegion = document.querySelector('.texto2 p');
                const landings = document.querySelector('.texto3 p');
                const linkSection = document.querySelector('.texto4 p');

                titleSection.textContent = item.full_name;
                detailsSection.textContent = item.details;
                detailRegion.textContent = `Region: ${item.region}`;
                landings.textContent = `Successful Landings: ${item.landing_successes}`;
                linkSection.innerHTML = `<a href="${item.wikipedia}" target="_blank">Wikipedia</a>`;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
