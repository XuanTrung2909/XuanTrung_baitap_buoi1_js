function dienTich(event){
    event.preventDefault();

    var chieuDai = document.getElementById("chieu__dai").value;
    var chieuRong = document.getElementById("chieu__rong").value;

    var dienTich = chieuDai * chieuRong;


    document.getElementById("hinh__chu__nhat").innerHTML = "Diện Tích: " + dienTich;
    document.getElementById("footer__hinh__chu__nhat").className = "card-footer d-block"; 
}
function chuVi(event){
    event.preventDefault();
    var chieuDai = document.getElementById("chieu__dai").value;
    var chieuRong = document.getElementById("chieu__rong").value;

    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);

    var dienTich = (chieuDai + chieuRong) * 2;


    document.getElementById("hinh__chu__nhat").innerHTML = "Chu Vi: " + dienTich;
    document.getElementById("footer__hinh__chu__nhat").className = "card-footer d-block"; 
    
}