/*
	who  : Jake
	when : June 14, 2007
	why  : 
			class: default
				To allow input text fields to be used without labels.
				The field shows the "id" until the user has changed it.
			class: password
				Converts the field to a "password" once the user has entered one.
				Converts the field back to a "text" if empty.
*/

function get_default_value(id){
	return ( $("#"+id+"_default") ) ? $("#"+id+"_default")[0].value : id;
}

$(function() {
	$('input.default').each( function() {
		this.value = get_default_value(this.id);
		this.type = 'text';
	});

	$('input.default').blur( function() {
		if ( this.value == "" ) {
			this.value = get_default_value(this.id);
			if ( $(this).hasClass('password') ) {
				this.type = 'text';
			}
		}
	});

	$('input.default').focus( function() {
		if ( this.value == get_default_value(this.id) ) {
			this.value = "";
			if ( $(this).hasClass('password') ) {
				this.type = 'password';
			}
		}
	});
});
