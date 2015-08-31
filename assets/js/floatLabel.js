var floatLabel = function () {
  $('.form-group input,.form-group textarea,.form-group select').on('focus', function () {
    $(this).parent().children('label').addClass('floating');
  });
  $('.form-group input,.form-group textarea,.form-group select').on('blur', function () {
  	if ($(this).val() == '') {
      $(this).parent().children('label').removeClass('floating');
  	}
  });
};
  
$(document).ready(floatLabel);