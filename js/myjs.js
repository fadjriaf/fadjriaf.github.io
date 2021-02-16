$(document).ready(function() {
    // Side Nav
    $(".button-collapse").sideNav();

    // Modal
    $('.modal').modal();

    // Progress Bar with Animation
    // $(".determinate").animate({
    //     width: "70%"
    // }, 2500);

    Materialize.toast('Portofolio is under development!', 7000);

    $(".proj-credit").click(function() {
        $(".the-credit").show();
    });

    // Test if Javascript is Worked
    console.log("Javascript Worked Perfectly!");
});