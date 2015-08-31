
$(document).ready(function () {
    var contactForm = $('#contact-form');
    var emailInput = $('#email');
    var submitBtn = $('#submit');
    var emailOk = false;

    emailInput.on('blur', function () {
        var emailValue = $.trim($(this).val());
        if (emailValue == '' || !IsEmail(emailValue)) {
            $(this).parent().removeClass('has-success').addClass('has-error');
            emailOk = false;
        } else {
            $(this).parent().removeClass('has-error').addClass('has-success');
            emailOk = true;
        }
        ;
    });

    submitBtn.on('click', function () {
        var emailValue = $.trim($(emailInput).val());
        if (emailValue == '' || !IsEmail(emailValue)) {
            $(emailInput).parent().removeClass('has-success').addClass('has-error');
            emailOk = false;
        } else {
            $(emailInput).parent().removeClass('has-error').addClass('has-success');
            emailOk = true;
        }
        ;
    });

    contactForm.submit(function (event) {
        if (emailOk) {
            return true;
        }

        return false;
    });

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
});