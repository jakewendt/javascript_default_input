$(function() {
	$('input.default').each( function() {
		this.value = this.id;
		this.type = 'text';
	});
	$('input.default').focus( function() {
		if ( this.value == this.id ) {
			this.value = "";
		}
		if ( $(this).hasClass('password') ) {
			this.type = 'password';
		} else {
			this.type = 'text';
		}
	});
	$('input.default').blur( function() {
		if ( this.value == "" ) {
			this.value = this.id;
			this.type = 'text';
		} else if ( $(this).hasClass('password') ) {
			this.type = 'password';
		}
	});
});
