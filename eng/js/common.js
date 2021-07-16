$(function () {
    // 서브메뉴 등장
    $('.menu').click(function (e) {
        e.preventDefault();
    });
    $(".sub").hide();
    $(".menu").click(function () {
        $(".sub").slideToggle();
    });
});