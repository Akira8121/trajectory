// ローディング
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaPink = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',() => {
    // ローディング中（グレースクリーン）
    loadingAreaGrey.animate(
        {
            opacity: [1,0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },
    );
    // ローディング中（薄ピンクスクリーン）
    loadingAreaPink.animate(
        {
            translate: ['0 100vh','0 0','0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    // ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity:1,
                offset: .8  // 80%
            },
            {
                opacity:0,
                 offset: 1  // 100%
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const links = menu.querySelectorAll('.link');

// 開閉処理
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        menu.classList.add('close');
    }else{
        menu.classList.remove('close');
        menu.classList.add('active');
    }
} );


// メニュー内リンククリックで閉じる
links.forEach(link => {
    link.addEventListener('click', () => {
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
            menu.classList.add('close');
            hamburger.classList.remove('active');
        }
    });
});

// アニメーション終了後クラス除去
menu.addEventListener('animationend', (e) => {
    console.log(e);
    console.log(`Animation ended: ${e.animationName}`);
    if (e.animationName === 'slideOut') {
        menu.classList.remove('close');
    }
});

// スムーススクロールの設定
const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) =>{
    scorrllLink.addEventListener('click', (e) => {
        e.preventDefault();
        const href = scorrllLink.getAttribute('href');
        const targetSection = document.querySelector(href);
        const sectionTop = targetSection.getBoundingClientRect().top;
        const currentPos = window.scrollY;
        const gap =84;
        const target = sectionTop + currentPos - gap;
        window.scrollTo({
            top: target,
                behavior: 'smooth',
              });
    })
});

// チェックボタンを押さないと送信できない
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#button');

isAgreed.addEventListener('change', () => {
    if(isAgreed.checked){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }
});