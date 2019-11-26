$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/xbjljllb", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
          $('#success > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
              .append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function(){
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
});