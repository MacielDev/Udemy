$(document).ready(function() {
    $("#emailHelp").hide();
    mostrarEmailHelp();
    esconderEmailHelper();
})

function mostrarEmailHelp() {
    $("#email").mouseenter(function() {
        $("#emailHelp").toggle(300).addClass("emailHelp")
    })
}

function esconderEmailHelper() {
    $("#email").mouseout(function() {
        $("#emailHelp").toggle(300);
    })
}