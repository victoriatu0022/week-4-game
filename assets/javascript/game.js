    $(document).ready(function () {

    // variables declare here
    var randomNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
    var firstCrystal = (Math.floor(Math.random() * 11) + 1);
    var secondCrystal = (Math.floor(Math.random() * 11) + 1);
    var thirdCrystal = (Math.floor(Math.random() * 11) + 1);
    var fourthCrystal = (Math.floor(Math.random() * 11) + 1);

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // makes the text connect with the score 
    $("#user-score").text(userScore);
    $("#user-wins").text(wins);
    $("#user-losses").text(losses);

    // the random number to be matched
    $("#random-number").text(randomNumber);

    // reset 
    var reset = function() {
        randomNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
        $("#random-number").text(randomNumber);


        firstCrystal = (Math.floor(Math.random() * 11) + 1);
        secondCrystal = (Math.floor(Math.random() * 11) + 1);
        thirdCrystal = (Math.floor(Math.random() * 11) + 1);
        fourthCrystal = (Math.floor(Math.random() * 11) + 1);
        userScore = 0;
        $("#user-score").text(userScore);
    }
    // game function for winning and losing
    var win = function() {
        wins++
        $("#user-wins").text(wins);
        alert("You Win!");
        reset();
    }
    var lose = function() {
        losses++
        $("#user-losses").text(losses);
        alert("You Lose!")
        reset();
    }
    var winOrLose = function() {
        if (userScore === randomNumber) {
            win();
        } else if (userScore > randomNumber) {
            lose();
        }
    }
    //  by clicking on crystal, it will add the score into userScore then see if user wins or loses
    $("#first-crystal").click(function () {
        userScore += firstCrystal;
        $("#user-score").text(userScore);
        winOrLose();
    });
// 2
    $("#second-crystal").click(function () {
        userScore += secondCrystal;
        $("#user-score").text(userScore);
        winOrLose();    
    });
//3
    $("#third-crystal").click(function () {
        userScore += thirdCrystal;
        $("#user-score").text(userScore);
        winOrLose();  
    });
//4
    $("#fourth-crystal").click(function () {
        userScore += fourthCrystal;
        $("#user-score").text(userScore);
        winOrLose(); 
    });

});