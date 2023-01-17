        const form = document.querySelector('form');
        const result = document.querySelector('#result');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const kiaModels = [
                'Cerato', 'Optima', 'Picanto',
            ];
            const mazdaModels = [
                'Axela', 'Capella', 'CX-9',
            ];
            const volvoModels = [
                'C70', 'S60', 'V90',
            ];
            const kiaModelsPrice = [
                5000, 4500, 4000,
            ];
            const mazdaModelsPrice = [
                10000, 9500, 9000,
            ];
            const volvoModelsPrice = [
                55000, 14500, 14000,
            ];

            const brandSelect = document.querySelector('#brand');
            brandSelect.addEventListener('change', modelsOption);

            function modelsOption(event) {
                const brand = event.target.value;
                const modelSelect = document.querySelector('#model');

                let options = '';
                let models = [];
                let carPrice = [];

                switch (brand) {
                    case 'kia': {
                        models = kiaModels;
                        carPrice = kiaModelsPrice;

                        function priceOption() {

                        }
                        if (modelSelect.value === kiaModels[0]) {
                            carPrice === kiaModelsPrice[0];
                            console.log(carPrice);
                        } else if (modelSelect.value === kiaModels[1]) {
                            carPrice === kiaModelsPrice[1];
                            console.log(carPrice);
                        } else {
                            carPrice === kiaModelsPrice[3];
                            console.log(carPrice);
                        }
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

            let price = 0;




            // const brandPrice = document.querySelector('#brand').value;
            // console.log(brandPrice);
            // const modelPrice = document.querySelector('#model').value;
            // console.log(modelPrice);
            // const yearPrice = document.querySelector('#year').value;
            // console.log(yearPrice);



            const gearboxPrice = document.querySelector('[name="gearbox"]:checked').value;
            // console.log(gearboxPrice);

            const enginePrice = document.querySelector('[name="engine"]:checked').value;
            // console.log(enginePrice);

            // 
            // const result = Number(brandPrice) + Number(modelPrice) + Number(yearPrice) + Number(gearboxPrice) + Number(enginePrice);
            // console.log(result);

            result.textContent = "Стоимость автомобиля " + price + " рублей.";
            // console.log(resultHTML.innerHTML);

        });

        const range = document.querySelector('#year');
        const rangeValue = document.querySelector('.range__value');

        range.oninput = function () {
            if (this.value == 0) {
                rangeValue.textContent = this.value;
            } else if (this.value == 1) {
                rangeValue.textContent = this.value + " год";
            } else if (2 <= this.value && this.value <= 4){
                rangeValue.textContent = this.value + " года";
            } else {
                rangeValue.textContent = this.value + " лет";
            }
        }


        // function sumResult() {

        //     const brandPrice = document.querySelector('#brand').value;
        //     console.log(brandPrice);
        //     const modelPrice = document.querySelector('#model').value;
        //     console.log(modelPrice);
        //     const yearPrice = document.querySelector('#year').value;
        //     console.log(yearPrice);

        //     const gearboxPrice = document.querySelector('[name="gearbox"]:checked').value;
        //     console.log(gearboxPrice);

        //     const enginePrice = document.querySelector('[name="engine"]:checked').value;
        //     console.log(enginePrice);

        //     const resultHTML = document.querySelector('#result');
        //     const result = Number(brandPrice) + Number(modelPrice) + Number(yearPrice) + Number(gearboxPrice) + Number(enginePrice);
        //     console.log(result);

        //     resultHTML.innerHTML = "Стоимость автомобиля " + result + " рублей.";
        //     console.log(resultHTML.innerHTML);

        // }

        // const button = getElementById('result-btn');
        // button.addEventListener('click', sumResult);






        // const brandSelect = document.querySelector('#brand');
        // brandSelect.addEventListener('change', fillModelsOption);

        // function fillModelsOption() {
        //     const modelSelect = document.querySelector('#model');

        //     console.log(brand);

        //     if (this) {
        //         document.querySelector('#model').disabled = false;
        //     } 
        // }