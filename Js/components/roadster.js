async function fetchRoadsterData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/roadster');
        const data = await response.json();
        updateRoadsterInfo(data);
    } catch (error) {
        console.error('Error fetching roadster data:', error);
    }
}
function updateRoadsterInfo(data) {
    document.querySelector('.title p').innerText = data.name;
    document.querySelector('.texto1 p').innerText = data.details;
    document.querySelector('.texto2 p').innerText = new Date(data.launch_date_utc).toLocaleDateString();
    document.querySelector('.texto3 p').innerText = `${(data.earth_distance_km / 1000000).toFixed(2)} million km`;
    document.querySelector('.texto4 p').innerHTML = `<a href="${data.wikipedia}" target="_blank">Read more</a>`;

    if (data.flickr_images && data.flickr_images.length > 0) {
        const images = document.querySelectorAll('.images div');
        data.flickr_images.slice(0, 4).forEach((url, index) => {
            images[index].style.backgroundImage = `url(${url})`;
        });
    }
}

window.onload = fetchRoadsterData;
