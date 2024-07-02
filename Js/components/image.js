export const plantillaImg = async (data)=>{
    let plantilla = "";
    data.forEach(element => {
        plantilla += /*html*/`
            <img src="${element}" referrerpolicy="no-referrer">
        `
    });
    return plantilla;
}    