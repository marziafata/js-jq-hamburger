// L'esercitazione di oggi prevede di aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile, a partire da html e css già pronti.

// body > header > div.header-right > a > i


// metodo 1: funziona! ^___^ Feliciona!
// click su menu hamburger e compare tendina
var hamburger = $(".fa-bars")

hamburger.click(function() {
    $(".hamburger-menu").show("fast");

})

// quando clicco sulla X scompare
$(".fa-times").click(function() {
    $(".hamburger-menu").hide("fast");

})


// // metodo 2: funziona! ^___^ Feliciona!
// // click su menu hamburger e compare tendina
// var hamburger = $(".fa-bars")
//
// hamburger.click(function() {
//     $(".hamburger-menu").addClass("active");
// })
// // quando clicco sulla X scompare
// $(".fa-times").click(function() {
//     $(".hamburger-menu").removeClass("active");
// })
