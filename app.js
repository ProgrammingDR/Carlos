const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');
const submitButton = document.querySelector('#submit-button');
const spinner = document.querySelector('#spinner');
const form = document.querySelector('form');
let nombreInput =  document.querySelector('#nombre');
let apellidoInput = document.querySelector('#apellido');
let numeroInput = document.querySelector('#numero');


stepButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('collapsed')) {
            progress.setAttribute('value', index * 100 / (stepButtons.length - 1));

            stepButtons.forEach((item, secindex) => {
                if (index > secindex) {
                    item.classList.add('done');
                }
                if (index < secindex) {
                    item.classList.remove('done');
                }
            });
        }
    });
});


submitButton.addEventListener('click', () => {
    nombreInput =  document.querySelector('#nombre');
    apellidoInput = document.querySelector('#apellido');
    numeroInput = document.querySelector('#numero');

    spinner.style.display = 'block';
    submitButton.disabled = true;

    setTimeout(() => {
        spinner.style.display = 'none';
        submitButton.disabled = false;

        const nextStep = document.querySelector('#collapseTwo');
        const nextStepButton = document.querySelector('[data-bs-target="#collapseTwo"]');

        if (nextStep && nextStepButton) {
            nextStep.classList.add('show');
            nextStepButton.classList.remove('collapsed');
            nextStepButton.setAttribute('aria-expanded', 'true');

            progress.setAttribute('value', 100);

            stepButtons[0].classList.add('done');
            document.querySelector('#collapseOne').classList.remove('show');

            const Nombre = document.querySelector('#Nombre');
            const Numero = document.querySelector('#cardnumber');
            const nombre = nombreInput.value + ' ' + apellidoInput.value;
            const numero = numeroInput.value;

            if (Nombre && nombre) {
                Nombre.textContent = nombre;
            }

            if (Numero && numero) {
                Numero.textContent = `xxxxxxxxx${numero}.`;
            }
        }
    }, 1000);
});

const Nombre = document.querySelector('#Nombre');
const Numero = document.querySelector('#cardnumber');
const nombre = nombreInput.value + ' ' + apellidoInput.value;
const numero = numeroInput.value;

if (Nombre && nombre) {
    Nombre.textContent = nombre;
}

if (Numero && numero) {
    Numero.textContent = `   xxxxxxxxx${numero}.`;
}

const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const fechaActual = new Date();

const diaSemana = dias[fechaActual.getDay()];
const diaMes = fechaActual.getDate();
const mes = meses[fechaActual.getMonth()];
const año = fechaActual.getFullYear();

const sufijoDia = obtenerSufijoDia(diaMes);

const fechaTexto = `Today is ${diaSemana}, ${mes} ${diaMes}${sufijoDia}, ${año}.`;

const fechaElement = document.getElementById("fecha-actual");
if (fechaElement) {
    fechaElement.textContent = fechaTexto;
}

function obtenerSufijoDia(dia) {
    if (dia > 3 && dia < 21) return "th";
    switch (dia % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}
