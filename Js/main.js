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
                    document.getElementById('active').textContent = 'False';
                }
                document.getElementById('stages').textContent = falconHeavy.stages;
                document.getElementById('boosters').textContent = falconHeavy.boosters; 

                const images = falconHeavy.flickr_images;
                if (images.length >= 4) {
                    document.getElementById('img1').style.backgroundImage = `url(${images[0]})`;
                    document.getElementById('img2').style.backgroundImage = `url(${images[1]})`;
                    document.getElementById('img3').style.backgroundImage = `url(${images[2]})`;
                    document.getElementById('img4').style.backgroundImage = `url(${images[3]})`;
                
                const falconHeavy = {
                    landing_legs: {
                        number: 12,
                        material: "carbon fiber"
                    }
                };
                
                document.getElementById('landing_legs_number').textContent = falconHeavy.landing_legs.number;
                document.getElementById('landing_legs_m').textContent = falconHeavy.landing_legs.material;   
                      
                const engines = falconHeavy.engines;
                document.getElementById('engine_type').textContent = `Type: ${engines.type}`;
                document.getElementById('engine_version').textContent = `Version: ${engines.version}`;
                document.getElementById('engine_layout').textContent = `Layout: ${engines.layout}`;
                document.getElementById('engine_loss_max').textContent = `Engine Loss Max: ${engines.engine_loss_max}`;
                document.getElementById('engine_propellant_1').textContent = `Propellant 1: ${engines.propellant_1}`;
                document.getElementById('engine_propellant_2').textContent = `Propellant 2: ${engines.propellant_2}`;
                }
            }
        })
});
    

    