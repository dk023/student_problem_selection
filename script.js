document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const roll = document.getElementById("roll").value;
  const problem = document.querySelector('input[name="problem"]:checked');

  if(!problem){
    alert("Select one problem!");
    return;
  }

  let responses = JSON.parse(localStorage.getItem("responses")) || [];

  // Prevent duplicate submission
  if(responses.some(r => r.roll === roll)){
    alert("You have already submitted!");
    return;
  }

  responses.push({
    roll: roll,
    problem: problem.value
  });

  localStorage.setItem("responses", JSON.stringify(responses));

  document.getElementById("msg").innerText =
    "Submitted successfully! You cannot submit again.";

  document.getElementById("form").reset();
});
