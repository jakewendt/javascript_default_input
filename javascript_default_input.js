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


function find_default_inputs() {
	inputs = document.getElementsByTagName('input');
	for( i=0; i<=inputs.length; i++){
		if( inputs[i] && inputs[i].className && inputs[i].className.match('default') ) {
			inputs[i].onfocus = default_input_focus
			inputs[i].onblur  = default_input_blur
			inputs[i].value = inputs[i].id
			inputs[i].type  = 'text'
		}
	}
}

function default_input_blur() {
	if ( this.value == "" ) {
		this.value = this.id;
		if ( this.className.match( 'password' ) ) {
			this.type = 'text';
		}
	}
}

function default_input_focus() {
	if ( this.value == this.id ) {
		this.value = "";
		if ( this.className.match( 'password' ) ) {
			this.type = 'password';
		}
	}
}

window.onload = find_default_inputs;
