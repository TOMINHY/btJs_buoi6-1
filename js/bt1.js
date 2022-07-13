/**
 * Author: To Minh Y
 * Function: Quản lý tuyển sinh
 * Release: 13/7/2022
 */


function inSoNguyenTo() {
    var n = Number(document.getElementById("num").value);
    var soNguyenTo = 0;
    for(var i = 2 ; i <= n ;i++){
        if(kiemTra(i)){
            soNguyenTo += i + " ";
        }
    }
    document.getElementById("ketQua").innerHTML = soNguyenTo;
}
document.getElementById("btnTinh").onclick = inSoNguyenTo;

function kiemTra(x) {
    if(x <= 1)
        return 0;
    for(var j = 2 ; j <= Math.sqrt(x); j++){
            if(x % j == 0)
                return 0;
    }
    return 1;
    
}
