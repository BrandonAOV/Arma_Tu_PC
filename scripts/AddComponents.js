const addComponentTitle = document.getElementById('add-component-title');
const addModel = document.getElementById('add-Model');                                  //GENERAL
const addBrand = document.getElementById('add-Brand');                                  //GENERAL
const addSocket = document.getElementById('add-Socket');                                //CPU / MOTHERBOARD
const addCores = document.getElementById('add-Cores');                                  //CPU
const addThreads = document.getElementById('add-Threads');                              //CPU
const addCertification = document.getElementById('add-Certification');                  //POWER SUPPLY
const addWattCapacity = document.getElementById('add-WattCapacity');                    //POWER SUPPLY
const addStorageTecnology = document.getElementById('add-StorageTecnology');            //STORAGE UNIT
const addGbCapacity = document.getElementById('add-GbCapacity');                        //STORAGE UNIT / RAM
const addMbTransferRate = document.getElementById('add-MbTransferRate');                //STORAGE UNIT
const addMotherboardType = document.getElementById('add-MotherboardType');              //MOTHERBOARD
const addRamSlots = document.getElementById('add-RamSlots');                            //MOTHERBOARD
const addExpansionSlots = document.getElementById('add-ExpansionSlots');                //MOTHERBOARD
const addRefrigerationType = document.getElementById('add-RefrigerationType');          //REFRIGERATION SYSYTEM
const addDdr = document.getElementById('add-Ddr');                                      //RAM
const addMhzVelocity = document.getElementById('add-MhzVelocity');                      //RAM / GPU
const addGbVram = document.getElementById('add-GbVram');                                //GPU
const addGddr = document.getElementById('add-Gddr');                                    //GPU
const addInterface = document.getElementById('add-Interface');                          //GPU
const addPrice = document.getElementById('add-Price');                                  //GENERAL
const addImageURL = document.getElementById('add-ImageURL');                            //GENERAL

export function resetAddInputs() {
    addModel.style.display = 'block';
    addBrand.style.display = 'block';
    addSocket.style.display = 'block';
    addCores.style.display = 'block';
    addThreads.style.display = 'block';
    addCertification.style.display = 'block';
    addWattCapacity.style.display = 'block';
    addStorageTecnology.style.display = 'block';
    addGbCapacity.style.display = 'block';
    addMbTransferRate.style.display = 'block';
    addMotherboardType.style.display = 'block';
    addRamSlots.style.display = 'block';
    addExpansionSlots.style.display = 'block';
    addRefrigerationType.style.display = 'block';
    addDdr.style.display = 'block';
    addMhzVelocity.style.display = 'block';
    addGbVram.style.display = 'block';
    addGddr.style.display = 'block';
    addInterface.style.display = 'block';
    addPrice.style.display = 'block';
    addImageURL.style.display = 'block';
}

