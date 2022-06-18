const kiaModels = [
    'Cerato', 'Optima', 'Picanto', 'Soul',
];

const mazdaModels = [
    'Axela', 'Capella', 'CX-9', 'RX-8',
];

const volvoModels = [
    'C70', 'S60', 'V90', 'XC70',
];

const brandSelect = document.querySelector('#brand');
brandSelect.addEventListener('change', fillModelsOption);

function fillModelsOption(event) {
    const brand = event.target.value;

    if (this.value) {
        document.querySelector('#model').disabled = false;
    }
    const modelSelect = document.querySelector('#model');

    let options = '';
    let models = [];

    switch (brand) {
        case 'kia': {
            models = kiaModels;
            break;
        }
        case 'mazda': {
            models = mazdaModels;
            break;
        }
        case 'volvo': {
            models = volvoModels;
            break;
        }
    }

    for (let model of models) {
        options += `<option value="${model}">${model}</option>`;
    }

    modelSelect.innerHTML = options;
}