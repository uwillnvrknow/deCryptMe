document.addEventListener('DOMContentLoaded', () => {

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'True or false, the result of P + Q is a reflection of a point on the line PQ?',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Hmm, I don\'t think so.'
      },
      {
        'q': 'True or false, the fastest way to calculate 100P is 1P, 2P, 3P, 6P, 12P, 24P, 25P, 50P, 100P?',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Next time.'
      },
      {
        'q': 'What is the fastest way to calculate 36P (Hint: 7 steps, comma separate)?',
        'options': [
          '1P, 2P, 4P, 8P, 12P, 18P, 36P',
          '1P, 2P, 4P, 8P, 9P, 18P, 36P',
          '2P, 3P, 8P, 9P, 18P, 19, 36P'
        ],
        'correctIndex': 1,
        'correctResponse': 'You\'re a genius!',
        'incorrectResponse': 'Sorry, that\'s not quite right.'
      },
      {
        'q': 'How many steps are needed to calculate the fastest way to 47P?',
        'options': [
          '2',
          '4',
          '8',
          '10'
        ],
        'correctIndex': 3,
        'correctResponse': 'Brilliant.',
        'incorrectResponse': 'Bit off there.'
      }
    ]
  });

})