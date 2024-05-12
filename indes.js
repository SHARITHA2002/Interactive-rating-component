var score=0;

function inputRating(val)
{
    
    score+= val;
    console.log(score);
}
function thankYou(event)
{
    var result=document.getElementById("score");
    result.innerText=score;
    var ratingState=document.getElementById("ratingState");
    ratingState.style.display="none";
    var thankyouState=document.getElementById("thankyouState");
    thankyouState.style.display="flex";
}