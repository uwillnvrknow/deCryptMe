document.addEventListener('DOMContentLoaded', () => {
    // program to find the prime number

    // take input from the user
    function primeNumber() {
        let number = document.getElementById('number').value
        let flag = 0;

        // check if number is equal to 1
        if (number == 1) {
            msg = `1 is neither prime nor composite number.`;
        }

        // check if number is greater than 1
        else if (number > 1) {

            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 1) {
                msg = `${number} is not a prime number.`;
            } else {
                msg = `${number} is a prime number.`;
            }
        }

        // check if number is less than 1
        else {
            msg = `The x value is ${signX * x} and the y value is ${signY * y}.`
            console.log("The number is not a prime number.");
        }
        playAgain();
        return computerInputDisplay(msg, 1000, "computer");
    };
 
    const playAgain = () => {
        let play = document.getElementById('Submit').innerHTML = 'Check if number is Prime';
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
    detect.addEventListener('click', primeNumber);

})