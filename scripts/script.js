//=======================ASIDE MENU - MOBILE VERSION=======================//
let close = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".aside-menu-mobile");
let overlay = document.querySelector(".overlay");
let menuItems = document.querySelector(".aside-menu");
let menuOpen = false;

close.addEventListener("click", (e) => {
    if(!menuOpen) {
        menuOpen = true;
        e.target.classList.add("close-menu");
        
        overlay.classList.add("overlayBlock")
        overlay.classList.remove("none")
        mobileMenu.classList.add("active");
        mobileMenu.classList.remove("none");

        
        menuItems.style.display = "block";
    }


    else {
        menuOpen = false;
        e.target.classList.remove("close-menu");

        overlay.classList.remove("overlayBlock");
        mobileMenu.classList.remove("active");
        mobileMenu.classList.add("none");

        menuItems.style.display = "none";

    }
});
//====================ASIDE MENU - MOBILE VERSION=======================//

//=======================MOBILE CAROUSEL==========================//
let productImgs = document.querySelectorAll(".product-img");
let arrow = document.querySelectorAll(".arrow");
let count = 0;

for(let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        if(e.target.classList.contains("prev")) {
           count--;
           if(count < 0) {
               count = 3;
           }

           try {
            productImgs[count+1].classList.remove("current-image");

           }

           catch(error) {
               console.log();
           }

           productImgs[0].classList.remove("current-image");
           productImgs[count].classList.add("current-image");

        }

        else if(e.target.classList.contains("next")) {
            count++;
            if(count > 4) {
                count = 1;
            }

            else if(count > 3) {
                productImgs[3].classList.remove("current-image");
                productImgs[0].classList.add("current-image");
            }

            try {
                productImgs[count].classList.add("current-image");                
                productImgs[count-1].classList.remove("current-image");
            }
            
            catch(error) {
                console.log();
            }
        }
    });
}

//=================MOBILE CAROUSEL==================================//

//================================ADD ITEMS TO CART=======================//
let add = document.querySelectorAll(".to-add");
let span = document.querySelector(".quantity");
let price = document.querySelector(".variable");
let cart = document.querySelector(".cart");
let itemsCart = document.querySelector(".items-quantity");
let empty = document.querySelector(".empty-cart");
let productFull = document.querySelector(".cart-full");
let numItems = document.querySelector(".num-of-items");
let total = document.querySelector(".total-price");
let checkout = document.querySelector(".checkout");
let items = 0;
let clicks = 0;
let _value = 125;
let quantity = 1;


for(let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", (e) => {
        e.preventDefault();

        if(e.target.classList.contains("minus")) {
            if(quantity > 1) {
                quantity--;
                span.innerText = quantity;
                price.innerText = quantity * _value;
            }
            
            document.querySelector(".btn").addEventListener("click", (e) => {
                console.log("adicione-me")
            })
        }

        else if(e.target.classList.contains("plus")) {
            quantity++;
            span.innerText = quantity;
            price.innerText = quantity * _value;
            
        }

        else if(e.target.classList.contains("cart-icon")) {
            clicks++;

            cart.classList.add("openCart");

            if(clicks == 1) {
                cart.classList.add("openCart");
                cart.classList.remove("closeCart");
            }

            else if(clicks == 2) {
                cart.classList.add("closeCart");
                cart.classList.remove("openCart"); 
                clicks = 0;
            }
        }

        else if(e.target.classList.contains("btn")) {
            items++;
            itemsCart.style.visibility = "visible";
            itemsCart.innerText = items;
            
            if(items) {
                productFull.innerHTML += `<div class="main-box">
                <div>
                  <img class="cart-product" src="./_images/image-product-1-thumbnail.jpg" alt="product in cart">
                  <div class="legend">
                    <p>Autumn Limited</p>
                    <p>
                      <span>$125 x</span>
                      <span>
                        <span class="num-of-items">${quantity}</span>
                        <span class="price-variable">
                          $<span class="total-price">${quantity * _value}</span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <img src="./images/icon-delete.svg" alt="" class="exclude to-add">
              </div>`;

              quantity = 1;
              _value = 125;

              span.innerText = quantity;
              price.innerText = _value;

              checkout.style.display = "block";
              empty.style.display = "none";
            }

        }

        for(var k = 0; k < document.querySelectorAll(".exclude").length; k++) {
            document.querySelectorAll(".exclude")[k].addEventListener("click", (e) => {
                e.target.parentElement.remove();
                itemsCart.innerText = document.querySelectorAll(".main-box").length;
                
                
                if(document.querySelectorAll(".main-box").length == 0) {
                    itemsCart.style.visibility = "hidden";
                    checkout.style.display = "none";
                    empty.style.display = "flex";
                    items = 0;
                }
                
            });
        }
    });
}
//================================ADD ITEMS TO CART=============================//

//============================CAROUSEL DESKTOP AND GALLERY======================//
let gallery = document.querySelectorAll(".tb");
let thumbs = document.querySelectorAll(".thumb");
let imgsGallery = document.querySelector(".main-imgs > .product-img");
let main = document.querySelector(".product-img");
let carousel = document.querySelector(".carousel-desktop");
let arrows_carousel = document.querySelectorAll(".arr");
let counter = 0;
let clks = 1;
let imgs = document.querySelectorAll(".p-img");

gallery.forEach(thumb => {
    thumb.addEventListener("click", e => {
        gallery.forEach(thumb => {
            thumb.classList.remove("selected");

            e.target.classList.add("selected");
            imgsGallery.src = e.target.src.replace("-thumbnail", "");
        });
    });
});

thumbs.forEach(thumb => {
    thumb.addEventListener("click", (e) => {
        thumbs.forEach(thumb => {
            thumb.classList.remove("selected");

            e.target.classList.add("selected");
            main.src = e.target.src.replace("-thumbnail", "");
        });
    });
});


main.addEventListener("click", (e) => {
    overlay.classList.remove("none");
    carousel.classList.remove("none");
    overlay.classList.add("block");
    carousel.classList.add("block");

});

overlay.addEventListener("click", (e) => {
    overlay.classList.add("none");
    carousel.classList.add("none");
    overlay.classList.remove("block");
    carousel.classList.remove("block");
});

for(var i = 0; i < arrows_carousel.length; i++) {
    arrows_carousel[i].addEventListener("click", (e) => {
        if(e.target.classList.contains("left")) {
            counter--;
            if(counter < 0) {
                counter = 3;
            }
 
            try {
             imgs[counter+1].classList.remove("current-image");
             gallery[counter+1].classList.remove("selected");
 
            }
 
            catch(error) {
                console.log();
            }
 
            imgs[0].classList.remove("current-image");
            imgs[counter].classList.add("current-image");
            gallery[0].classList.remove("selected");
            gallery[counter].classList.add("selected");

         }
 
         else if(e.target.classList.contains("right")) {
             counter++;
             if(counter > 4) {
                 counter = 1;
             }
 
             else if(counter > 3) {
                 imgs[3].classList.remove("current-image");
                 imgs[0].classList.add("current-image");
                 gallery[3].classList.remove("selected");
                 gallery[0].classList.add("selected");
             }
 
             try {
                 imgs[counter].classList.add("current-image");                
                 imgs[counter-1].classList.remove("current-image");
                 gallery[counter].classList.add("selected");
                 gallery[counter-1].classList.remove("selected");
             }
             
             catch(error) {
                 console.log();
             }
         }
    });
    
}



//============================CAROUSEL DESKTOP AND GALLERY======================//
