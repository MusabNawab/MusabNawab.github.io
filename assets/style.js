const btn = document.getElementById("toggle-btn");
const list = document.getElementById("lists");
const nh = document.getElementById("nav-height");
const x = window.matchMedia("(max-width: 1023px)")

function changeImg(x) {
    if (x.matches) { 
      document.getElementById("img1").src="img/img1.jpg";
      document.getElementById("img2").src="img/img2.jpg";
      document.getElementById("img3").src="img/img3.jpg";
    } else {
        document.getElementById("img1").src="img/big_img1.jpg";
        document.getElementById("img2").src="img/big_img2.jpg";
        document.getElementById("img3").src="img/big_img3.jpg";
    }
  }
  
  changeImg(x);
  x.addListener(changeImg);

btn.addEventListener("click", ()=> {
    const visibility = list.getAttribute("data-value");
    
    if (visibility === "false"){
        list.style.transform=('translateX(0%)');
        list.setAttribute("data-value",true);
        
    }
    else{
        list.style.transform=('translateX(-120%)');
        list.setAttribute("data-value",false);
        
    }
})