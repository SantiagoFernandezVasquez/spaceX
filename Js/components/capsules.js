document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.spacexdata.com/v4/capsules')
        .then(response => response.json())
        .then(data => {
            const containers = document.querySelector('.containers');
            data.forEach(capsule => {
                const container = document.createElement('div');
                container.classList.add('container');

                // Type section
                const typeSection = document.createElement('section');
                typeSection.classList.add('title');
                const typeParagraph = document.createElement('p');
                typeParagraph.textContent = capsule.type;
                typeSection.appendChild(typeParagraph);
                container.appendChild(typeSection);

                const lastUpdateSection = document.createElement('section');
                lastUpdateSection.classList.add('container_left');
                const lastUpdateDiv = document.createElement('div');
                lastUpdateDiv.classList.add('informacion1');
                const lastUpdateText = document.createElement('div');
                lastUpdateText.classList.add('texto1');
                const lastUpdateBold = document.createElement('b');
                lastUpdateBold.textContent = 'Last update';
                const lastUpdateParagraph = document.createElement('p');
                lastUpdateParagraph.textContent = capsule.last_update;
                lastUpdateText.appendChild(lastUpdateBold);
                lastUpdateText.appendChild(lastUpdateParagraph);
                lastUpdateDiv.appendChild(lastUpdateText);
                lastUpdateSection.appendChild(lastUpdateDiv);
                container.appendChild(lastUpdateSection);

                const infoSection = document.createElement('section');
                infoSection.classList.add('container_center');
                const infoDiv = document.createElement('div');
                infoDiv.classList.add('container_max');
                const smallContainer = document.createElement('div');
                smallContainer.classList.add('small_container1');
                const infoTitle = document.createElement('b');
                infoTitle.textContent = 'INFORMATION ROCKET';
                const separator = document.createElement('div');
                separator.classList.add('separador');
                const infoContent = document.createElement('div');
                infoContent.classList.add('info');
                const infoDetails = document.createElement('div');
                infoDetails.classList.add('information5');

                const infoDetailsContent = `
                    <p>Type</p>
                    <p>Status</p>
                    <p>Serial</p>
                    <p>Water landings</p>
                    <p>Land landings</p>
                    <div class="infmini">
                        <p1>${capsule.type}</p1>
                        <p1>${capsule.status}</p1>
                        <p1>${capsule.serial}</p1>
                        <p1>${capsule.water_landings}</p1>
                        <p1>${capsule.land_landings}</p1>
                    </div>
                `;

                infoDetails.innerHTML = infoDetailsContent;
                infoContent.appendChild(infoDetails);
                smallContainer.appendChild(infoTitle);
                smallContainer.appendChild(separator);
                smallContainer.appendChild(infoContent);
                infoDiv.appendChild(smallContainer);
                infoSection.appendChild(infoDiv);
                container.appendChild(infoSection);

                containers.appendChild(container);
            });
        })
    });
