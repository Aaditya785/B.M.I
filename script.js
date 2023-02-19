// For Weight 
let weight = document.getElementById('weight');
let weightinputkg = document.getElementById('weightinputkg');
let weightinputpound = document.getElementById('weightinputpound');
// For Height
let height = document.getElementById('height');
let heightinputmt = document.getElementById('heightinputmt');
let heightinputcm = document.getElementById('heightinputcm');
let heightinputft = document.getElementById('heightinputft');
let heightinputin = document.getElementById('heightinputin');
// Other's
let result = document.querySelector('.result');
let form = document.querySelector('.form');


// While Choosing a Particular option What to do
weight.addEventListener('change', () => {
    if (weight.value == 'kg') {
        weightinputkg.style.display = 'block';
        weightinputpound.style.display = 'none';
    } else {
        weightinputkg.style.display = 'none';
        weightinputpound.style.display = 'block';
    }
});

height.addEventListener('change', () => {
    if (height.value == 'meter') {
        heightinputmt.style.display = 'block';
        heightinputcm.style.display = 'none';
        heightinputft.style.display = 'none';
        heightinputin.style.display = 'none';
    } else if (height.value == 'centimeter') {
        heightinputmt.style.display = 'none';
        heightinputcm.style.display = 'block';
        heightinputft.style.display = 'none';
        heightinputin.style.display = 'none';
    } else {
        heightinputmt.style.display = 'none';
        heightinputcm.style.display = 'none';
        heightinputft.style.display = 'block';
        heightinputin.style.display = 'block';
    }
});

// calulate the bmi by taking the value through input 
function Calculate(){
    let heightinmt = 0;
    let weightinkg = 0;
    if(weight.value == 'kg'){
        weightinkg = weightinputkg.value;
    }
    else if(weight.value == 'pound') {
        weightinkg = weightinputpound.value*0.453;
    }
    if(height.value == 'meter'){
        heightinmt = heightinputmt.value;
    }
    else if(height.value == 'centimeter'){
        heightinmt = heightinputcm.value * 0.01;
    }
    else{
        heightinmt = heightinputft.value * 0.3048 + heightinputin.value * 0.0254;
    }

    let bmi = weightinkg / (heightinmt*heightinmt);


    let status = '';
    if(bmi<18.5){
        status = 'You need to gain weight';
    }
    else if(bmi>=18.5 && bmi<=24.9){
        status = 'You are in normal weight';
    }
    else if(bmi>=25 && bmi<=29.9){
        status = 'You are overweight';
    }
    else{
        status = 'You are obese';
    }
    result.style.display = 'flex';
    form.style.display = 'none';

    result.querySelector('h2').innerHTML = `You BMI is : ${bmi.toFixed(2)} `;
    result.querySelector('.status').innerHTML = status;
}