function Conteudo() {
    var numimp = document.getElementById("numimp");
    var numpar = document.querySelectorAll(".numpar");
    var numpri = document.querySelector("#numpri");
    
    numimp.innerHTML = "3";
    
    numpar[0].innerHTML = "4";
    numpri[1].innerHTML = "7";
    

    var conteudonumpri = "";
    for (var i = 1; i <= 6; i++) {
      conteudonumpri += "<li>" + i + "</li>";
    }
    numpri.innerHTML = conteudonumpri;
  }
  