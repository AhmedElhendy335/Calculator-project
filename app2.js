window.onload=function() { // the page has loaded - anonymous function
    document.getElementById("button").onclick=function() { // anonymous function
      var one = document.getElementById("one").value, // using commas to separate vars
          two = document.getElementById("two").value,  
       output = document.getElementById("output");
       
  
      output.innerHTML = one * two;
    }
  }
