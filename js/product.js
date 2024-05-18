
window.onload = function(){ 
    
///////////////// 하우스 도산
    let l=0;
    let dosan = `<div class="product_pan ${l==0?'product_pan_avtive':''}">
                    <h2>하우스 도산 & 성수</h2>
                    <ul class="product_pan_ul">
                        <li class="product_pan_tit">
                            <span>MENU</span>
                            <span>PRICE</span>
                        </li>
                    </ul>
                </div>`
    document.getElementsByClassName('product_box')[0].innerHTML = dosan;  

    

    for(let i=0; i<ITEM_LIST[0].length; i++ ) {
    //////////////////// 하우스 도산
    
            let dosan_menu = `<li class="product_pan_li">
                            <span>${ITEM_LIST[0][i].menu}</span>
                            <span>${ITEM_LIST[0][i].price}</span>
                        </li>`;
            document.getElementsByClassName('product_pan_ul')[0].innerHTML += dosan_menu;   
            
            let dosan_img =`<div class="item_img ${i==0?'item_opacity':''}">
                                    <img src="./img/product/dosan/${ITEM_LIST[0][i].src}" alt="">
                            </div>`
            
            document.getElementsByClassName('item_img_sec')[0].innerHTML += dosan_img;     
            
        }

////////////////////신사

    let sinsa = `<div class="product_pan">
                    <h2>신 사</h2>
                    <ul class="product_pan_ul">
                        <li class="product_pan_tit">
                            <span>MENU</span>
                            <span>PRICE</span>
                        </li>
                    </ul>
                </div>`
    document.getElementsByClassName('product_box')[0].innerHTML += sinsa; 


    for(let i=0; i<ITEM_LIST[1].length; i++ ) { 
/////////////////// 신사

        let sinsa_menu = `<li class="product_pan_li">
                                <span>${ITEM_LIST[1][i].menu}</span>
                                <span>${ITEM_LIST[1][i].price}</span>
                            </li>`;
        document.getElementsByClassName('product_pan_ul')[1].innerHTML += sinsa_menu;   
        
        let sinsa_img =`<div class="item_img ${i==0?'item_opacity':''}">
                            <img src="./img/product/sinsa/${ITEM_LIST[1][i].src}" alt="">
                        </div>`
        
        document.getElementsByClassName('item_img_sec')[1].innerHTML += sinsa_img;  
        
    }

//********************** 메뉴판 글씨 선택, 메뉴 사진 등장

    let product_pan_li = document.getElementsByClassName('product_pan_li');
    let item_img = document.getElementsByClassName('item_img');

    for(let i=0; i < product_pan_li.length; i++) {
        product_pan_li[i].addEventListener('click', function() {
        for(let j=0; j < product_pan_li.length; j++) {
            product_pan_li[j].classList.remove('product_pan_li_chk')
            item_img[j].classList.remove('item_opacity')

            }
            product_pan_li[i].classList.add('product_pan_li_chk')
            item_img[i].classList.add('item_opacity')
        })
    }

// *******************메뉴 탭 누르면 전환

let menu_txt_li = document.getElementsByClassName('menu_txt_li');
let product_pan = document.getElementsByClassName('product_pan');
let item_img_sec = document.getElementsByClassName('item_img_sec');

        for(let i=0; i < menu_txt_li.length; i++) {
            menu_txt_li[i].addEventListener('click', function() {
            for(let j=0; j < menu_txt_li.length; j++) {
                product_pan[j].classList.remove('product_pan_avtive')
                item_img_sec[j].classList.remove('item_img_sec_act')
                item_img[0].classList.remove('item_opacity')
                product_pan_li[0].classList.remove('product_pan_li_chk')
                
                }
                product_pan[i].classList.add('product_pan_avtive')
                item_img_sec[i].classList.add('item_img_sec_act')
                item_img[0].classList.add('item_opacity')
               
            })
        }

        $(".menu_txt_li>a").click(function(){
            $(".menu_txt_li>a").css("color", "");
            $(this).css("color", "black");
        });
}
