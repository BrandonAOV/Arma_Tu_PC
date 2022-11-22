import {
    resetAddInputs,
    addCPUForm,
    addCPUComponent,
    addPowerSupplyForm,
    addPowerSupplyComponent,
    addStorageUnitForm,
    addStorageUnitComponent,
    addMotherboardForm,
    addMotherboardComponent,
    addRefrigerationSystemForm,
    addRefrigerationSystemComponent,
    addRAMForm,
    addRAMComponent,
    addGPUForm,
    addGPUComponent,
} from "./AddComponents.js";

import {
    resetModifyInputs,
    modifyCPUForm,
    modifyCPUComponent,
    modifyPowerSupplyForm,
    modifyPowerSupplyComponent,
    modifyStorageUnitForm,
    modifyStorageUnitComponent,
    modifyMotherboardForm,
    modifyMotherboardComponent,
    modifyRefrigerationSystemForm,
    modifyRefrigerationSystemComponent,
    modifyRAMForm,
    modifyRAMComponent,
    modifyGPUForm,
    modifyGPUComponent,
    searchData,
} from "./ModifyComponent.js";

import {
    showDeleteForms,
    deleteComponents,
} from "./DeleteComponent.js";

const deleteContainer = document.getElementById('delete-container');
const addContainer = document.getElementById('add-container');
const modifyContainer = document.getElementById('modify-container');
const addButton = document.getElementById('add');
const modifyButton = document.getElementById('modify');
const deleteButton = document.getElementById('delete');
const selectComponentButton = document.getElementById('component-selector');
const addSubmitButton = document.getElementById('add-SubmitButton');
const modifySubmitButton = document.getElementById('modify-SubmitButton');
const modifySearchDataButton = document.getElementById('modify-search-data');
const deleteSubmitButton = document.getElementById('delete-SubmitButton');
let lastAction = "";
let component = "";

//Se elige la accion a realizar
addButton.addEventListener('click', (e) => {
    lastAction = 'add';
})

modifyButton.addEventListener('click', (e) => {
    lastAction = 'modify';
})

deleteButton.addEventListener('click', (e) => {
    lastAction = 'delete';
})

//Se muestra el contenedor de la accion seleccionada y su respectivo form
selectComponentButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(lastAction);

    if (!checkComponent()){
        return;
    }

    switch(lastAction) {
        case 'add': 
            addContainer.style.display = 'block';
            modifyContainer.style.display = 'none';
            deleteContainer.style.display = 'none';
            showAddForms();
            break;
        
        case 'modify':
            addContainer.style.display = 'none';
            modifyContainer.style.display = 'block';
            deleteContainer.style.display = 'none';
            showModifyForms();
            break;

        case 'delete':
            addContainer.style.display = 'none';
            modifyContainer.style.display = 'none';
            deleteContainer.style.display = 'block';
            showDeleteForms(component);
            break;

        default:
            alert('Error, selecciona una de las acciones indicadas');
    }

});

//Comprueba que se halla seleccionado un componente y lo asigna a una variable
function checkComponent() {
    let elementoActivo = document.querySelector('input[name="component"]:checked');
    if(!elementoActivo) {
        alert('No hay ninún elemento activo');
        return false;
    }
    component = elementoActivo.value;
    return true;
}

//Modifica el form para que solo se muestren los inputs necesarios para cada componente
function showAddForms() {
    resetAddInputs();
    switch(component) {
        case 'CPU':
            addCPUForm();
            break;
        
        case 'POWER SUPPLY':
            addPowerSupplyForm();
            break;
        
        case 'STORAGE UNIT':
            addStorageUnitForm();
            break;

        case 'MOTHERBOARD':
            addMotherboardForm();
            break;

        case 'REFRIGERATION SYSTEM':
            addRefrigerationSystemForm();
            break;
        
        case 'RAM':
            addRAMForm();
            break;

        case 'GPU':
            addGPUForm();
            break;
    }
}

addSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    switch(component) {
        case 'CPU':
            addCPUComponent();
            break;
        
        case 'POWER SUPPLY':
            addPowerSupplyComponent();
            break;
        
        case 'STORAGE UNIT':
            addStorageUnitComponent();
            break;

        case 'MOTHERBOARD':
            addMotherboardComponent();
            break;

        case 'REFRIGERATION SYSTEM':
            addRefrigerationSystemComponent();
            break;
        
        case 'RAM':
            addRAMComponent();
            break;

        case 'GPU':
            addGPUComponent();
            break;
    }
})


function showModifyForms() {
    resetModifyInputs();
    switch(component) {
        case 'CPU':
            modifyCPUForm();
            break;
        
        case 'POWER SUPPLY':
            modifyPowerSupplyForm();
            break;
        
        case 'STORAGE UNIT':
            modifyStorageUnitForm();
            break;

        case 'MOTHERBOARD':
            modifyMotherboardForm();
            break;

        case 'REFRIGERATION SYSTEM':
            modifyRefrigerationSystemForm();
            break;
        
        case 'RAM':
            modifyRAMForm();
            break;

        case 'GPU':
            modifyGPUForm();
            break;
    }
}

modifySubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    switch(component) {
        case 'CPU':
            modifyCPUComponent();
            break;
        
        case 'POWER SUPPLY':
            modifyPowerSupplyComponent();
            break;
        
        case 'STORAGE UNIT':
            modifyStorageUnitComponent();
            break;

        case 'MOTHERBOARD':
            modifyMotherboardComponent();
            break;

        case 'REFRIGERATION SYSTEM':
            modifyRefrigerationSystemComponent();
            break;
        
        case 'RAM':
            modifyRAMComponent();
            break;

        case 'GPU':
            modifyGPUComponent();
            break;
    }
})

modifySearchDataButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchData(component);
});

deleteSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteComponents(component);
})















