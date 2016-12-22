// JavaScript File
$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/tatyana_chocolate@meta.ua",
            method: "POST",
            data: {
               comment: $('#comment').val()
            
            },
            dataType: "json"
        })
        .done(function(){
          $('form').html('<h1>Ваш коментар надіслано</h1>'); 
        });
    });
});