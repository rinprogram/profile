
$(function() {

	var $omote = $("#memo1");
	var $ura = $("#memo2");

	$("#memo2").hide();

  $("#button-show").click(function(){
    if($omote.hasClass('open')) {
			$omote.removeClass('open');
			$ura.addClass('open')
			$omote.hide();
			$ura.show();
			$omote.addClass('ani1_1').removeClass('ani2_1');
			$ura.addClass('ani1_2').removeClass('ani2_2');


		} else if($ura.hasClass('open')) {
      $ura.removeClass('open');
			$omote.addClass('open')

			$ura.hide();
			$omote.show();
			$omote.addClass('ani2_1').removeClass('ani1_1');
		  $ura.addClass('ani2_2').removeClass('ani1_2');

		}

	})



});



