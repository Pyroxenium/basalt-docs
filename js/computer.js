function toggleComputer(computerid) {
    var x = document.getElementById(computerid);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }