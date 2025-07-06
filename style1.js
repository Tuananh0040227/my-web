    const images = [
  { h: 'https://glamics.temptics.com/assets/img/banner-slide-2.jpg', v: 'https://glamics.temptics.com/assets/img/banner-img-slide-1.jpg' },
  { h: 'https://glamics.temptics.com/assets/img/banner-slide-3.jpg', v: 'https://glamics.temptics.com/assets/img/banner-img-slide-2.jpg' },
  { h: 'https://glamics.temptics.com/assets/img/banner-slide-1.jpg', v: 'https://glamics.temptics.com/assets/img/banner-img-slide-3.jpg' }
  
];

let currentIndex = 0;

function renderSlides() {
  const largeIndex = currentIndex % images.length;
  const mediumIndex = (currentIndex + 1) % images.length;
  const smallIndex = (currentIndex + 2) % images.length;

  document.getElementById('largeSlide').style.backgroundImage = `url('${images[largeIndex].h}')`;
  document.getElementById('mediumSlide').style.backgroundImage = `url('${images[mediumIndex].v}')`;
  document.getElementById('smallSlide').style.backgroundImage = `url('${images[smallIndex].v}')`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  renderSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderSlides();
}
renderSlides();
setInterval(nextSlide, 3000);




function bigImg(x) {
  x.style.width = "160px";
  x.style.height = "170px";
}
function normalImg(x) {
  x.style.width = "140px";
  x.style.height = "150px";
}



function filterProducts(type) {
  const products = document.querySelectorAll('.product');

  products.forEach(p => {
    p.classList.remove('show'); 
    if (type === 'all' || p.classList.contains(type)) {
      p.classList.add('show');
    }
  });
}
window.onload = function() {
  filterProducts('all');
};





  const danhSach = document.querySelector(".danh-sach-san-pham");
  const khoangCach = 20;
  const chieuRongSanPham = 260 + khoangCach;

  function chuyen1Div() {
    danhSach.style.transition = 'transform 0.5s linear';
    danhSach.style.transform = `translateX(-${chieuRongSanPham}px)`;

    setTimeout(() => {
      danhSach.style.transition = 'none';
      danhSach.appendChild(danhSach.firstElementChild); 
      danhSach.style.transform = 'translateX(0)'; 
    }, 500); 
  }

  setInterval(chuyen1Div, 2000); 




