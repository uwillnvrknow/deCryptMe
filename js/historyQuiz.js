document.addEventListener('DOMContentLoaded', () => {

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'How long ago was cryptography invented?',
      'options': [
        '100 years',
        '400 years',
        '4000 years',
        '2000 years'

      ],
      'correctIndex': 2,
      'correctResponse': 'Good job, the Egyptians started using hieroglyphs around 4000 years ago.',
      'incorrectResponse': 'Incorrect. Refresh your memory and read our history page again.'
    },
    {
      'q': 'Which cipher came first?',
      'options': [
        'Caesar Cipher',
        'Vigenere Cipher'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct! Nice and Easy.',
      'incorrectResponse': 'Unlucky, that\'s wrong!'
    },
    {
      'q': 'How did ciphers start becoming more secure?',
      'options': [
        'Use of Keys',
        'Use of Rotors',
        'Use of Letters',
        'Use of Code books'
      ],
      'correctIndex': 0,
      'correctResponse': 'Excellent work. That is the correct answer.',
      'incorrectResponse': 'Not quite, try again.'
    },
    {
      'q': 'Who invented the Enigma Machine?',
      'options': [
        'Britain',
        'Poland',
        'France',
        'Germany'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well done!',
      'incorrectResponse': 'Wrong! You need to brush up on your history.'
    },
    {
      'q': 'How many settings does the machine have?',
      'options': [
        'Almost 160 million',
        'Almost 160 trillion',
        'Almost 160 billion',
        'Almost 160 quintillion'
      ],
      'correctIndex': 3,
      'correctResponse': 'Wow. That\'s impressive.',
      'incorrectResponse': 'Hmm, I think you are a tad off there.'
    },
    {
      'q': 'Alan Turing built a machine called the Bombe. What was the improvement that was made from the original Enigma machine?',
      'options': [
        'Could calculate keys at a faster speed.',
        'Fewer settings',
        'Built to find daily keys.',
        'More rotors added'
      ],
      'correctIndex': 2,
      'correctResponse': 'Superb work.',
      'incorrectResponse': 'Nope. Re-read history on Enigma then come back and try again.'
    },
    {
      'q': 'How did the Special Operations Executive communicate across Europe?',
      'options': [
        'Song Code',
        'Poem Code',
        'Book Code'
      ],
      'correctIndex': 1,
      'correctResponse': 'Well done :)',
      'incorrectResponse': 'Incorrect. The SOE preferred to use poems - which poem would you choose?'
    },
    {
      'q': 'What was the main issue with the American SIGABA machine?',
      'options': [
        'Not very transportable.',
        'Too slow to compute ciphers',
        'Hard to use'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re right. This machine tended to stick to the radio rooms of the U.S. Navy ships.',
      'incorrectResponse': 'Nope. Re-read history on WWII then come back and try again.'
    },
    {
      'q': 'The Japanese Type B Cipher Machine was nicknamed "Red". True or False?',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bingo! It was nicknamed "Purple".',
      'incorrectResponse': 'Nope. The Type A cipher machine was nicknamed "Red".'
    }
  ]
});

})