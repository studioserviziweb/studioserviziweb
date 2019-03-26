<?php

// Add Your Menu Locations
function register_my_menus() {
	register_nav_menus(
		array(
	    'main_menu'	=> __( 'Menu Principale','sicuritalia' 	),
			'top_menu' 	=> __( 'Menu di servizio','sicuritalia' )
		)
	);
}
add_action( 'init', 'register_my_menus' );
