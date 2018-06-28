var time = 10;
var correctAnswer = 0;
var wrongAnswer = 0;
var temp;
var temp2;
var questions = [{question: "Question 1", answerOne: "Answer 1", answerTwo: "Answer 2", answerThree: "Answer 3"},{question: "Question 2", answerOne: "Answer 4", answerTwo: "Answer5", answerThree: "Answer6"},{question: "Question 3", answerOne: "Answer 7", answerTwo: "Answer8", answerThree: "Answer9"},{question: "Question 4", answerOne: "Answer 10", answerTwo: "Answer2", answerThree: "Answer3"},{question: "Question 5", answerOne: "Answer 1", answerTwo: "Answer2", answerThree: "Answer3"}];
var numQuestions = questions.length;
var i = 0;
// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


//start screen with button saying start game!
$("button").on("click",function(){
    generateQuestion();
})

function Timer()
{
    $("#timer").html(time);
    if(time > 0)
    {
        time--;
    }
    else
    {
        $("#timer").html("Time's Up!");
        clearTimeout(temp);
        revealAnswer();
    }    
}

function revealAnswer()
{
    //console.log("revealed");
    $("#answerChoices").html("The answer is....");
    i++;
    if(i == numQuestions)
    {
        setTimeout(function(){
            $("#answerChoices").html("correct: "+correctAnswer+"<br> wrong: "+wrongAnswer);
             var newButton = $("<button>");
            newButton.text("RESTART");
            $("#contentBox").append(newButton);
            $(document).on("click","button",function(){
           location.reload();
    })})}   
    else
    {
        time = 10;
        setTimeout(function(){
            $("#question").html(questions[i]["question"]);
            $("#answerChoices").html("<span>"+questions[i]["answerOne"]+"</span><br><span>"+ questions[i]["answerTwo"] +"</span><br><span>"+questions[i]["answerThree"]+"</span>");
            temp = setInterval(Timer,1000);
    },3000);
    }
  
}

function generateQuestion()
{
    $("#question").html(questions[i]["question"]);
    $("#answerChoices").html("<span>"+questions[i]["answerOne"]+"</span><br><span>"+ questions[i]["answerTwo"] +"</span><br><span>"+questions[i]["answerThree"]+"</span>");
    temp = setInterval(Timer,1000);
    $(document).on("click","span",function(){
        var choice = $(this).text();
        if(choice == "Answer 1")
        {
            correctAnswer++;
            clearTimeout(temp);
                $("#answerChoices").html("Correct!");
                i++;
                if(i == numQuestions)
                {
                    setTimeout(function(){
                    $("#answerChoices").html("correct: "+correctAnswer+"<br> wrong: "+wrongAnswer);
                    var newButton = $("<button>");
                    newButton.text("RESTART");
                    $("#contentBox").append(newButton);
                    $(document).on("click","button",function(){
                        location.reload();
                    })})}
    else
    {
        time = 10;
        setTimeout(function(){
            $("#question").html(questions[i]["question"]);
            $("#answerChoices").html("<span>"+questions[i]["answerOne"]+"</span><br><span>"+ questions[i]["answerTwo"] +"</span><br><span>"+questions[i]["answerThree"]+"</span>");
            temp = setInterval(Timer,1000);
    },3000);
    }
        }
        else{
            wrongAnswer++;
            clearTimeout(temp);
                $("#answerChoices").html("The correct answer is ");
                i++;
                if(i == numQuestions)
                {
                    setTimeout(function(){
                        $("#answerChoices").html("correct: "+correctAnswer+"<br> wrong: "+wrongAnswer);
                         var newButton = $("<button>");
                        newButton.text("RESTART");
                        $("#contentBox").append(newButton);
                        $(document).on("click","button",function(){
                            location.reload();
                })})}
                else
                {
                    time = 10;
                    setTimeout(function(){
                        $("#question").html(questions[i]["question"]);
                        $("#answerChoices").html("<span>"+questions[i]["answerOne"]+"</span><br><span>"+ questions[i]["answerTwo"] +"</span><br><span>"+questions[i]["answerThree"]+"</span>");
                        temp = setInterval(Timer,1000);
                },3000);
                }
        }
    })
}
