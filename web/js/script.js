$(document).ready(function () {
    alert("jquery");

});

$("#prueba").click(function () {
    $("#prueba").css("color", "blue");
    $("#prueba").css("background-color", "red");
});

$("#c1").click(function () {
    $("#cont1").hide(1500);
});

$("#c2").click(function () {
    $("#cont1").show("slow");
});

$("#c3").click(function () {
    $("#cont1").css({'border': '4px solid #523e02', 'color': 'black', 'font-weight': 'bold', 'background-color': '#b6effb'});
});

$("#c4").click(function () {

    $("#cont1").animate({opacity: "0.1", left: "+=400", fontSize: '1em', width: "200"}, 1200)
            .animate({opacity: "0.4", top: "+=160", height: "20", width: "80", fontSize: '0.5em'}, "slow")
            .animate({opacity: "1", left: "0", width: "260"}, "slow")
            .animate({top: "0", width: "260", fontSize: '1.2em'}, "fast")
            .slideUp()
            .slideDown(1800);
    return false;

});

$("#c5").click(function () { 
    $("#cont1").animate({fontSize: '2.4em', width: 400, padding: 24}, 2500);
});


$("#c6").click(function() {
$("#cont1").fadeToggle(3000);
});

$("#c7").click(function() {
$("#cont1").fadeIn(3000);
});

$("#c8").click(function() {
$("#noticias").load("../facebook/problemas-simbolos.php");
});

$("#c9").click(function() {
$("#noticias").hide(1500);
});


$("#cont2").click(function () {
    $(this).hide().delay(1500).show(1500);
});


function mensaje() {
    alert("Bienvenido a jQuery");

}