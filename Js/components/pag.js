export const plantillaPagination = async (dato)=>{
    let plantilla = "";
    for (let index = 1; index < dato+1; index++) {
        plantilla += /*html*/`
            <a href="#" class="pagination" id="${index}">${index}</a>
        `
    }
    return plantilla;
}