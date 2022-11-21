const modifyComponentTitle = document.getElementById('Modify-component-title');
const modifyComponentId = document.getElementById('modify-component-id');
const modifyModel = document.getElementById('modify-Model');                                  //GENERAL
const modifyBrand = document.getElementById('modify-Brand');                                  //GENERAL
const modifySocket = document.getElementById('modify-Socket');                                //CPU / MOTHERBOARD
const modifyCores = document.getElementById('modify-Cores');                                  //CPU
const modifyThreads = document.getElementById('modify-Threads');                              //CPU
const modifyCertification = document.getElementById('modify-Certification');                  //POWER SUPPLY
const modifyWattCapacity = document.getElementById('modify-WattCapacity');                    //POWER SUPPLY
const modifyStorageTecnology = document.getElementById('modify-StorageTecnology');            //STORAGE UNIT
const modifyGbCapacity = document.getElementById('modify-GbCapacity');                        //STORAGE UNIT / RAM
const modifyMbTransferRate = document.getElementById('modify-MbTransferRate');                //STORAGE UNIT
const modifyMotherboardType = document.getElementById('modify-MotherboardType');              //MOTHERBOARD
const modifyRamSlots = document.getElementById('modify-RamSlots');                            //MOTHERBOARD
const modifyExpansionSlots = document.getElementById('modify-ExpansionSlots');                //MOTHERBOARD
const modifyRefrigerationType = document.getElementById('modify-RefrigerationType');          //REFRIGERATION SYSYTEM
const modifyDdr = document.getElementById('modify-Ddr');                                      //RAM
const modifyMhzVelocity = document.getElementById('modify-MhzVelocity');                      //RAM / GPU
const modifyGbVram = document.getElementById('modify-GbVram');                                //GPU
const modifyGddr = document.getElementById('modify-Gddr');                                    //GPU
const modifyInterface = document.getElementById('modify-Interface');                          //GPU
const modifyPrice = document.getElementById('modify-Price');                                  //GENERAL
const modifyImageURL = document.getElementById('modify-ImageURL');                            //GENERAL

export function resetModifyInputs() {
    modifyComponentId.display = 'block';
    modifyModel.style.display = 'block';
    modifyBrand.style.display = 'block';
    modifySocket.style.display = 'block';
    modifyCores.style.display = 'block';
    modifyThreads.style.display = 'block';
    modifyCertification.style.display = 'block';
    modifyWattCapacity.style.display = 'block';
    modifyStorageTecnology.style.display = 'block';
    modifyGbCapacity.style.display = 'block';
    modifyMbTransferRate.style.display = 'block';
    modifyMotherboardType.style.display = 'block';
    modifyRamSlots.style.display = 'block';
    modifyExpansionSlots.style.display = 'block';
    modifyRefrigerationType.style.display = 'block';
    modifyDdr.style.display = 'block';
    modifyMhzVelocity.style.display = 'block';
    modifyGbVram.style.display = 'block';
    modifyGddr.style.display = 'block';
    modifyInterface.style.display = 'block';
    modifyPrice.style.display = 'block';
    modifyImageURL.style.display = 'block';
}

