document.addEventListener('DOMContentLoaded', () => {

    // program to find the HCF or GCD of two integers
    function greatestDivisor() {
        let gcd;
        // take input
        let number1 = document.getElementById('fnumber').value
        let number2 = document.getElementById('snumber').value
        let msg;
        // looping from 1 to number1 and number2
        for (let i = 1; i <= number1 && i <= number2; i++) {

            // check if is factor of both integers
            if (number1 % i == 0 && number2 % i == 0) {
                gcd = i;
            }
        }
        playAgain();
        msg = `The GCD of ${number1} and ${number2} is ${gcd}.`
        return computerInputDisplay(msg, 1000, "computer");
    }

    const playAgain = () => {
        let play = document.getElementById('Submit').innerHTML = 'Check GCD';
        clearNode();
    }

    const computerInputDisplay = (input, delay, idclass) => {
        computerMsg = document.createElement('div');
        computerMsg.textContent = input;
        computerMsg.setAttribute('id', idclass);
        computerMsg.setAttribute('class', idclass);

        setTimeout(() => {
            document.getElementById('msg').appendChild(computerMsg);
        }, delay);
    }

    const clearNode = () => {
        let msg = document.getElementById('msg');
        while (msg.firstChild) {
            msg.removeChild(msg.firstChild);
        }
    }

    let detect = document.getElementById('Submit');

    // eventListners
    detect.addEventListener('click', greatestDivisor);


 


})

