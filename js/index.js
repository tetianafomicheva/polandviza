// JavaScript File
$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/tatyana_chocolate@meta.ua",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                comment: $('#comment').val()
                
            },
            dataType: "json"
        })
        .done(function(){
          $('form').html;  
        });
    });
});