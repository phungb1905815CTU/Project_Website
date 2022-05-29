const btnPageTrangchu = document.querySelector('.pageTrangchu');
const btnPageThanhvien = document.querySelector('.pageThanhvien');
const btnPageYTuong = document.querySelector('.pageYTuong');
const btnPageNhapxuathang = document.querySelector('.pageNhapxuathang');
const btnPageThongke = document.querySelector('.pageThongke');
const btnPageLienhe = document.querySelector('.pageLienhe');

btnPageTrangchu.addEventListener('click', (event) => {
    window.location.href = "trangchu.html";
})

btnPageThanhvien.addEventListener('click',  event => {
    window.location.href = "thanhvien.html";
})

btnPageYTuong.addEventListener('click',  event => {
    window.location.href = "ytuong.html";
})

btnPageNhapxuathang.addEventListener('click',  event => {
    window.location.href = "nhapxuathang.html";
})

btnPageThongke.addEventListener('click',  event => {
    window.location.href = "thongke.html";
})

btnPageLienhe.addEventListener('click',  event => {
    window.location.href = "lienhe.html";
})