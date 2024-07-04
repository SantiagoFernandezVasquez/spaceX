document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.spacexdata.com/v4/history')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.containers');
            data.forEach(item => {
                const titleSection = document.querySelector('.title p');
                const detailsSection = document.querySelector('.texto1 p');
                const dateSection = document.querySelector('.texto3 p');
                const linkSection = document.querySelector('.texto4 p');
                
                titleSection.textContent = item.title;
                detailsSection.textContent = item.details;
                dateSection.textContent = new Date(item.event_date_utc).toLocaleString();
                linkSection.innerHTML = `<a href="${item.links.article}" target="_blank">Read more</a>`;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const itemsPerPage = 5;

    function fetchData(page) {
        fetch(`https://api.spacexdata.com/v4/history?limit=${itemsPerPage}&offset=${(page - 1) * itemsPerPage}`)
            .then(response => response.json())
            .then(data => {
                displayData(data);
                updatePaginationInfo(data.length, page);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayData(data) {
        const eventsContainer = document.getElementById('eventsContainer');
        eventsContainer.innerHTML = '';

        data.forEach(item => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';

            eventDiv.innerHTML = `
                <div class="informacion1">
                    <img src="Storage/Img/Icon.svg">
                    <div class="texto1">
                        <b>History</b>
                        <p>${item.details}</p>
                    </div>
                </div>
                <div class="informacion3">
                    <img src="Storage/Img/Icon.svg">
                    <div class="texto3">
                        <b>The date</b>
                        <p>${new Date(item.event_date_utc).toLocaleString()}</p>
                    </div>
                </div>
                <div class="informacion4">
                    <img src="Storage/Img/Icon.svg">
                    <div class="texto4">
                        <b>Read more</b>
                        <p><a href="${item.links.article}" target="_blank">Link</a></p>
                    </div>
                </div>
            `;

            eventsContainer.appendChild(eventDiv);
        });
    }

    function updatePaginationInfo(totalItems, currentPage) {
        const pageInfo = document.getElementById('pageInfo');
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === totalPages;
    }

    document.getElementById('prevPage').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            fetchData(currentPage);
        }
    });

    document.getElementById('nextPage').addEventListener('click', function () {
        currentPage++;
        fetchData(currentPage);
    });

    fetchData(currentPage);
});

