function copyMail() {
  navigator.clipboard.writeText("josipmuzic99@gmail.com");
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
