import { plantillaImg } from "./img.js";
import { plantillaPagination } from "./pagination.js";
import { plantillaGraphics } from "./graphicsCircle.js";

export const plantillaRockets = async (data, alldata)=>{
    let plantilla = "";
    let estado = false;
    let plantillaimg = "";
    let plantillaPag = "";
    let plantillaGrap = "";
    plantillaimg = await plantillaImg(data.flickr_images);
    plantillaPag = await plantillaPagination(alldata.length);
    plantillaGrap = await plantillaGraphics(data.payload_weights.length, data);
    if (data.active == true){
        estado = "Active";
    }else{estado = "Inactive"};
    plantilla += /*html*/`
        <div class="column left">
            <ul class="list">
                <li><img src="storage/img/item.svg">Decription:</li>
                <p>${data.description}</p>
                <li><img src="storage/img/item.svg">More info:</li>
                <a href="${data.wikipedia}">Wikipedia</a>
            </ul>
            <ul class="list">
                <li><img src="storage/img/item.svg">First stage</li>
            </ul> 
            <table>
                <tbody>
                    <tr>
                        <td>Reusable</td>
                        <td>${data.first_stage.reusable}</td>
                    </tr>
                    <tr>
                        <td>Engines</td>
                        <td>${data.first_stage.engines}</td>
                    </tr>
                    <tr>
                        <td>Fuel amount tons</td>
                        <td>${data.first_stage.fuel_amount_tons}</td>
                    </tr>
                    <tr>
                        <td>Burn time sec</td>
                        <td>${data.first_stage.burn_time_sec}</td>
                    </tr>
                </tbody>
            </table>
            <ul class="list">
                <li><img src="storage/img/item.svg">Second stage</li>
            </ul>    
            <table>
                <tbody>
                    <tr>
                        <td>Reusable</td>
                        <td>${data.second_stage.reusable}</td>
                    </tr>
                    <tr>
                        <td>Engines</td>
                        <td>${data.second_stage.engines}</td>
                    </tr>
                    <tr>
                        <td>Fuel amount tons</td>
                        <td>${data.second_stage.fuel_amount_tons}</td>
                    </tr>
                    <tr>
                        <td>Burn time sec</td>
                        <td>${data.second_stage.burn_time_sec}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column center">
            <div class="section">
                <div class="title-section">
                    <h2>${data.name.toUpperCase()}</h2>
                    <div class="circular-bar">
                        ${plantillaGrap}
                    </div>
                </div>
            </div>
            <div class="horizontal-sections">
                <div class="scroll-container">
                    <h5>Information rocket</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${data.name}</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>${data.type}</td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td>${estado}</td>
                            </tr>
                            <tr>
                                <td>Stages:</td>
                                <td>${data.stages}</td>
                            </tr>
                            <tr>
                                <td>Boosters:</td>
                                <td>${data.boosters}</td>
                            </tr>
                            <tr>
                                <td>Cost per launch:</td>
                                <td>${data.cost_per_launch}</td>
                            </tr>
                            <tr>
                                <td>Success rate pct:</td>
                                <td>${data.success_rate_pct}</td>
                            </tr>
                            <tr>
                                <td>First flight:</td>
                                <td>${data.first_flight}</td>
                            </tr>
                            <tr>
                                <td>Country:</td>
                                <td>${data.country}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>${data.company}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="image-container">
                    ${plantillaimg}
                </div>
                <div class="scroll-container">
                    <h5>Engine Information</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>ISP:</td>
                                <td>${data.engines.isp.sea_level}</td>
                            </tr>
                            <tr>
                                <td>Thrust sea level:</td>
                                <td>${data.engines.thrust_sea_level.kN} kN</td>
                            </tr>
                            <tr>
                                <td>Thrust vacuum:</td>
                                <td>${data.engines.thrust_vacuum.kN} kN</td>
                            </tr>
                            <tr>
                                <td>Number:</td>
                                <td>${data.engines.number}</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>${data.engines.type}</td>
                            </tr>
                            <tr>
                                <td>Version:</td>
                                <td>${data.engines.version}</td>
                            </tr>
                            <tr>
                                <td>Layout:</td>
                                <td>${data.engines.layout}</td>
                            </tr>
                            <tr>
                                <td>Engine loss max:</td>
                                <td>${data.engines.engine_loss_max}</td>
                            </tr>
                            <tr>
                                <td>Propellant 1:</td>
                                <td>${data.engines.propellant_1}</td>
                            </tr>
                            <tr>
                                <td>Propellant 2:</td>
                                <td>${data.engines.propellant_2}</td>
                            </tr>
                            <tr>
                                <td>Thrust_to_weight:</td>
                                <td>${data.engines.thrust_to_weight}</td>
                            </tr>
                            <tr>
                                <td>Landing legs-number:</td>
                                <td>${data.landing_legs.number}</td>
                            </tr>
                            <tr>
                                <td>Landing legs-material:</td>
                                <td>${data.landing_legs.material}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="column right">
            <table>
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>${data.height.meters} m</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.height.feet} ft</td>    
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>${data.diameter.meters} m</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.diameter.feet} ft</td>    
                    </tr>
                    <tr>
                        <td>Mass</td>
                        <td>${data.mass.kg} kg</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.mass.lb} lb</td>    
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>First stage</td>
                    </tr>
                    <tr>
                        <td>Thrust sea level</td>
                        <td>${data.first_stage.thrust_sea_level.kN} kN</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.first_stage.thrust_sea_level.lbf} lbf</td>    
                    </tr>
                    <tr>
                        <td>Thrust vacuum</td>
                        <td>${data.first_stage.thrust_vacuum.kN} kN</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.first_stage.thrust_vacuum.lbf} lbf</td>    
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Second stage</td>
                    </tr>
                    <tr>
                        <td>Thrust</td>
                        <td>${data.second_stage.thrust.kN} kN</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.second_stage.thrust.lbf} lbf</td>    
                    </tr>
                    <tr>
                        <td>Payloads-composite fairing-height</td>
                        <td>${data.second_stage.payloads.composite_fairing.height.meters} m</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.second_stage.payloads.composite_fairing.height.feet} ft</td>    
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>${data.second_stage.payloads.composite_fairing.diameter.meters} m</td>
                    </tr>
                    <tr>
                        <td><div class="progress-bar" style="width: 85%; background-color: #f44336;">85%</div></td>
                        <td>${data.second_stage.payloads.composite_fairing.diameter.feet} ft</td>    
                    </tr>
                </tbody>
            </table>
            <div class="pagination-container">
                ${plantillaPag}
            </div>
        </div>
    `;
    return plantilla;
};