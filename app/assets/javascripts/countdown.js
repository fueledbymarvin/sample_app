function updateCountdown() {
    var nChar = $("textarea").val().length;
	if(nChar == 139)
		$('.countdown').text(140 - nChar + " character left.");
	else if(nChar > 140)
		$('.countdown').text("Too many characters.");
	else
		$('.countdown').text(140 - nChar + " characters left.");
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('textarea').change(updateCountdown);
    $('textarea').keyup(updateCountdown);
});