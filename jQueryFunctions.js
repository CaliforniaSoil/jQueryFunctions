$(document).ready(function(){
    /*Heres an example of the .hide()*/
    $('#hide').click(function(){
        $('#hideit').hide();
    });
    /*Heres an example of the .show()*/
    $('#show').click(function(){
        $('#hideit').show();
    });
    /*Heres an example of the .toggle()*/
    $('#toggle').click(function(){
        $('#toggleit').toggle();
    });
    /*Heres an example of the .slideDown()*/
    $('#slideDown').click(function(){
        $('#slideit').slideDown('slow');
    });
    /*Heres an example of the .slideUp()*/
    $('#slideUp').click(function(){
        $('#slideit').slideUp('slow');
    });
    /*Here is an example of the .slideToggle()*/
    $('#slideToggle').click(function(){
        $('#slidetoggleit').slideToggle('slow');
    });
    /*Here is an example of the .fadeIn()*/
    $('#fadeIn').click(function(){
        $('#fadeit').fadeIn('slow');
    });
    /*Here is an example of the .fadeOut()*/
    $('#fadeOut').click(function(){
        $('#fadeit').fadeOut('slow');
    });
    /*Here is an example of the .addClass()*/
    $('#addClass').click(function(){
        $('#addclassit').addClass('classtoadd');
    });
    /*Here is an example of the*/
    $('#removeClass').click(function(){
        $('#addclassit').removeClass('classtoadd');
    });
    /*Here is an example of the*/
    $('#before').click(function(){
        $('#beforeit').before('<p>This will appear before the text.</p>');
    });
    /*Here is an example of the*/
    $('#after').click(function(){
        $('#afterit').after('<p>This will appear after the text.</p>');
    });
    /*Here is an example of the*/
    $('#append').click(function(){
        $('#appendit').append('<strong>Here is some extra text</strong>');
    });
    /*Here is an example of the*/
    $('#prepend').click(function(){
        $('#prependit').prepend('<strong>Here is some extra text</strong>');
    });
    /*Here is an example of the*/
    $('#html').click(function(){
        $('#htmlit').html('<h1>Heres an h1 tag for you</h1>');
    });
    /*Here is an example of the*/
    $('#attr').click(function(){
        $('#attrit').attr();
    });
    /*Here is an example of the*/    
    $('#val').click(function(){
        $('#valit').val();
    });
    /*Here is an example of the*/
    $('#text').click(function(){
        $('#textit').text('heres some replacement text.');
    });
    /*Here is an example of the*/
    $('#data').click(function(){
        $('#datait').data()
    });
});