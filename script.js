function myFunction() {
  let colorChg = document.getElementById("colorChg");
  let leon = document.getElementById("leon");
  let eagle = document.getElementById("eagle");

  if (colorChg.checked) {
    document.body.style.backgroundColor = "black";
    leon.style.display = "none";
    eagle.style.display = "block";
  } else {
    document.body.style.backgroundColor = "yellow";
    eagle.style.display = "none";
    leon.style.display = "block";
  }
}
