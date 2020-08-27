document.addEventListener('DOMContentLoaded', () => {

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What is the product state vector of the following binary value: 110?',
      'options': [
        '[0 0 0 1 0 0 0 0]',
        '[0 0 0 0 0 1 0 0]',
        '[0 0 0 0 0 0 0 1]',
        '[0 0 0 0 0 0 1 0]'
      ],
      'correctIndex': 3,
      'correctResponse': 'Good job!',
      'incorrectResponse': 'Not quite. Try again.'
    },
    {
      'q': 'What is the probability that the product state vector to the right collapses into [-1/8 &radic;15/8 -&radic;3/8 3&radic;5/8 ] the sequence of bits, 01?',
      'options': [
        '1/64',
        '15/64',
        '3/64',
        '45/64'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'Which is the following is a protocol used in quantum key distribution?',
      'options': [
        'BB84',
        'DD32',
        'EE63',
        'GG27'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect.'
    },
    {
      'q': 'If Alice sends Bob a photon of vertical spin, what is the probability that Bob will measure a photon of vertical spin? (assume there’s no eavesdropper)',
      'options': [
        '50%',
        '75%',
        '25%',
        '100%'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! Excellent work.',
      'incorrectResponse': 'Try again. Read our Quantum page again.'
    },
    {
      'q': 'If Alice sends Bob a photon with -45° spin and Eve intercepts it, by passing it through a rectilinear filter, what is the probability that Bob will measure a photon with -45° spin? ',
      'options': [
        '50%',
        '75%',
        '25%',
        '100%'
      ],
      'correctIndex': 2,
      'correctResponse': 'Super! You got that right.',
      'incorrectResponse': 'Wrong! You might need to read the documentation.'
    },
    {
      'q': 'What kind of algorithm is needed to produce truly random numbers?',
      'options': [
        'Non-dynamic',
        'Non-greedy',
        'Non-heuristic',
        'Non-deterministic'
      ],
      'correctIndex': 3,
      'correctResponse': 'Wow! That\'s impressive.',
      'incorrectResponse': 'Hmm, try that one again.'
    },
    {
      'q': 'What is the biggest limitation for quantum computers?',
      'options': [
        'Cost',
        'Noise',
        'Size',
        'Materials'
      ],
      'correctIndex': 1,
      'correctResponse': 'Excellent work',
      'incorrectResponse': 'Sorry but that is incorrect.'
    }
  ]
});

})