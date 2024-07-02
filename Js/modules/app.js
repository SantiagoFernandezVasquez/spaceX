import { plantillaCrew, } from "../components/crew.js";
import { plantillaDragons } from "../components/dragons.js";
import { plantillaRockets } from "../components/rockets.js";
import { plantillaLaunches } from "../components/launches.js";

export const getLaunche = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${dato}`); 
    let data = await res.json();
    return data; 
}; 

export const getCore = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${dato}`);
    let data = await res.json();
    return data;
}

export const getLandpad = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${dato}`);
    let data = await res.json();
    return data;
}

export const getRocket = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${dato}`);
    let data = await res.json();
    return data;
}

export const getCrew = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${dato}`);
    let data = await res.json();
    return data;
}

export const getShip = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/ships/${dato}`);
    let data = await res.json();
    return data;
}

export const getCapsule = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${dato}`);
    let data = await res.json();
    return data;
}

export const getPayload = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${dato}`);
    let data = await res.json();
    return data;
}

export const getLaunchpad = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/${dato}`);
    let data = await res.json();
    return data;
}

export const getAllCrews = async (dato) => { 
    let res = await fetch("https://api.spacexdata.com/v4/crew"); 
    let data = await res.json(); 
    let plantilla= [];

    function dividirArray(array, Npartes) {
        let longitudParte = Math.ceil(array.length / Npartes);
        let partes = [];
        for (let i = 0; i < array.length; i += longitudParte) {
            partes.push(array.slice(i, i + longitudParte));
        }
        return partes;
    }
    let array = data;
    let Npartes = 10;
    let dataDividida = dividirArray(array, Npartes);
    plantilla = await plantillaCrew(dataDividida[dato]);
    return plantilla; 
};

export const getAllDragons = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/dragons`); 
    let data = await res.json();
    let plantilla = await plantillaDragons(data[dato], data);
    return plantilla;
}

export const getAllRockets = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets`); 
    let data = await res.json();
    let plantilla = await plantillaRockets(data[dato], data);
    return plantilla;
}

export const getAllLaunches = async (dato) => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches`); 
    let data = await res.json();
    console.log(data);
    let plantilla = await plantillaLaunches(data[dato], data);
    return plantilla;
}
