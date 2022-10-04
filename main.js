/**
 * Input: cho ten, tong thu nhap , so nguoi phu thuoc
 * Process:
 * 1.lay input
 * 2.Thu nhap chiu thue = totalIncome - 4tr - numberOfDependents * 1.6tr
 *3. Thu nhap chiu thue roi truong hop nao => suat thue
 *4.Xuat ra tien thue thu nhap ca nhan can phai tra
 *
 * Output: Tinh va xuat the thu nhap
 */
function ex1() {
  var names = "Phat Vo";
  var totalAnnualIncome = 200000000;
  var numberOfDependents = 3;
  var personalIncomeTax = 0;

  var totalIncome = totalAnnualIncome - 4000000 - numberOfDependents * 1600000;

  if (totalIncome <= 60000000) {
    personalIncomeTax = (totalIncome * 5) / 100;
  } else if (totalIncome <= 120000000) {
    personalIncomeTax = (totalIncome * 10) / 100;
  } else if (totalIncome <= 210000000) {
    personalIncomeTax = (totalIncome * 15) / 100;
  } else if (totalAnnualIncome <= 384000000) {
    personalIncomeTax = (totalIncome * 20) / 100;
  } else if (totalIncome <= 624000000) {
    personalIncomeTax = (totalIncome * 25) / 100;
  } else if (totalIncome <= 960000000) {
    personalIncomeTax = (totalIncome * 30) / 100;
  } else {
    personalIncomeTax = (totalIncome * 35) / 100;
  }
  console.log("Ho ten: ", names);
  console.log("Tien thue thu nhap ca nhan: ", personalIncomeTax);
}

/**
 * Input: Ma Khach hang , loai khach hang, so ket noi, so kenh cao cap
 * Proces:
 * 1.Lay input
 * 2.nha dan = a va doanh nghiep  = b
 * 2.1 neu la nha dan (o nhap ket noi an)
 * 2.2  3 Muc phi phi xu ly  =p1; phi dich vu co ban =p2, thue kenh cao cap =p3
 * 2.3 neu la doanh nghiep (o nhap ket noi hien len )
 *2.4 p1 = ; p2=75 cho 10 connect  && moi connect them = 5$/1 ; p3=
 *3.Tinh hoa don
 *
 *
 * Output: Tinh hoa don
 */

function ex2() {
  var mkh = "kh12";
  var customerType = "b";
  var p1, p2, p3;
  var connect = 11; // so ket noi
  var premiumChannel = 3; // kenh cao cap

  if (customerType == "a") {
    p1 = 4.5;
    p2 = 20.5;
    p3 = 7.5 * premiumChannel;
  } else {
    p1 = 15;
    if (connect <= 10) {
      p2 = 75;
    } else {
      p2 = 75 + (connect - 10) * 5;
    }
    p3 = 50 * premiumChannel;
  }
  var bill = p1 + p2 + p3;
  console.log("Ma khach hang: " + mkh + ", " + "Tien cap:" + bill + "$");
}
