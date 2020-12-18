function tongHaiKySo(event){
    event.preventDefault();
    
    var soNhap = document.getElementById("so__nguyen").value;

    var soHangChuc = Math.floor(soNhap / 10);
    var soHangDV = soNhap % 10;

    var tong = soHangChuc + soHangDV;

    // console.log(tong);

    document.getElementById("tong__2__ky__so").innerHTML = tong;
    document.getElementById("footer__ky__so").className = "card-footer d-block";
}