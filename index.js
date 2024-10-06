let text = document.getElementById('text');
let left = document.getElementById('left');
let right = document.getElementById('right');
let kite1 = document.getElementById('kite1');
let kite2 = document.getElementById('kite2');

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    text.style.marginTop=value*2.5+'px';
    left.style.left=value*1.5+'px'
    right.style.left=value*-1.5+'px'
    kite1.style.top=value*-1.5+'px'
    kite2.style.top=value*-1.5+'px'
    kite1.style.left=value*1.5+'px'
    kite2.style.left=value*-1.5+'px'
})