//Mostrar inputs necesarios
export function addCPUForm() {
    addComponentTitle.innerHTML = 'Añadir CPU';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addGbCapacity.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addDdr.style.display = 'none';
    addMhzVelocity.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addPowerSupplyForm() {
    addComponentTitle.innerHTML = 'Añadir Fuente de Poder';
    addSocket.style.display = 'none';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addGbCapacity.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addDdr.style.display = 'none';
    addMhzVelocity.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addStorageUnitForm() {
    addComponentTitle.innerHTML = 'Añadir Unidad de Almacenamiento';
    addSocket.style.display = 'none';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addDdr.style.display = 'none';
    addMhzVelocity.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addMotherboardForm() {
    addComponentTitle.innerHTML = 'Añadir Placa Base';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addGbCapacity.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addDdr.style.display = 'none';
    addMhzVelocity.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addRefrigerationSystemForm() {
    addComponentTitle.innerHTML = 'Añadir Sistema de Refrigaracion';
    addSocket.style.display = 'none';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addGbCapacity.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addDdr.style.display = 'none';
    addMhzVelocity.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addRAMForm() {
    addComponentTitle.innerHTML = 'Añadir Memoria RAM';
    addSocket.style.display = 'none';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addGbVram.style.display = 'none';
    addGddr.style.display = 'none';
    addInterface.style.display = 'none';
}

export function addGPUForm() {
    addComponentTitle.innerHTML = 'Añadir Tarjeta Grafica';
    addSocket.style.display = 'none';
    addCores.style.display = 'none';
    addThreads.style.display = 'none';
    addCertification.style.display = 'none';
    addWattCapacity.style.display = 'none';
    addStorageTecnology.style.display = 'none';
    addGbCapacity.style.display = 'none';
    addMbTransferRate.style.display = 'none';
    addMotherboardType.style.display = 'none';
    addRamSlots.style.display = 'none';
    addExpansionSlots.style.display = 'none';
    addRefrigerationType.style.display = 'none';
    addDdr.style.display = 'none';
}


//Añadir Componentes
export function addCPUComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const socketVal = addSocket.value;
    const coresVal = addCores.value;
    const threadsVal = addThreads.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertCPU.php';
    const query = `?model=${modelVal}&brand=${brandVal}&socket=${socketVal}&cores=${coresVal}&threads=${threadsVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addPowerSupplyComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const certificationVal = addCertification.value;
    const wattCapacityVal = addWattCapacity.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertPowerSupply.php';
    const query = `?model=${modelVal}&brand=${brandVal}&certification=${certificationVal}&watt_capacity=${wattCapacityVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addStorageUnitComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const storageTecnologyVal = addStorageTecnology.value;
    const gbCapacityVal = addGbCapacity.value;
    const mbTransferRateVal = addMbTransferRate.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertStorageUnit.php';
    const query = `?model=${modelVal}&brand=${brandVal}&storage_tecnology=${storageTecnologyVal}&gb_capacity=${gbCapacityVal}&mb_transfer_rate=${mbTransferRateVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addMotherboardComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const socketVal = addSocket.value;
    const motherboardTypeVal = addMotherboardType.value;
    const ramSlotsVal = addRamSlots.value;
    const expansionSlotsVal = addExpansionSlots.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertMotherboard.php';
    const query = `?model=${modelVal}&brand=${brandVal}&socket=${socketVal}&motherboard_type=${motherboardTypeVal}&ram_slots=${ramSlotsVal}&expansion_slots=${expansionSlotsVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addRefrigerationSystemComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const refrigerationTypeVal = addRefrigerationType.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertRefrigarationSystem.php';
    const query = `?model=${modelVal}&brand=${brandVal}&refrigeration_type=${refrigerationTypeVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addRAMComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const gbCapacityVal = addGbCapacity.value;
    const ddrVal = addDdr.value;
    const mhzVelocityVal = addMhzVelocity.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertRAM.php';
    const query = `?model=${modelVal}&brand=${brandVal}&gb_capacity=${gbCapacityVal}&ddr=${ddrVal}&mhz_velocity=${mhzVelocityVal}&price=${priceVal}&imageURL=${ImageURLVal}`;

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}

export function addGPUComponent() {
    const modelVal = addModel.value;
    const brandVal = addBrand.value;
    const gbVramVal = addGbVram.value;
    const gddrVal = addGddr.value;
    const interfaceVal = addInterface.value;
    const mhzVelocityVal = addMhzVelocity.value;
    const priceVal = addPrice.value;
    const ImageURLVal = addImageURL.value;
    const url = 'https://projectatp.000webhostapp.com/DBInsert/InsertGPU.php';
    const query = `?model=${modelVal}&brand=${brandVal}&gb_vram=${gbVramVal}&gddr=${gddrVal}&mhz_velocity=${mhzVelocityVal}&interface=${interfaceVal}&price=${priceVal}&imageURL=${ImageURLVal}`

    fetch(url+query)
        .then((res) => res.text())
        .then((res) => {
            if(res == 1){
                alert('Componente añadido exitosamente');
            } else {
                alert('No se pudo agregar el componente');
            }
        })
        .catch((e) => console.log(e));
}