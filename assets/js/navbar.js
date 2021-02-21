$(document).ready(function() {
    $('.hamburguer').on("click", function() {
        $(this).toggleClass('active');
        $(".menu").toggleClass('active');
    });
});