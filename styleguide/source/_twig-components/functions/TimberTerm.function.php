<?php

$function = new Twig_SimpleFunction('TimberTerm', function ($id) {
		$obj = new stdClass();
		$obj->name = 'Taxonomy term';
		$obj->link = '#';
		$obj->subtitle = 'Subtitle';
		$obj->title = 'Title';
		$obj->background_image = null;
		$obj->description = 'Lorem ipsum dolor';
		$obj->icon = null;
		$obj->color_brand_color = null;
    return $obj;
});
