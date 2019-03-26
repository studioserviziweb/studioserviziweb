<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

Timber::$dirname = array('_layouts', '_patterns', 'templates', 'views');

function simplify_flexible_content_field( $blocks, &$context = null, $moreData = null ) {

    // run the_content filter on all textarea values
		foreach( $blocks as &$block ){

			// layout reference
			$block['layout'] = $block['acf_fc_layout'];
			unset( $block['acf_fc_layout'] );

			// create content data
			$block['contents'] = [];

			switch ($block['layout']) {

				case 'callus':
					if (isset($moreData['callcenter'])){
						$block['contents'] = array_merge($block['contents'], $moreData);
					}
					break;
          
				default: /* void */ break;
			}

			$layout = $block['layout'];

			$fields = array(
				'title',
				'subtitle'
			);

			foreach ($fields as $field) {
				flexible_content_field_refactor_layout_based( $field, $block );
			};

			unset( $block[ $layout ] );

		}

    return $blocks;
}

function flexible_content_field_refactor_layout_based( $field, &$array, $prefix = 'contents' ){

	$layout = $array['layout'];
	if ( isset($array[ $layout ]) && isset($array[$layout][$field]) ) {

		$array[$prefix][$field] = $array[$layout][$field];
	}
}
