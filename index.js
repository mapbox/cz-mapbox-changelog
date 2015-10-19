"format cjs";

var wrap = require('word-wrap');

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = {

  // When a user runs `git cz`, prompter will
  // be executed. We pass you cz, which currently
  // is just an instance of inquirer.js. Using
  // this you can ask questions and get answers.
  //
  // The commit callback should be executed when
  // you're ready to send back a commit template
  // to git.
  //
  // By default, we'll de-indent your commit
  // template and will keep empty lines.
  prompter: function(cz, commit) {

    console.log('\nLine 1 will be cropped at 80 characters. All other lines will be wrapped after 80 characters.\n');

    // Let's ask some questions of the user
    // so that we can populate our commit
    // template.
    //
    // See inquirer.js docs for specifics.
    // You can also opt to use another input
    // collection library if you prefer.
    cz.prompt([
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change:\n'
      }, {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change:\n'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of change that you\'re committing:',
        choices: [
          {
            name: 'UI: UI improvement',
            value: 'UI'
          },
          {
            name: 'Feature: a feature adition',
            value: 'FEATURE'
          },
          {
            name: 'PUBLIC-BUG: a bug fix we want in the change log',
            value: 'PUBLIC-BUG'
          },
          {
            name: 'BUG: Something you fixed but don\'t need to draw attention too',
            value: 'BUG'
          },
          {
            name: 'REFACTOR: a refactor, not going to be public but you might want to explain this in detail',
            value: 'REFACTOR'
          },
          {
            name: 'INTERNAL: a catch all for. Please use as little as possible.',
            value: 'INTERNAL'
          }
        ]
      },
    ], function(answers) {

      var maxLineWidth = 80;

      var wrapOptions = {
        trim: true,
        newline: '\n',
        indent:'',
        width: maxLineWidth
      };

      // Hard limit this line
      var subject = answers.subject.trim().slice(0, maxLineWidth);
      var body = wrap(answers.body, wrapOptions);
      var footer = '['+answers.type+']';

      commit(subject + '\n\n' + body + '\n\n' + footer);
    });
  }
}