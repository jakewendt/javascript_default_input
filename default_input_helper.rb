module DefaultInputHelper

#
#	These two helpers will probably need modified to allow
#	the caller to set classes, ids and other attributes.
#

#	I should really modify these to be using a hash for their options
#	I added "disabled" to these and it seems to stop them from being passed.

	def default_text_field_tag(name='name', default='default', value=nil)
		text_field_tag( name, value, :class => 'default' ) +
		hidden_field_tag( "#{name}_default", default, { :disabled => true } )
	end

	def default_password_field_tag(name='name', default='default')
		password_field_tag( name, nil, :class => 'default password' ) +
		hidden_field_tag( "#{name}_default", default, { :disabled => true } )
	end

end
