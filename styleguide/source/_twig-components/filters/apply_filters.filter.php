<?php
	$filter = new Twig_SimpleFilter('apply_filters', function ($string) {
		return "<!-- # apply_filters(); filter placeholder # -->";
	});
