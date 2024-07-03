document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.spacexdata.com/v4/rockets')
        .then(response => response.json())
        .then(data => {
            const falconHeavy = data.find(rocket => rocket.name === 'Falcon Heavy');
            if (falconHeavy) {
                document.getElementById('name').textContent = falconHeavy.name;
                document.getElementById('country').textContent = falconHeavy.country;
                document.getElementById('description').textContent = falconHeavy.description;
                document.getElementById('cost_per_launch').textContent = `$${falconHeavy.cost_per_launch.toLocaleString()}`;
                document.getElementById('first_flight').textContent = falconHeavy.first_flight;
                document.getElementById('wikipedia').href = falconHeavy.wikipedia;
                document.getElementById('type').textContent = falconHeavy.type;
                if (falconHeavy.active) {
                    document.getElementById('active').textContent = 'Active';
                } else {
                    document.getElementById('active').textContent = 'Inactive';
                }
                document.getElementById('active').textContent = falconHeavy.active ? 'Active' : 'Inactive';
                document.getElementById('stages').textContent = falconHeavy.stages;
                document.getElementById('boosters').textContent = falconHeavy.boosters;

                const images = falconHeavy.flickr_images;
                if (images.length >= 4) {
                    document.getElementById('img1').style.backgroundImage = `url(${images[0]})`;
                    document.getElementById('img2').style.backgroundImage = `url(${images[1]})`;
                    document.getElementById('img3').style.backgroundImage = `url(${images[2]})`;
                    document.getElementById('img4').style.backgroundImage = `url(${images[3]})`;
                }

                const legs = {
                    landing_legs: {
                        number: 12,
                        material: "carbon fiber"
                    }
                };
                document.getElementById('landing_legs_number').textContent = legs.landing_legs.number;
                document.getElementById('landing_legs_m').textContent = legs.landing_legs.material;

                const engines = falconHeavy.engines;
                document.getElementById('engine_type').textContent = engines.type;
                document.getElementById('engine_version').textContent = engines.version;
                document.getElementById('engine_layout').textContent = engines.layout;
                document.getElementById('engine_loss_max').textContent = engines.engine_loss_max;
                document.getElementById('engine_propellant_1').textContent = engines.propellant_1;
                document.getElementById('engine_propellant_2').textContent = engines.propellant_2;

                const mass = falconHeavy.mass;
                document.getElementById('kg').textContent = mass.kg;
                document.getElementById('lb').textContent = mass.lb;
            }
        });
});