//Mostrar inputs necesarios
export function modifyCPUForm() {
    modifyComponentTitle.innerHTML = 'Modificar CPU';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyGbCapacity.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyDdr.style.display = 'none';
    modifyMhzVelocity.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyPowerSupplyForm() {
    modifyComponentTitle.innerHTML = 'Modificar Fuente de Poder';
    modifySocket.style.display = 'none';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyGbCapacity.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyDdr.style.display = 'none';
    modifyMhzVelocity.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyStorageUnitForm() {
    modifyComponentTitle.innerHTML = 'Modificar Unidad de Almacenamiento';
    modifySocket.style.display = 'none';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyDdr.style.display = 'none';
    modifyMhzVelocity.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyMotherboardForm() {
    modifyComponentTitle.innerHTML = 'Modificar Placa Base';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyGbCapacity.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyDdr.style.display = 'none';
    modifyMhzVelocity.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyRefrigerationSystemForm() {
    modifyComponentTitle.innerHTML = 'Modificar Sistema de Refrigaracion';
    modifySocket.style.display = 'none';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyGbCapacity.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyDdr.style.display = 'none';
    modifyMhzVelocity.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyRAMForm() {
    modifyComponentTitle.innerHTML = 'Modificar Memoria RAM';
    modifySocket.style.display = 'none';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyGbVram.style.display = 'none';
    modifyGddr.style.display = 'none';
    modifyInterface.style.display = 'none';
}

export function modifyGPUForm() {
    modifyComponentTitle.innerHTML = 'Modificar Tarjeta Grafica';
    modifySocket.style.display = 'none';
    modifyCores.style.display = 'none';
    modifyThreads.style.display = 'none';
    modifyCertification.style.display = 'none';
    modifyWattCapacity.style.display = 'none';
    modifyStorageTecnology.style.display = 'none';
    modifyGbCapacity.style.display = 'none';
    modifyMbTransferRate.style.display = 'none';
    modifyMotherboardType.style.display = 'none';
    modifyRamSlots.style.display = 'none';
    modifyExpansionSlots.style.display = 'none';
    modifyRefrigerationType.style.display = 'none';
    modifyDdr.style.display = 'none';
}


//Añadir Componentes
export function modifyCPUComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const socketVal = modifySocket.value;
    const coresVal = modifyCores.value;
    const threadsVal = modifyThreads.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyCPU.php';
    const query = `?cpuID=${componentIdVal}&model=${modelVal}&brand=${brandVal}&socket=${socketVal}&cores=${coresVal}&threads=${threadsVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyPowerSupplyComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const certificationVal = modifyCertification.value;
    const wattCapacityVal = modifyWattCapacity.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyPowerSupply.php';
    const query = `?powerSupplyID=${componentIdVal}&model=${modelVal}&brand=${brandVal}&certification=${certificationVal}&watt_capacity=${wattCapacityVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyStorageUnitComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const storageTecnologyVal = modifyStorageTecnology.value;
    const gbCapacityVal = modifyGbCapacity.value;
    const mbTransferRateVal = modifyMbTransferRate.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyStorageUnit.php';
    const query = `?storageUnitID${componentIdVal}&model=${modelVal}&brand=${brandVal}&storage_tecnology=${storageTecnologyVal}&gb_capacity=${gbCapacityVal}&mb_transfer_rate=${mbTransferRateVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyMotherboardComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const socketVal = modifySocket.value;
    const motherboardTypeVal = modifyMotherboardType.value;
    const ramSlotsVal = modifyRamSlots.value;
    const expansionSlotsVal = modifyExpansionSlots.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyMotherboard.php';
    const query = `?motherboardID=${componentIdVal}&model=${modelVal}&brand=${brandVal}&socket=${socketVal}&motherboard_type=${motherboardTypeVal}&ram_slots=${ramSlotsVal}&expansion_slots=${expansionSlotsVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyRefrigerationSystemComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const refrigerationTypeVal = modifyRefrigerationType.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyRefrigarationSystem.php';
    const query = `?refrigerationSystemID${componentIdVal}&model=${modelVal}&brand=${brandVal}&refrigeration_type=${refrigerationTypeVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyRAMComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const gbCapacityVal = modifyGbCapacity.value;
    const ddrVal = modifyDdr.value;
    const mhzVelocityVal = modifyMhzVelocity.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyRAM.php';
    const query = `?ramID=${componentIdVal}&model=${modelVal}&brand=${brandVal}&gb_capacity=${gbCapacityVal}&ddr=${ddrVal}&mhz_velocity=${mhzVelocityVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function modifyGPUComponent() {
    const componentIdVal = modifyComponentId.value;
    const modelVal = modifyModel.value;
    const brandVal = modifyBrand.value;
    const gbVramVal = modifyGbVram.value;
    const gddrVal = modifyGddr.value;
    const interfaceVal = modifyInterface.value;
    const mhzVelocityVal = modifyMhzVelocity.value;
    const priceVal = modifyPrice.value;
    const ImageURLVal = modifyImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBModify/ModifyGPU.php';
    const query = `?gpuID=${componentIdVal}&model=${modelVal}&brand=${brandVal}&gb_vram=${gbVramVal}&gddr=${gddrVal}&mhz_velocity=${mhzVelocityVal}&interface=${interfaceVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente modificado exitosamente');
            } else {
                alert('No se pudo modificar el componente');
            }
        })
        .catch((e) => console.log(e));
}

//Buscar datos de un componente
export function searchData(component) {
    switch(component) {
    case 'CPU':
        cpuData();
        break;
    
    case 'POWER SUPPLY':
        powerSupplyData();
        break;
    
    case 'STORAGE UNIT':
        storageUnitData();
        break;

    case 'MOTHERBOARD':
        motherboardData();
        break;

    case 'REFRIGERATION SYSTEM':
        refrigerationSystemdData();
        break;
    
    case 'RAM':
        ramData();
        break;

    case 'GPU':
        gpuData();
        break;
    }
}

function cpuData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestCPU.php';
    const query =`?cpuID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifySocket.value = res[0].socket;
                modifyCores.value = res[0].cores;
                modifyThreads.value = res[0].threads;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifySocket.value = '';
                modifyCores.value = '';
                modifyThreads.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function powerSupplyData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestPowerSupply.php';
    const query =`?powerSupplyID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifyCertification.value = res[0].certification;
                modifyWattCapacity.value = res[0].watt_capacity;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifyCertification.value = '';
                modifyWattCapacity.value= '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function gpuData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestGPU.php';
    const query =`?gpuID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifyMhzVelocity.value = res[0].mhz_velocity;
                modifyGbVram.value = res[0].gb_vram;
                modifyGddr.value = res[0].gddr;
                modifyInterface.value = res[0].interface;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifyMhzVelocity.value = '';
                modifyGbVram.value = '';
                modifyGddr.value =  '';
                modifyInterface.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function storageUnitData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestStorageUnit.php';
    const query =`?storageUnitID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifyStorageTecnology.value = res[0].storage_tecnology;
                modifyGbCapacity.value = res[0].gb_capacity;
                modifyMbTransferRate.value = res[0].mb_transfer_rate;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifyStorageTecnology.value = '';
                modifyGbCapacity.value = '';
                modifyMbTransferRate.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function motherboardData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestMotherboard.php';
    const query =`?motherboardID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifySocket.value = res[0].socket;
                modifyMotherboardType.value = res[0].motherboard_type;
                modifyRamSlots.value = res[0].ram_slots;
                modifyExpansionSlots.value = res[0].expansion_slots;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifySocket.value = '';
                modifyMotherboardType.value = '';
                modifyRamSlots.value = '';
                modifyExpansionSlots.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function refrigerationSystemdData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestRefrigerationSystem.php';
    const query =`?refrigerationSystemID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifyRefrigerationType.value = res[0].refrigeration_type;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifyRefrigerationType.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}

function ramData(){
    const modifyComponentIdVal = modifyComponentId.value;
    const url = 'https://projectatp.000webhostapp.com/DBRequestData/RequestRAM.php';
    const query =`?ramID=${modifyComponentIdVal}`;

    fetch(url+query)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res){
                modifyModel.value = res[0].model;
                modifyBrand.value = res[0].brand;
                modifyGbCapacity.value = res[0].gb_capacity;
                modifyMhzVelocity.value = res[0].mhz_velocity;
                modifyDdr.value = res[0].ddr;
                modifyPrice.value = res[0].price;
                modifyImageURL.value = res[0].image_url;
            } else {
                alert('No hay datos');
                modifyModel.value = '';
                modifyBrand.value = '';
                modifyGbCapacity.value = '';
                modifyMhzVelocity.value = '';
                modifyDdr.value = '';
                modifyPrice.value = '';
                modifyImageURL.value = '';
            }
        })
        .catch((e) => console.log(e));
}