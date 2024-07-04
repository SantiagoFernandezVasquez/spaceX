document.addEventListener('DOMContentLoaded', function() {
    // Elementos HTML donde se mostrarán los datos
    const elements = {
        serial: document.querySelector('.title p'),
        lastUpdate: document.querySelector('.informacion1 .texto1 p'),
        wikipedia: document.querySelector('.informacion4 .texto4 p'),
        reuseCounts: document.querySelector('.information5 .infmini p:nth-child(1)'),
        serialMini: document.querySelector('.information5 .infmini p:nth-child(2)'),
        status: document.querySelector('.infmini p:nth-child(3)')
    };

    const apiUrl = 'https://api.spacexdata.com/v4/cores';

    function fetchAndDisplayData(url) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    const coreData = data[0];
                    updateUI(coreData);
                }
            })
    }
    function updateUI(coreData) {
        elements.serial.textContent = coreData.serial;
        elements.lastUpdate.textContent = coreData.last_update;
        elements.reuseCounts.textContent = coreData.reuse_count;
        elements.serialMini.textContent = coreData.serial;
        elements.status.textContent = coreData.status;
    }
    fetchAndDisplayData(apiUrl);
});
