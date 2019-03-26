<?php
add_action( 'wp_ajax_nopriv_load-filter-news', 'news_load_term_posts' );
add_action( 'wp_ajax_load-filter-news', 'news_load_term_posts' );

function news_load_term_posts () {
	$term_id = $_POST[ 'category' ];
  $args = array (
  'term' => $term_id,
  'order' => 'DESC',
       'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field'    => 'id',
            'terms'    => $term_id,
            )
        )
   );

	// get first 6 articles
	$context['items'] = get_posts($args);
	// gets all category for each single post + type definition
	foreach ($context['items'] as $item) {
		$postCats = get_the_category($item->ID);
		$item->type = 'post';
		$item->section = array_pop($postCats);
		$item->image = make_image_object( get_post_thumbnail_id($item->ID) );
		$item->link = get_permalink($item->ID);
	};

	Timber::render( array( 'components/molecules/news_items.twig' ), $context );
	wp_die();
}

function make_image_object( $iid, $debug = false ){

	if( $debug ) print_r( $iid );

	$image = [];

	if( isset( $iid ) ){

		$image[ 'src' ] = wp_get_attachment_image_src( $iid, 'full' )[0];
		$image[ 'srcset' ] = wp_get_attachment_image_srcset( $iid );
		$image[ 'sizes' ] = wp_get_attachment_image_sizes( $iid, 'full' );

		$toRemove = array( 'ID', 'id', 'filename', 'caption', 'name', 'date', 'modified', 'mime_type', 'type', 'icon', 'author', 'description', 'url', 'width', 'height' );
		remove_useless_fields( $image, $toRemove );
	}

	if( $debug ) print_r( $image );

	return $image;
}

function remove_useless_fields( &$array, $toRemove = null ){

	if( isset( $toRemove ) && is_array( $toRemove ) && count( $toRemove )){
		foreach( $toRemove as $fieldName ){

			unset( $array[ $fieldName ] );
		}
	}
}
