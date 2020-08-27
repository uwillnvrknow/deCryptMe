document.addEventListener('DOMContentLoaded', () => {

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'Calculate gcd(26187, 1533)',
        'options': [
          '6',
          '21',
          '126',
          '12'
        ],
        'correctIndex': 1,
        'correctResponse': 'Excellent work! You\'re a natural.',
        'incorrectResponse': 'Hmm, not quite. Try again. You can always use our GCD calculator to double check your answer.'
      },
      {
        'q': 'Calculate gcd(288, 61)',
        'options': [
          '7',
          '10',
          '3',
          '1'
        ],
        'correctIndex': 3,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Oh no! That\'s not correct. Have another go.'
      },
      {
        'q': 'If the gcd(x, y)=1, what do we call the x, y number pair?',
        'options': [
          'Composite Numbers',
          'Relatively Prime',
          'Prime Factors',
          'Not Prime'
        ],
        'correctIndex': 1,
        'correctResponse': 'You\'re a genius!',
        'incorrectResponse': 'That\'s incorrect. Have another read over Euclid\'s algorithm.'
      },
      {
        'q': 'Find two integers and b for the gcd(153, 84) such that 153a + 84b = 3.',
        'options': [
          'a = 11 and b = -20',
          'a = 11 and b = -9',
          'a = -20 and b = 11',
          'a = 153 and b = -9'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Well done.',
        'incorrectResponse': 'Try again! Read Bezout\'s Identity and the extended Euclidean Algorithm for help.'
      },
      {
        'q': 'Find two integers a and b such that 1914a + 899b = gcd(1914, 899).',
        'options': [
          'a = -17 and b = -1',
          'a = 8 and b = -2',
          'a = 8 and b = -17',
          'a = 29 and b = 8'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Well done.',
        'incorrectResponse': 'Try again! Read Bezout\'s Identity and the extended Euclidean Algorithm for help.'
      }
    ]
  });

})