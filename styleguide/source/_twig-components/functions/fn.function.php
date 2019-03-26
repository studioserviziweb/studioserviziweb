<?php

$function = new Twig_SimpleFunction('fn', function ($obj, $value = null, $a = null, $b = null) {
		switch ($obj) {
			case 'sanitize_title':
				$value = strtolower($value);
				$value = str_replace(array(' '), array('-'), $value);
				return $value;
				break;
			default:
				return false;
				break;
		}

		return false;
});
