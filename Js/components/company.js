async function fetchCompanyData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        const data = await response.json();
        updateCompanyInfo(data);
    } catch (error) {
        console.error('Error fetching company data:', error);
    }
}
function updateCompanyInfo(data) {
    document.querySelector('.title p').innerText = data.name;
    document.querySelector('.texto1 p').innerText = data.summary;
    document.querySelector('.texto2 p').innerText = data.founder;
    document.querySelector('.texto3 p').innerText = `$${data.valuation.toLocaleString()}`;
    document.querySelector('.texto4 p').innerHTML = `<a href="${data.links.website}" target="_blank">${data.links.website}</a>`;
}

window.onload = fetchCompanyData;
