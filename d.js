
function appendnum(value) {
  document.getElementById("show").value += value;
}

function clearShow() {
  document.getElementById("show").value ="";
}

function result() {
  try {
      document.getElementById("show").value = eval(document.getElementById("show").value);
  } catch (error) {
      alert("Invalid expression");
  }
}