const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';



//TODO: Variables for Part 2
let question1 = "Who was the first American woman in space? ";
let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = "What is the minimum crew size for the ISS? ";
let questions = [question1, question2, question3, question4, question5];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestions() {
 for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
 }

}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numCorrectAnswers = 0;
  
  for (let i = 0; i < candidateAnswers.length; i++) {
   
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numCorrectAnswers++
    }
  
  
  
   }

   let grade = (numCorrectAnswers/questions.length)*100;

    //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
  if (candidateAnswers === correctAnswers[0]){
    console.log("Correct! Sally Ride was the first American woman in space");
  } else {
    console.log("No, silly! Sally Ride was the first American woman in space. You answered: " + candidateAnswer[0]);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName +". You will need to get 4 out of the following 5 questions correct in order to pass this test");
  askQuestions();
  gradeQuiz(this.candidateAnswers);
  if (gradeQuiz() < 80){
    console.log(`Unfortunately you've failed the quiz with ${gradeQuiz()}% of the questions correct. The correct answers were ${correctAnswers}. Feel free to try again :)`)
  } else if (gradeQuiz() === 80) {
    console.log(`Great job! You passed with 4 out of 5 of the questions correct! The correct answers were ${correctAnswers}. Feel free to try again to get all of them right!`);
  } else {
    console.log("Fantastic! You got all the right answers! You're very smart and talented! :)");
  }
}







// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};