function config() {
  const img = document.getElementById("productImg");
  const color = document.getElementById("color").value;
  const neck = document.getElementById("neck").value;
  img.src = "images/" + color + "-" + neck + ".jpg";
}
config();
