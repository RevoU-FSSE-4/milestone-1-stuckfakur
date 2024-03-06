
// hover the bg
const changeBg = document.getElementById('changeBg');
const popupBg = document.querySelector('div.popupBg');
changeBg.addEventListener('mouseover', ()=> {
    popupBg.classList.add('show');
})
popupBg.addEventListener('mouseleave', ()=> {
    popupBg.classList.remove('show');
})
// input the custom color bg
let inputRed = document.getElementById('inputRed');
let inputGreen = document.getElementById('inputGreen');
let inputBlue = document.getElementById('inputBlue');

function setBackgroundColor(){
    let color = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}
function getSavedColor(){
    let savedColor = localStorage.getItem('backgroundColor');
    if (savedColor){
        let [red, green, blue] = savedColor.match(/\d+/g);
        inputRed.value = red;
        inputGreen.value = green;
        inputBlue.value = blue;

        document.body.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
    }
}

inputRed.addEventListener('change', setBackgroundColor);
inputGreen.addEventListener('change', setBackgroundColor);
inputBlue.addEventListener('change', setBackgroundColor);

getSavedColor();
// set value input to 0
function setInputColorZero() {
    inputRed.value = 0;
    inputGreen.value = 0;
    inputBlue.value = 0;
}
// reset adjust background color
document.querySelector('button.reset').addEventListener('click', ()=>{
    localStorage.removeItem('backgroundColor');
    document.body.style.backgroundColor = 'white';
    setInputColorZero();
})

// js dark mode
const checkbox = document.getElementById("checkbox-dark-mode")

checkbox.addEventListener("change", () => {
    localStorage.removeItem('backgroundColor');
    document.body.style.backgroundColor = '';
    changeBg.classList.toggle('opacity-0');
    setInputColorZero();
    document.body.classList.toggle("dark");
})
