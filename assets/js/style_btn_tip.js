
const cinco = document.getElementById('cinco_label');
const dez = document.getElementById('dez_label');
const quinze = document.getElementById('quinze_label');
const vinte_cinco = document.getElementById('vinte_cinco_label');
const cinquenta = document.getElementById('cinquenta_label');
const custom = document.getElementById('custom');

function cincoClick() {
    cinco.style.backgroundColor = 'hsl(172, 67%, 45%)';
    dez.style.backgroundColor = 'hsl(183, 100%, 15%)';
    quinze.style.backgroundColor = 'hsl(183, 100%, 15%)';
    vinte_cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

function dezClick() {
    cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    dez.style.backgroundColor = 'hsl(172, 67%, 45%)';
    quinze.style.backgroundColor = 'hsl(183, 100%, 15%)';
    vinte_cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

function quinzeClick() {
    cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    dez.style.backgroundColor = 'hsl(183, 100%, 15%)';
    quinze.style.backgroundColor = 'hsl(172, 67%, 45%)';
    vinte_cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

function vinteCincoClick() {
    cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    dez.style.backgroundColor = 'hsl(183, 100%, 15%)';
    quinze.style.backgroundColor = 'hsl(183, 100%, 15%)';
    vinte_cinco.style.backgroundColor = 'hsl(172, 67%, 45%)';
    cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

function cinquentaClick() {
    cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    dez.style.backgroundColor = 'hsl(183, 100%, 15%)';
    quinze.style.backgroundColor = 'hsl(183, 100%, 15%)';
    vinte_cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    cinquenta.style.backgroundColor = 'hsl(172, 67%, 45%)';
}

function customClick() {
    cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    dez.style.backgroundColor = 'hsl(183, 100%, 15%)';
    quinze.style.backgroundColor = 'hsl(183, 100%, 15%)';
    vinte_cinco.style.backgroundColor = 'hsl(183, 100%, 15%)';
    cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

cinco.addEventListener('click', cincoClick);
dez.addEventListener('click', dezClick);
quinze.addEventListener('click', quinzeClick);
vinte_cinco.addEventListener('click', vinteCincoClick);
cinquenta.addEventListener('click', cinquentaClick);
custom.addEventListener('click', customClick);