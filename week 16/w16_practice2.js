    const brandSelect = document.querySelector('#brand');
    const modelSelect = document.querySelector('#model');
    const range = document.querySelector('#year');
    const rangeValue = document.querySelector('.range__value');
    const buttonResult = document.querySelector('.btn');
    const result = document.querySelector('#result');

    const kiaModels = ['Cerato', 'Optima', 'Picanto'];
    const mazdaModels = ['Axela', 'Capella', 'CX-9'];
    const volvoModels = ['C70', 'S60', 'V90'];
    const kiaModelsPrice = [5000, 4500, 4000];
    const mazdaModelsPrice = [10000, 9500, 9000];
    const volvoModelsPrice = [55000, 14500, 14000];

    let priceResult = [];
    // let priceSelect;
    // let yearPriceCoeff;

    console.log('test');

    console.log('test2');

    brandSelect.addEventListener('change', function (event) {

        if (this.value) {
            modelSelect.disabled = false;
        }

        const brand = event.target.value;
        console.log(brand);

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
    });

    modelSelect.addEventListener('change', function (event) {
        priceSelect = event.target.value;
        priceResult.push(priceSelect);
        console.log(priceSelect);
    });

    range.addEventListener('input', function () {
        let yearPriceCoeff;
        if (this.value == 0) {
            rangeValue.textContent = this.value;
            // yearPriceCoeff = 1;
            priceResult.push(priceSelect*1);
        } else if (this.value == 1) {
            rangeValue.textContent = this.value + " год";
            // yearPriceCoeff = 0.9;
            priceResult.push(priceSelect*0.9);
        } else if (2 <= this.value && this.value <= 4) {
            rangeValue.textContent = this.value + " года";
            // yearPriceCoeff = 0.8;
            priceResult.push(priceSelect*0.8);
        } else if (5 <= this.value && this.value <= 10) {
            rangeValue.textContent = this.value + " лет";
            priceResult.push(priceSelect*0.7);
            // yearPriceCoeff = 0.7;
        } else {
            rangeValue.textContent = this.value + " лет";
            priceResult.push(priceSelect*0.6);
            // yearPriceCoeff = 0.6;
        }
        // console.log(yearPriceCoeff);

    });

    // priceResult = Number(priceSelect*yearPriceCoeff);

    console.log(priceResult);

    const gearboxPrice = document.querySelector('[name="gearbox"]:checked').value;
    // console.log(gearboxPrice);

    const enginePrice = document.querySelector('[name="engine"]:checked').value;
    // console.log(enginePrice);

    // 
    // const result = Number(brandPrice) + Number(modelPrice) + Number(yearPrice) + Number(gearboxPrice) + Number(enginePrice);
    // console.log(result);

    result.textContent = "Стоимость автомобиля " + priceResult + " рублей.";
    // console.log(resultHTML.innerHTML);