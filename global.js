function myFunction() {
   //  var x = document.getElementById("header").getElementsByTagName("li")[0].getElementsByTagName("a")[0].innerHTML;
    var x = document.getElementById("header").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    document.getElementById("header").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[1].innerHTML = x[x.length-1].innerHTML;
    document.getElementById("header").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[x.length-1].innerHTML = x[0].innerHTML;
    // alert(y);
}