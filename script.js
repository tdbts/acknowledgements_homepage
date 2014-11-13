$(document).ready(function() {

	function getVal(selector) {

		return $(selector).val();
	}

	function clearField(selectors) {

		selectors.forEach(function(fieldID) {
			
			$(fieldID).val("");
		});
	}

	function emailModalAJAX() {

		$('#send_email_btn').on('click', function(event) {

			var firstName = getVal('#first_name');
			var lastName = getVal('#last_name');
			var email = getVal('#email');
			var comments = getVal('#comments');
			var url = '/shared/send_form_email.php';

			var request = $.ajax({

				type: "POST",
				url: url,
				data: {
					first_name: firstName,
					last_name: lastName,
					email: email,
					comments: comments
				}
			});

			request.done(function() {
				
				clearField(['#first_name', '#last_name', '#email', '#comments']);
				$('#send_email_btn').popover('hide');
				$('#emailModal').modal('hide');
			});

			request.fail(function() {
				
				alert('Sorry, AJAX was unable to process that request!');
			});

			event.preventDefault();
		});
	}

	emailModalAJAX();

	$('#send_email_btn').popover({content: 'Thanks for reaching out!'}, 'click');

	$('.bar-icon').tooltip();

});