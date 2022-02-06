let score = "";
let min = Infinity;
let max = 0;
console.log(score);

function addDigit(value) {
  if (score == "#") {
    score = "";
    score += value;
    document.getElementById("score-value").textContent = score;
  } else {
    score += value;
    document.getElementById("score-value").textContent = score;
  }
}

function reset() {
  min = Math.min(+score, min);
  max = Math.max(+score, max);
  console.log(min, max);
  score = "#";
  document.getElementById("min-value").textContent = min;
  document.getElementById("max-value").textContent = max;
  document.getElementById("score-value").textContent = score;
}
