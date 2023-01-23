const selects = document.querySelectorAll('select');
const inputs = document.querySelectorAll('input');
const brandSelect = document.querySelector('#brand');
const modelSelect = document.querySelector('#model');
const rangeYear = document.querySelector('#year');
const rangeYearValue = document.querySelector('.range__value');
const gearboxRadio = document.querySelectorAll('input[name="gearbox"]');
const engineRadio = document.querySelectorAll('input[name="engine"]');
const equipmentCheckbox = document.querySelectorAll('input[type="checkbox"]');
const buttonResult = document.querySelector('.btn');

const kiaModels = ['Cerato', 'Optima', 'Picanto'];
const mazdaModels = ['Axela', 'Capella', 'CX-9'];
const volvoModels = ['C70', 'S60', 'V90'];
const kiaModelsPrice = [5000, 4500, 4000];
const mazdaModelsPrice = [10000, 9500, 9000];
const volvoModelsPrice = [55000, 14500, 14000];

let priceSelect;
let yearPriceCoeff;

brandSelect.addEventListener('change', modelOption);
modelSelect.addEventListener('change', selectedModel);
rangeYear.addEventListener('input', rangeCarAge);

function modelOption(event) {
    if (this.value) {
        modelSelect.disabled = false;
    }

    const brand = event.target.value;

    let options = '';
    let models = [];
    let carPrice = [];

    switch (brand) {
        case 'kia': {
            models = kiaModels;
            carPrice = kiaModelsPrice;
            createOptionHtml(models, carPrice);
            break;
        }
        case 'mazda': {
            models = mazdaModels;
            carPrice = mazdaModelsPrice;
            createOptionHtml(models, carPrice);
            break;
        }
        case 'volvo': {
            models = volvoModels;
            carPrice = volvoModelsPrice;
            createOptionHtml(models, carPrice);
            break;
        }
    }

    function createOptionHtml(models, carPrice) {
        for (let i = 0; i < models.length; i++) {
            options += `<option value=${carPrice[i]}>${models[i]}</option>`;
        }
    }
    modelSelect.innerHTML = options;
}

function selectedModel(event) {
    priceSelect = event.target.value;
    console.log(priceSelect);
}

function rangeCarAge() {
    if (this.value == 0) {
        rangeYearValue.textContent = this.value;
        yearPriceCoeff = 1;
    } else if (this.value == 1) {
        rangeYearValue.textContent = this.value + " год";
        yearPriceCoeff = 0.9;
    } else if (2 <= this.value && this.value <= 4) {
        rangeYearValue.textContent = this.value + " года";
        yearPriceCoeff = 0.8;
    } else if (5 <= this.value && this.value <= 10) {
        rangeYearValue.textContent = this.value + " лет";
        yearPriceCoeff = 0.7;
    } else {
        rangeYearValue.textContent = this.value + " лет";
        yearPriceCoeff = 0.6;
    }
}

function calculateResult() {
    priceResult = priceSelect * yearPriceCoeff;

    for (gearbox of gearboxRadio) {
        if (gearbox.checked == true) {
            priceResult = priceResult + Number(gearbox.value);
        }
    }
    for (engine of engineRadio) {
        if (engine.checked == true) {
            priceResult = priceResult + Number(engine.value);
        }
    }
    for (equipment of equipmentCheckbox) {
        if (equipment.checked == true) {
            priceResult = priceResult + Number(equipment.value);
        }else{
            priceResult = priceResult;
        }
    }
    return priceResult;
}

for (select of selects) {
    select.addEventListener('select', () => {
        calculateResult();
    });
}

for (input of inputs) {
    input.addEventListener('input', () => {
        calculateResult();
    });
}

buttonResult.addEventListener('click', (event) => {
    event.preventDefault();
    const result = document.querySelector('#result');
    priceResult = calculateResult();
    if (priceResult) {
        result.textContent = "Стоимость автомобиля " + priceResult + " рублей.";
    } else {
        result.textContent = "";
    }
});