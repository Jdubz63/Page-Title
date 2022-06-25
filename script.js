// random shapes with a button in one of the shapes



$(".button1").hover(function() {
    $(".button1").hide();
    $(".pagetwo").show();
    $("body").css('background-image', 'none');
});

$(".driverbutton").click(function() {
    $(".pagetwo").hide();
});
$(".navbutton").click(function() {
    $(".pagetwo").hide();
    $(".navtest").show();
});
$(".driverbutton").click(function() {
    $(".pagetwo").hide();
    $(".drivertest").show();
});

$(".navThree").click(function() {
    $(".navtest").hide();
    $(".winPage").show();
});

$(".driverOne").click(function() {
    $(".drivertest").hide();
    $(".winPage").show();
});