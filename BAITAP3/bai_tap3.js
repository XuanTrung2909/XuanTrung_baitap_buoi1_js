function quyDoi(event){
    event.preventDefault();
    
    const tiGiaUSD = 23500;

    var soTienUSD = document.getElementById("so__tien__usd").value;

    var thanhTien = tiGiaUSD * soTienUSD;

    document.getElementById("tien__vnd").innerHTML = thanhTien;
    document.getElementById("footer__quy__doi").className = "card-footer d-block";
}