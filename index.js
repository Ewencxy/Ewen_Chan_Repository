
function changebg(){

  window.location.href = ('question.html');
}


function changebg1(){
  if (confirm("Correct")) {
    window.location.href = ('Question2.html');
  }
  document.getElementById("demo").innerHTML = num;

}

function changebg2(){
  if (confirm("Correct")) {
    window.location.href = ('question3.html');
  }
  document.getElementById("demo").innerHTML = num;

}
function changebg3(){
  if (confirm("Correct")) {
    window.location.href = ('question4.html');
  }
  document.getElementById("demo").innerHTML = num;

}

function changebg4(){
  if (confirm("Correct")) {
    window.location.href = ('question5.html');
  }
    document.getElementById("demo").innerHTML = num;

  }

  function changebg5(){
    if (confirm("Correct")) {
      window.location.href = ('Score.html');
    }
      document.getElementById("demo").innerHTML = num;

    }

function wrong(){

  if (confirm("you got it wrong")) {
 }
  document.getElementById("demo").innerHTML = num;
}
