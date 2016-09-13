function goToSection (section){
    $('html, body').animate({
        scrollTop: $('#'+section).offset().top
    }, 500);
}

function hideAllSections(){
    $('#section1').hide();
    $('#section2').hide();
    $('#section3').hide();
    $('#section4').hide();
    $('#section5').hide();
    $('#section6').hide();
}

function showResearch (section){
    hideAllSections();
    $('#section'+section).show();
}
