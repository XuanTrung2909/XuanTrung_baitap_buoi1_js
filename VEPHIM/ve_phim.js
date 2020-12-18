function tinhTienPhim(event){
    event.preventDefault();
    var tenPhim = document.getElementById("ten__phim").value;
    var giaVeLon = document.getElementById("gia__ve__nguoi__lon").value;
    var giaVeEm = document.getElementById("gia__ve__tre__em").value;
    var soVeLon = document.getElementById("so__ve__nguoi__lon").value;
    var soVeEm = document.getElementById("so__ve__tre__em").value;
    var phanTramTuThien = document.getElementById("so__phan__tram__tu__thien").value;


    var tongThu = (giaVeLon * soVeLon) + (giaVeEm * soVeEm);
    var tuThien = (tongThu * phanTramTuThien) / 100;
    var conLai = tongThu - tuThien;


    document.getElementById("footer__ve__phim").className = "card-footer d-block";
    document.getElementById("span__ten__phim").innerHTML = tenPhim;
    document.getElementById("tong__tien__thu__duoc").innerHTML = tongThu;
    document.getElementById("tien__tu__thien").innerHTML = tuThien;
    document.getElementById("tien__con__lai").innerHTML = conLai;
}