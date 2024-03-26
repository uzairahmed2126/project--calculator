import products from "../dummy/data.js";
// events 
const btnContainer = document.getElementById('btn-container');
const txtContainer = document.getElementById('txt');
const fragment = document.createDocumentFragment();

function createBtn(arr) {
    arr.forEach((eachProduct) => {
        const allButton = createEl('button', 'all-el');
        allButton.innerText = eachProduct;
        fragment.append(allButton);
    });
    btnContainer.append(fragment);
};
createBtn(products);

function handleClick(e) {
    const inpt = e.target.innerText;
    const lastChar = txtContainer.value.at(-1);
    console.log(inpt);
    console.log(lastChar);
    console.log(txtContainer)
    const operators = ['+', '-', '*', '/', '%'];
    if (operators.includes(inpt) && operators.includes(lastChar)) {
        txtContainer.value = txtContainer.value.slice(0, -1);
    }

    switch (inpt) {
        case '=':
            showResult();
            break;
        case 'AC':
            txtContainer.value = "";
            break;
        case 'X':
            txtContainer.value = txtContainer.value.slice(0, -1);
            break;
        default:
            txtContainer.value += inpt;
            break;
    }
}
function showResult() {
    try {
        const inputVal = document.getElementById('txt')
        let txt = eval(inputVal.value);
        inputVal.value = txt;
    } catch (error) {
        alert("Invalid input. Please enter a valid expression.");
    }
}
function createEl(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};
btnContainer.addEventListener('click', handleClick);