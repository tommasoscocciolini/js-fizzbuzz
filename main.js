for (var i = 1; i <= 100; i++) {
  if (parseInt(i % 15)==0) {
    document.getElementById("numbers").innerHTML +="<li style=\"color:purple;\">" + "FizzBuzz" + "</li>";
  } else if (parseInt(i % 3)==0){
    document.getElementById("numbers").innerHTML +="<li style=\"color:blue;\">" + "Fizz" + "</li>";
  } else if (parseInt(i % 5)==0){
    document.getElementById("numbers").innerHTML +="<li style=\"color:red;\">" + "Buzz" + "</li>";
  } else {
    document.getElementById("numbers").innerHTML +="<li>" + i + "</li>";
  }
}
