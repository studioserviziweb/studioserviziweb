<?php
// register widgets areas
function ssw_widgets_init() {
  register_sidebar(
    array(
      'name' => __( 'Sidebar', 'sicuritalia' ),
      'id' => 'sidebar',
    	'before_title'  => '<h3 class="sidebar-widget-title">',
    	'after_title'   => '</h3>',
    	'before_widget' => '<section id="%1$s" class="widget %2$s">',
    	'after_widget'  => '</section>',
    )
  );
}
add_action( 'widgets_init', 'ssw_widgets_init' );
