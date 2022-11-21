const deleteComponentTitle = document.getElementById('delete-component-title');
const componentId = document.getElementById('delete-component-id');

export function showDeleteForms(component) {
    switch(component) {
        case 'CPU':
            deleteComponentTitle.innerHTML = 'Eliminar CPU';
            break;
        
        case 'POWER SUPPLY':
            deleteComponentTitle.innerHTML = 'Eliminar Fuente de Poder';
            break;
        
        case 'STORAGE UNIT':
            deleteComponentTitle.innerHTML = 'Eliminar Unidad de Almacenamiento';
            break;

        case 'MOTHERBOARD':
            deleteComponentTitle.innerHTML = 'Eliminar Placa Base';
            break;

        case 'REFRIGERATION SYSTEM':
            deleteComponentTitle.innerHTML = 'Eliminar Sistema de Refrigeracion';
            break;
        
        case 'RAM':
            deleteComponentTitle.innerHTML = 'Eliminar Memoria RAM';
            break;

        case 'GPU':
            deleteComponentTitle.innerHTML = 'Eliminar Tarjeta Grafica';
            break;
    }
}

export function deleteComponents(component) {
    switch(component) {
        case 'CPU':
            deleteCpu();
            break;
        
        case 'POWER SUPPLY':
            deletePowerSupply();
            break;
        
        case 'STORAGE UNIT':
            deleteStorageUnit();
            break;

        case 'MOTHERBOARD':
            deleteMotherboard();
            break;

        case 'REFRIGERATION SYSTEM':
            deleteRefrigerationSystem();
            break;
        
        case 'RAM':
            deleteRam();
            break;

        case 'GPU':
            deleteGpu();
            break;
    }
}

function deleteCpu() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteCPU.php';
    const query = `?cpuID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deletePowerSupply() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeletePowerSupply.php';
    const query = `?powerSupplyID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deleteStorageUnit() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteStorageUnit.php';
    const query = `?$storageUnitID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deleteMotherboard() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteMotherboard.php';
    const query = `?motherboardID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deleteRefrigerationSystem() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteRefrigarationSystem.php';
    const query = `?refrigerationSsytemID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deleteRam() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteRAM.php';
    const query = `?ramID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}

function deleteGpu() {
    const componentIdVal = componentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBDelete/DeleteGPU.php';
    const query = `?gpuID=${componentIdVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente eliminado exitosamente');
            } else {
                alert('No se pudo eliminar el componente');
            }
        })
        .catch((e) => console.log(e));
}