<?php
	$filter = new Twig_SimpleFilter('print_r', function ($string) {
		return print_r($string);
	});
