/* Người tạo: Đoàn Hữu Thắng
Tạo ngày: 6/9/2021
Version: 1.0
*/

/**
 * Trả về: Tổng tiền dựa vào soKM người dùng nhập + thời gian chờ
 */
 function getMyEle(ele){
  return document.getElementById(ele);
}

function LayLoaiXe(){
  var ketqua;
  var uberX = getMyEle('uberX').checked;
  var uberSUV = getMyEle('uberSUV').checked;
  var uberBlack = getMyEle('uberBlack').checked;
  if(uberX){
      ketqua = 'uberX'
  } else if(uberSUV){
      ketqua = 'uberSUV'
  } else if (uberBlack){
      ketqua = 'uberBlack'
  }
  return ketqua;
}


function TinhTien(){
  var laySoKM = getMyEle('soKM').value;
  laySoKM = parseFloat(laySoKM);
  var layThoiGianCho = getMyEle('thoiGianCho').value;
  layThoiGianCho = parseFloat(layThoiGianCho);
  var divThanhTien = getMyEle('divThanhTien');
  divThanhTien.style.display = "block";
  var spanTien = getMyEle('xuatTien');

  var loaiXe = LayLoaiXe();

  var thanhTien = 0;
  var km1UberX = 8000;
  var km21UberX = 12000;
  var kmCaoUberX = 10000;
  var kmHUberX =  km1UberX + 20 * km21UberX;
  var giaThoiGianChoUberX = 2000;

  var km1UberSUV = 9000;
  var km21UberSUV = 14000;
  var kmCaoUberSUV = 12000;
  var kmHUberSUV =  km1UberSUV + 20 * km21UberSUV;
  var giaThoiGianChoUberSUV = 3000;

  var km1UberBlack = 10000;
  var km21UberBlack = 16000;
  var kmCaoUberBlack = 14000;
  var kmHUberBlack =  km1UberBlack + 20 * km21UberBlack;
  var giaThoiGianChoUberBlack = 4000;



  switch (loaiXe)
  {
      case 'uberX': 
          if(laySoKM <= 1){
              thanhTien = laySoKM * km1UberX + layThoiGianCho * giaThoiGianChoUberX;
          } else if(laySoKM > 1 && laySoKM <= 20){
              thanhTien = km1UberX + (laySoKM - 1) * km21UberX + layThoiGianCho * giaThoiGianChoUberX;
          } else if (laySoKM > 20){
              thanhTien = kmHUberX + (laySoKM - 21) * kmCaoUberX + layThoiGianCho * giaThoiGianChoUberX;
          }
      break;
      case 'uberSUV': 
          if(laySoKM <= 1){
              thanhTien = laySoKM * km1UberSUV + layThoiGianCho * giaThoiGianChoUberSUV;
          } else if(laySoKM > 1 && laySoKM <= 20){
              thanhTien = km1UberSUV + (laySoKM - 1) * km21UberSUV + layThoiGianCho * giaThoiGianChoUberSUV;
          } else if (laySoKM > 20){
              thanhTien = kmHUberSUV + (laySoKM - 21) * kmCaoUberSUV + layThoiGianCho * giaThoiGianChoUberSUV;
          }
      break;
      case 'uberBlack': 
          if(laySoKM <= 1){
              thanhTien = laySoKM * km1UberBlack + layThoiGianCho * giaThoiGianChoUberBlack;
          } else if(laySoKM > 1 && laySoKM <= 20){
              thanhTien = km1UberBlack + (laySoKM - 1) * km21UberBlack + layThoiGianCho * giaThoiGianChoUberBlack;
          } else if (laySoKM > 20){
              thanhTien = kmHUberBlack + (laySoKM - 21) * kmCaoUberBlack + layThoiGianCho * giaThoiGianChoUberBlack;
          }
      break;
  }
 spanTien.innerHTML = thanhTien;
}