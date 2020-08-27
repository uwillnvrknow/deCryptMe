document.addEventListener('DOMContentLoaded', () => {

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [{
        'q': 'What did Phil Zimmermann do?',
        'options': [
          'Create PGP',
          'Teach at a University',
          'Reviewed the cryptographic strength of the Clipper chips'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Phil Zimmermann is the father of PGP.',
        'incorrectResponse': 'Incorrect! Phil Zimmermann created PGP and distributed his code via a personal FTP server.'
      },
      {
        'q': 'In which year did the Crypto Wars officially start?',
        'options': [
          '1947',
          '1954',
          '1962',
          '1977'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! The Crypto Wars officially started in November of that year.',
        'incorrectResponse': 'Incorrect! The Crypto Wars officially started in 1954.'
      },
      {
        'q': 'Which encryption standard was used to encrypt data on the internet during the crypto wars?',
        'options': [
          'RSA',
          'AES',
          'DES'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! We threw in an easy question, here comes some harder ones.',
        'incorrectResponse': 'Incorrect! How could you get this wrong! DES was the standard used at the begining of the Internet.'
      },
      {
        'q': 'What was argued should be protected by the First Amendment Rights?',
        'options': [
          'Floppy Disk',
          'Books',
          'Internet Data'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! This was the basis of Phil Karn\'s lawsuit.',
        'incorrectResponse': 'Incorrect! It was Floppy Disks that Phil Karn argued should be protected by the First Amendment Rights.'
      },
      {
        'q': 'What year was the first Crypto Wars officially over?',
        'options': [
          '1992',
          '1999',
          '2000',
          '2001'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Good job on remembering the date.',
        'incorrectResponse': 'Incorrect! The Crypto Wars I was officially over in 2000.'
      },
      {
        'q': 'Which organisation cracked DES?',
        'options': [
          'RSA Security',
          'NIST',
          'EFF',
          'GCHQ',
          'NSA',
          'Cypherpunk'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! The EFF were responsible for cracking DES.',
        'incorrectResponse': 'Incorrect! The EFF were responsible for cracking DES while the other organisations were not.'
      },
      {
        'q': 'Which country wanted to block non-backdoored cryptography?',
        'options': [
          'France',
          'U.K.',
          'U.S.'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! Following the Charlie Hebdo shooting David Cameron proposed this idea.',
        'incorrectResponse': 'Incorrect! The U.K. was behind this idea following the Charlie Hebdo shooting.'
      },
      {
        'q': 'Who exposed the NSA?',
        'options': [
          'Phil Karn',
          'Bernstein',
          'Matt Blaze',
          'Peter Junger',
          'Edward Snowden'
        ],
        'correctIndex': 4,
        'correctResponse': 'Correct! The revelations were leaked by Edward Snowden.',
        'incorrectResponse': 'Incorrect! The NSA spy who leaked information on them was Edward Snowden.'
      },
      {
        'q': 'IBM enforced a block size of [answer] after the NSA\'s intervention.',
        'options': [
          '48',
          '64',
          '128'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! IBM compromised on a 64 bit block size.',
        'incorrectResponse': 'Incorrect! Lucifer\'s key was 128 bits and the NSA wanted a 48 bit block size.'
      },
      {
        'q': 'The Clipper chip was introduced in which year?',
        'options': [
          '1993',
          '1994',
          '1996'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! 1993 was the year the Clipper chip was introduced to the U.S.',
        'incorrectResponse': 'Incorrect! 1993 was the year that the Clipper Chip was introduced to the U.S. and presented to AT&T.'
      }
    ]
  });

})