function tinhGiaTriTB(event){
    event.preventDefault();
    var soThuc1 = document.getElementById("so__thuc__1").value;
    var soThuc2 = document.getElementById("so__thuc__2").value;
    var soThuc3 = document.getElementById("so__thuc__3").value;
    var soThuc4 = document.getElementById("so__thuc__4").value;
    var soThuc5 = document.getElementById("so__thuc__5").value;

    soThuc1 = parseFloat(soThuc1);
    soThuc2 = parseFloat(soThuc2);
    soThuc3 = parseFloat(soThuc3);
    soThuc4 = parseFloat(soThuc4);
    soThuc5 = parseFloat(soThuc5);

    var giaTriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    document.getElementById("gia__tri__tb").innerHTML = giaTriTB;
    document.getElementById("footer__gia__tri__TB").className = "card-footer d-block";
}