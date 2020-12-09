var backToTop = document.getElementsByClassName('back-to-top')[0];
var index = 1;
slide(index);

function plus(n) {
  slide(index += n);
}

function curr(n) {
  slide(index = n);
}

var mobileView=document.getElementsByClassName('mobile-view')[0];
function slide(n) {
  var i;
  var slides = document.getElementsByClassName("alumni");
  var dots = document.getElementsByClassName("alumni-control");
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}

var interval = setInterval(()=>{slide(index+1);}, 5000);

var btn = document.querySelector(".gallery-control");
var slides = document.querySelector(".gallery");
btn.addEventListener("click", ele => {
    Array.from(btn.children).forEach(item =>
      item.classList.remove("active")
    );
    Array.from(mobileView.children).forEach(item =>
      item.classList.remove("active")
    );
    if (window.innerWidth > 992){
        if (ele.target.classList.contains("first")) {
          slides.style.transform = "translateX(0%)";
          ele.target.classList.add("active");
        } else if (ele.target.classList.contains("second")) {
          slides.style.transform = "translateX(-33.3333%)";
          ele.target.classList.add("active");
        } else if (ele.target.classList.contains('third')){
          slides.style.transform = 'translatex(-66.6666%)';
          ele.target.classList.add('active');
        } else if (ele.target.classList.contains('fourth')){
          slides.style.transform = 'translatex(-100%)';
          ele.target.classList.add('active');
        }
    }else{
        if (ele.target.classList.contains("first")) {
          slides.style.transform = "translateX(0%)";
          ele.target.classList.add("active");
        } else if (ele.target.classList.contains("second")) {
          slides.style.transform = "translateX(-100%)";
          ele.target.classList.add("active");
        } else if (ele.target.classList.contains('third')){
          slides.style.transform = 'translatex(-200%)';
          ele.target.classList.add('active');
        } else if (ele.target.classList.contains('fourth')){
          slides.style.transform = 'translatex(-300%)';
          ele.target.classList.add('active');
        }else if (ele.target.classList.contains('last-second')){
          slides.style.transform = 'translatex(-400%)';
          ele.target.classList.add('active');
        }else if (ele.target.classList.contains('last')){
          slides.style.transform = 'translatex(-500%)';
          ele.target.classList.add('active');
        }
    }
});

window.onresize=()=>{
    Array.from(btn.children).forEach(item =>
      item.classList.remove("active")
    );
    Array.from(mobileView.children).forEach(item =>
      item.classList.remove("active")
    );
    slides.style.transform="translate(-0%)";
    if (window.innerWidth > 992){
        mobileView.style.display="none";
    }
    else{
        mobileView.style.display="inline-block";
    }
};

window.onload=()=>{
    if (window.innerWidth > 992){
        mobileView.style.display="none";
    }
    else{
        mobileView.style.display="inline-block";
    }
}

window.onscroll=()=>{
    if (scrollY > 300){
        backToTop.style.visibility = "visible";
        backToTop.style.opacity = 1;
    }else{
        backToTop.style.opacity = 0;
        setTimeout(()=>{backToTop.style.visibility = "hidden"}, 500);
    }
}