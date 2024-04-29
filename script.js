//Input
document.getElementById("quizMarker").addEventListener("click", markQuiz);

function markQuiz() {
  //Get quiz info

  let q1Response = document.getElementById("q1Res");
  let q2Response = document.getElementById("q2Res");
  let q3Response = document.getElementById("awaken");
  let q4Response = document.getElementById("q4Res");
  let q5Response = document.getElementById("q5Res");
  let q6Response = document.getElementById("song");

  let q1Response2 = document.getElementById("q1Res").value;
  let q2Response2 = document.getElementById("q2Res").value;
  let q3Response2 = document.getElementById("awaken").value;
  let q4Response2 = document.getElementById("q4Res").value;
  let q5Response2 = document.getElementById("q5Res").value;
  let q6Response2 = document.getElementById("song").value;

  let q1Answer = document.getElementById("q1Ans");
  let q2Answer = document.getElementById("q2Ans");
  let q3Answer = document.getElementById("q3Ans");
  let q4Answer = document.getElementById("q4Ans");
  let q5Answer = document.getElementById("q5Ans");
  let q6Answer = document.getElementById("q6Ans");

  q1Response2 = q1Response2.toLowerCase();
  q2Response2 = q2Response2.toLowerCase();
  q4Response2 = q4Response2.toLowerCase();

  //Count correct ans
  let numCorrect = 0;

  if (q1Response2 == "makoto yuki") {
    q1Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q1Response.style.border = "2px solid green";
    q1Answer.style.color = "green";
  } else {
    q1Answer.innerHTML = "Wrong :(";
    q1Response.style.border = "2px solid red";
    q1Answer.style.color = "red";
  }

  if (q2Response2 == "keisuke hiraga") {
    q2Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q2Response.style.border = "2px solid green";
    q2Answer.style.color = "green";
  } else {
    q2Answer.innerHTML = "Wrong :(";
    q2Response.style.border = "2px solid red";
    q2Answer.style.color = "red";
  }

  if (q3Response2 === "gun") {
    q3Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q3Response.style.border = "2px solid green";
    q3Answer.style.color = "green";
  } else {
    q3Answer.innerHTML = "Wrong :(";
    q3Response.style.border = "2px solid red";
    q3Answer.style.color = "red";
  }

  if (q4Response2 == "megami tensei") {
    q4Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q4Answer.style.color = "green";
    q4Response.style.border = "2px solid green";
  } else {
    q4Answer.innerHTML = "Wrong :(";
    q4Response.style.border = "2px solid red";
    q4Answer.style.color = "red";
  }

  if (q5Response2 == "22") {
    q5Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q5Answer.style.color = "green";
    q5Response.style.border = "2px solid green";
  } else {
    q5Answer.innerHTML = "Wrong :(";
    q5Response.style.border = "2px solid red";
    q5Answer.style.color = "red";
  }

  if (q6Response2 === "FMFL/KNK") {
    q6Answer.innerHTML = "Correct!";
    numCorrect = numCorrect + 1;
    q6Response.style.border = "2px solid green";
    q6Answer.style.color = "green";
  } else {
    q6Answer.innerHTML = "Wrong :(";
    q6Response.style.border = "2px solid red";
    q6Answer.style.color = "red";
  }

  if (numCorrect === 6) {
    document.getElementById("result-phrase").innerHTML =
      "Amazing!!!!! Yippee!!!";
  } else if (numCorrect >= 4) {
    document.getElementById("result-phrase").innerHTML = "Great Job!!!! :D";
  } else if (numCorrect >= 2) {
    document.getElementById("result-phrase").innerHTML =
      "Good, but could be better";
  } else {
    document.getElementById("result-phrase").innerHTML = ":(";
  }

  let percent = (numCorrect * 100) / 6;
  Math.floor(percent);

  document.getElementById("result").innerHTML = `${numCorrect}/6 (${percent})`;
}
