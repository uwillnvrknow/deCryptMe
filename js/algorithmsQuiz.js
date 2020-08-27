document.addEventListener('DOMContentLoaded', () => {

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'What does DHKE stand for?',
        'options': [
          'Decrypt Hidden Key Exchange',
          'Diffie Hellman Key Exchange'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Try again. You\'ve got this!'
      },
      {
        'q': 'Are the keys aG and bG public?',
        'options': [
          'Yes',
          'No'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Go read the Diffie-Hellman section again.'
      },
      {
        'q': 'True or false, an interceptor can calculate the shared key from a public key and a generator?',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'You\'re a genius!',
        'incorrectResponse': 'Nope. It\'s actually false.'
      },
      {
        'q': 'p = 7 and g = 3, what is Alice\'s public key when her private key is 4?',
        'options': [
          '7',
          '3',
          '4',
          '21'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Wrong! Try again.'
      },
      {
        'q': 'p = 7 and A = 4. Eve\'s private key is 2 and she has managed to intercept communications between Alice and Bob, what is Eve and Alice\'s shared key?',
        'options': [
          '4',
          '8',
          '7',
          '2'
        ],
        'correctIndex': 3,
        'correctResponse': 'Brilliant work.',
        'incorrectResponse': 'Hmm, not quite.'
      },
      {
        'q': 'True or false, the DHKE is used in Elliptic Curve Cryptography?',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Well done! :)',
        'incorrectResponse': 'Actually, it is used in ECC.'
      },
      {
        'q': 'How many shadows are necessary to find the secret where y = (ax^6 + bx^5 + ... + g) mod p?',
        'options': [
          '1',
          '3',
          '5',
          '7'
        ],
        'correctIndex': 3,
        'correctResponse': 'Way to go!',
        'incorrectResponse': 'I know you can do it. Try again.'
      },
      {
        'q': 'In a (3, 4) scheme, a = 2, b = -1 and c = 5. Where x = 5, find y.',
        'options': [
          'y = 25',
          'y = 20',
          'y = 24',
          'y = 10'
        ],
        'correctIndex': 0,
        'correctResponse': 'That\'s it!',
        'incorrectResponse': 'You might need to read the documentation again.'
      },
      {
        'q': 'You possess the following shadows (5, 8) and (3, 4) from a scheme where k = 2 and p = 17. Find the secret K.',
        'options': [
          '10',
          '12',
          '15',
          '24'
        ],
        'correctIndex': 2,
        'correctResponse': 'Look at you go!',
        'incorrectResponse': 'Wrong! '
      },
      {
        'q': 'What mathematical method is required to find K in a (3, n) scheme?',
        'options': [
          'Shor\'s Algorithm',
          'Euclid\'s Algorithm',
          'Euler\'s Function',
          'Crammer\'s Rule'
        ],
        'correctIndex': 3,
        'correctResponse': 'That\'s him! Well done.',
        'incorrectResponse': 'Incorrect. His algorithm is useful for other cryptographic algorithms.'
      },
      {
        'q': 'y = 3x<sup>4</sup> - 2x<sup>3</sup> + 7x<sup>2</sup> + 2x + 5. What is the secret concealed in this polynomial?',
        'options': [
          '2',
          '3',
          '5',
          '7'
        ],
        'correctIndex': 2,
        'correctResponse': 'Marvelous Work',
        'incorrectResponse': 'Re-read the article on Shamir\'s algorithm again.'
      },
      {
        'q': 'The equation g<sup>r</sup> = tN+1 can be rearranged to give:',
        'options': [
          '(g<sup>r/2</sup> + 1)(g<sup>r/2</sup> + 1) = tN',
          '(g<sup>r/2</sup> + 1)(g<sup>r/2</sup> - 1) = tN',
          '(g<sup>r/2</sup> - 1)(g<sup>r/2</sup> - 1) = tN'
        ],
        'correctIndex': 1,
        'correctResponse': 'Genius!',
        'incorrectResponse': 'Re-read the article on Shor\'s algorithm again.'
      },
      {
        'q': 'Which of the following is a linear transformation used by the quantum computer?',
        'options': [
          'Quantum Fourier',
          'Quantum Sixier',
          'Quantum Eightier'
        ],
        'correctIndex': 0,
        'correctResponse': 'Well Done',
        'incorrectResponse': 'Not quite.'
      },
      {
        'q': 'Which of the following properties must the value of r have for the algorithm to work?',
        'options': [
          'It must be a factor of N ',
          'It must be greater than g',
          'It must be even'
        ],
        'correctIndex': 2,
        'correctResponse': 'Super',
        'incorrectResponse': 'I\'m afraid you\'ll have to try again.'
      },
      {
        'q': 'For any initial guess, g, we make, what is the probability that Shor’s algorithm will work? ',
        'options': [
          '0.125',
          '0.375',
          '0.625'
        ],
        'correctIndex': 1,
        'correctResponse': 'Brilliant',
        'incorrectResponse': 'Hmm I dont\'t think so.'
      }
    ]
  });

})