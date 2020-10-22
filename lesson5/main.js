let mainBlock = document.createElement('main');
mainBlock.className = 'main-field';

document.body.append(mainBlock);

let allBlocks = document.createElement('div');
allBlocks.className = 'all-field';

mainBlock.appendChild(allBlocks);

const letters = document.createElement('div');
letters.className = 'letters';

const letter = document.createDocumentFragment();

for (let i = 0; i < 8; i++) {
    const letterDiv = document.createElement('div');
    letterDiv.className = 'letter';
    const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    letterDiv.innerText = letterArr[i];
    letter.appendChild(letterDiv);
}
allBlocks.appendChild(letters);
letters.appendChild(letter)

let fieldAndNumbersBlocks = document.createElement('div');
fieldAndNumbersBlocks.className = 'field-numbers'

allBlocks.appendChild(fieldAndNumbersBlocks)

let numbers = document.createElement('div');
numbers.className = 'numbers'

let number = document.createDocumentFragment();

for (let i = 1; i <= 8; i++) {
    let numberDiv = document.createElement('div');
    numberDiv.className = 'number';
    numberDiv.innerText = i;

    number.appendChild(numberDiv)
}

fieldAndNumbersBlocks.appendChild(numbers)
numbers.appendChild(number)

for (let i = 1; i <= 8; i++) {

    let columnBlocks = document.createElement('div');
    columnBlocks.className = 'line';

    let divBlocks = document.createDocumentFragment();

    if (i % 2 == 0) {
        for (let i = 1; i <= 8; i++) {
            let newDiv = document.createElement('div');
            if (i % 2 == 0) {
                newDiv.className = 'field white';
            } else {
                newDiv.className = 'field black';
            }
            divBlocks.appendChild(newDiv);
        }
    } else {
        for (let i = 1; i <= 8; i++) {
            let newDiv = document.createElement('div');
            if (i % 2 == 0) {
                newDiv.className = 'field black';
            } else {
                newDiv.className = 'field white';
            }
            divBlocks.appendChild(newDiv);
        }
    }

    columnBlocks.appendChild(divBlocks);

    fieldAndNumbersBlocks.appendChild(columnBlocks);

}
