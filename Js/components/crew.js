import { getLaunche } from "../modules/app.js";
import { plantillaPagination } from "./pagination.js";

export const plantillaCrew = async (data)=>{
    let plantilla = "";
    let plantillaPag = "";
    plantillaPag = await plantillaPagination(10);
    for (const element of data){
        let launche = await getLaunche(element.launches);
        plantilla += /*html*/`
            <article class="info__member">
                <div class="container__info">
                    <div class="content__info">
                        <h1>${element.name}</h1>
                        <h5>${element.agency} - ${element.status.toUpperCase()}</h5>
                        <p>Biografia da click <a href="${element.wikipedia}" style="color: white">aqui</a></p>
                        <p>Participo en:<br>${launche.name}</p>
                    </div>
                    <div class="image__info">
                        <img src="${element.image}" referrerpolicy="no-referrer">
                    </div>
                </div>
                <div class="pagination-container">
                    ${plantillaPag}
                </div>
            </article>
        `;
    };
    return plantilla;
};