document.addEventListener('DOMContentLoaded', () => {

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What is the prime factorisation of 210?',
      'options': [
        '2, 3, 5, 7',
        '3, 5, 7, 11',
        '2, 5, 11, 13',
        '3, 5, 7, 19'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job!.',
      'incorrectResponse': 'Not quite. Try again.'
    },
    {
      'q': 'What is the prime factorisation of 6887?',
      'options': [
        '71, 73',
        '47, 67',
        '71, 97',
        '19, 83'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'Find the general solution of the congruence 3x ≡ 5 (mod 7)?',
      'options': [
        'x ≡ 1 (mod 7)',
        'x ≡ 3 (mod 7)',
        'x ≡ 4 (mod 7)',
        'x ≡ 5 (mod 7)'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect.'
    },
    {
      'q': 'Solve the simultaneous congruences x ≡ 6 (mod 11), x ≡ 13 (mod 16), x ≡ 9 (mod 21), x ≡ 19 (mod 25).',
      'options': [
        'x ≡ 8800 (mod 92400)',
        'x ≡ 51669 (mod 92400)',
        'x ≡ 22176 (mod 92400)',
        'x ≡ 86625 (mod 92400)'
      ],
      'correctIndex': 1,
      'correctResponse': 'You\'re a genius! Excellent work.',
      'incorrectResponse': 'Try again. Follow the example on our Chinese Remainder Thoerem page.'
    },
    {
      'q': 'Calculate 𝜙(42).',
      'options': [
        '2 * 3 * 7',
        '42',
        '42(1 - 1/2)(1 - 1/3)(1 - 1/7)',
        '12'
      ],
      'correctIndex': 3,
      'correctResponse': 'Super! You got that right.',
      'incorrectResponse': 'Wrong! You might need to read the documentation.'
    },
    {
      'q': 'Calculate p and q given n = 851 and 𝜙(n) = 792.',
      'options': [
        'p = 37 and q = 23',
        'p = 851 and q = 60',
        'p = 60 and q = 23',
        'p = 73 and q = 32'
      ],
      'correctIndex': 0,
      'correctResponse': 'Wow! That\'s impressive.',
      'incorrectResponse': 'Hmm, try that one again.'
    },
    {
      'q': 'Find d where e = 11 and 𝜙(n) = 48.',
      'options': [
        '11',
        '53',
        '24',
        '35'
      ],
      'correctIndex': 3,
      'correctResponse': 'Excellent work',
      'incorrectResponse': 'Sorry but that is incorrect.'
    }
  ]
});

})