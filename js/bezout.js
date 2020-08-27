document.addEventListener('DOMContentLoaded', () => {
  
  // program to find x and y values of the extended euclidean algorithm
   function extendedEuclid() {
    // take input
    let a = document.getElementById('anumber').value
    let b = document.getElementById('bnumber').value
    let msg;

    if (a !== a || b !== b) {
      return [NaN, NaN, NaN];
    }
    
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
      return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
      return false;
    }
    var signX = (a < 0) ? -1 : 1,
      signY = (b < 0) ? -1 : 1,
      x = 0,
      y = 1,
      u = 1,
      v = 0,
      q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a !== 0) {
      q = Math.floor(b / a);
      r = b % a;
      m = x - u * q;
      n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    playAgain();
    msg = `The x value is ${signX * x} and the y value is ${signY * y}.`
    return computerInputDisplay(msg, 1000, "computer");
  }
  

const playAgain = () => {
    let play = document.getElementById('Submit').innerHTML = 'Find x and y';
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
detect.addEventListener('click', extendedEuclid);

})