let goal_a = 0;
let goal_b = 0;

function addGoal_a() {
    goal_a +=1;
    document.getElementById("a_team").innerHTML=(goal_a +" ");
}

function addGoal_b() {
    goal_b +=1;
    document.getElementById("b_team").innerHTML=goal_b;
}
function removeGoal_a() {
    goal_a -=1;
    if(goal_a<0){
        goal_a=0;
    }
    document.getElementById("a_team").innerHTML=goal_a +" ";
}
function removeGoal_b() {
    goal_b -=1;
    if(goal_b<0){
        goal_b=0;
    }
    document.getElementById("b_team").innerHTML=goal_b;
}

function changeTeam_a(){
    let newTeamName_a = prompt("What is name of the first team?")
    document.getElementById("teamName_a").innerHTML=newTeamName_a;

}

function changeTeam_b(){
    let newTeamName_b = prompt("What is name of the second team?")
    document.getElementById("teamName_b").innerHTML=newTeamName_b;

}

function enterGoal_a() {
    let newPrompt_a = prompt("What is the score of the first team?");
    newScore_a = parseInt(newPrompt_a)
    
    if (isNaN(newScore_a) || +newScore_a < 0) {
        alert("Not a number! Try again...");
    } else {
        goal_a = newScore_a;
        document.getElementById("a_team").innerHTML = newScore_a + " ";
    }
}

function enterGoal_b(){
    let newPrompt_b = prompt("What is the score of the second team?")
    newScore_b = parseInt(newPrompt_b)
    if (isNaN(newScore_b) || +newScore_a < 0) {
        alert("Not a valid number! Try again...");
    } else {
        goal_b = newScore_b;
        document.getElementById("b_team").innerHTML = newScore_b;
    }

}