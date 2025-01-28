window.onload=function() {
    document.getElementById("button").onclick=function() {
      var one = document.getElementById("one").value,
       output = document.getElementById("output");
       const ten = 3.14;
  
    output.innerHTML = one * one * ten;
    }
  }
