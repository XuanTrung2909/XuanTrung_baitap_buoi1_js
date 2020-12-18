function tinhLuong(event){
    
    event.preventDefault();
    const luongMotNgay = 100000;
    var soNgayLam = document.getElementById("so__ngay").value;
    
    var luongThucLanh = luongMotNgay * soNgayLam;

    document.getElementById("tien__thuc__lanh").innerHTML = luongThucLanh;
    document.getElementById("footer__tien__luong").className = "card-footer d-block";
}