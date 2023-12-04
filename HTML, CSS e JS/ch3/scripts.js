function increment() {
  var counter = document.getElementById("counter");
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function decrement() {
  var counter = document.getElementById("counter");
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
  if (counter.innerHTML < 0) {
    counter.innerHTML = 0;
  }
}
