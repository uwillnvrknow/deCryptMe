document.addEventListener('DOMContentLoaded', () => {

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'What does a basic cryptosystem model involve?',
        'options': [
          'Intercepting messages',
          'Encrypting then decrypting messages',
          'Sending plaintext to a recipient',
          'Unsecure communication'
        ],
        'correctIndex': 1,
        'correctResponse': 'Excellent work! You\'re a natural.',
        'incorrectResponse': 'Hmm, not quite. Try again.'
      },
      {
        'q': 'What are the key components of a cryptosystem model?',
        'options': [
          'Message, Encryption Key, Decryption Key',
          'Sender, Interceptor, Recipient',
          'Plaintext, Encryption Algorithm, Ciphertext, Decryption Algorithm',
          'Message, Encryption Algorithm, Decryption Algorithm'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Oh no! That\'s not correct. Have another go.'
      },
      {
        'q': 'What is the collection of all possible key values called?',
        'options': [
          'Composite Numbers',
          'Keys',
          'Encryption Factors',
          'Keyspace'
        ],
        'correctIndex': 3,
        'correctResponse': 'You\'re a genius!',
        'incorrectResponse': 'That\'s incorrect. Have another read over the cryptosystem model.'
      },
      {
        'q': 'The 2 general types of key-based algorithms are symmetric and asymmetric key encryption.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Well done.',
        'incorrectResponse': 'Try again!'
      },
      {
        'q': 'How many keys does a symmetric key encryption algorithm require?',
        'options': [
          '0',
          '1',
          '2'
        ],
        'correctIndex': 1,
        'correctResponse': 'Bingo! You\'re correct.',
        'incorrectResponse': 'Not quite right there. Refresh your memory and read over Symmetric Key Encryption.'
      },
      {
        'q': 'How many keys does a asymmetric key encryption algorithm require?',
        'options': [
          '0',
          '1',
          '2'
        ],
        'correctIndex': 2,
        'correctResponse': 'Brilliant',
        'incorrectResponse': 'Incorrect.'
      },
      {
        'q': 'What is asymmetric key encryption also known as?',
        'options': [
          'Private Key Encryption',
          'Public Key Encryption',
          'Strong Mathematical Encryption'
        ],
        'correctIndex': 1,
        'correctResponse': 'Superb :D',
        'incorrectResponse': 'Nope. Refresh your memory and read over Asymmetric Key Encryption.'
      },
      {
        'q': 'How is the authenticity of public keys verified?',
        'options': [
          'Certificate Authority',
          'From 3rd parties',
          'Public Key Infrastructure'
        ],
        'correctIndex': 2,
        'correctResponse': 'Excellent Work.',
        'incorrectResponse': 'Not quite right there. Refresh your memory and read over Symmetric Key Encryption.'
      }
    ]
  });

})