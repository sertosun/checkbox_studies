function myFunction() {
  let colorChg = document.getElementById("colorChg");
  let lion = document.getElementById("lion");
  let eagle = document.getElementById("eagle");

  if (colorChg.checked) {
    document.body.style.backgroundColor = "black";
    lion.style.display = "none";
    eagle.style.display = "block";
  } else {
    document.body.style.backgroundColor = "yellow";
    eagle.style.display = "none";
    lion.style.display = "block";
  }
}
