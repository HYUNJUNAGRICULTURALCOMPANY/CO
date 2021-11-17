
$(document).ready(function () {

    //타이틀 이미지 베가스 적용    
    $(".t_photo").vegas({
        slides: [
            { src: "../img/bg/title_bg.jpg" },
        ],
        animation: ['kenburnsUp']
    });
    //스크롤링 부드럽게 적용
    const top = 0;
    const speed = 500;

    $('html, body').animate({
        scrollTop: top
    }, speed);
})


//스크롤 탑 버튼 애니메이션
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.go_top').fadeIn(200);
    } else {
        $('.go_top').fadeOut(200);
    }
});

$('.go_top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 300);
})
