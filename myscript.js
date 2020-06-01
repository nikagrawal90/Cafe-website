function myfunc1() {
      var x = document.getElementById("list1");
      var y = document.getElementById("list2");
      y.style.display="none";
      x.style.display="block";
      document.getElementById("click1").style.backgroundColor = "grey";
      document.getElementById("click2").style.backgroundColor = "rgb(247,245,241)";
}
function myfunc2() {
      var x = document.getElementById("list1");
      var y = document.getElementById("list2");
      x.style.display="none";
      y.style.display="block";
      document.getElementById("click1").style.backgroundColor = "rgb(247,245,241)";
      document.getElementById("click2").style.backgroundColor = "grey";
}
