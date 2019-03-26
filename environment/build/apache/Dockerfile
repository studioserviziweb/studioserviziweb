# container info

	# debian jessie + apache + php 5.6
	FROM php:5.6-apache

	LABEL description="This image is used to setup a LAMP environment based on debian jessie with php 5.6"
	LABEL version="1.1"

	MAINTAINER Edoardo Tondo <edoardo.tondo@studioserviziweb.it>

	# debian specific
	RUN apt-get update && apt-get install -y --force-yes \
		wget \
		pwgen \
		nano \
		wget \
		curl

	# Tweaks to give Apache/PHP write permissions to the app
	ENV BOOT2DOCKER_ID 1000
	ENV BOOT2DOCKER_GID 50

	RUN usermod -u ${BOOT2DOCKER_ID} www-data && \
    	usermod -G staff www-data

	RUN groupmod -g $(($BOOT2DOCKER_GID + 10000)) $(getent group $BOOT2DOCKER_GID | cut -d: -f1)
	RUN groupmod -g ${BOOT2DOCKER_GID} staff

	RUN sed -i "s/export APACHE_RUN_GROUP=www-data/export APACHE_RUN_GROUP=staff/" /etc/apache2/envvars

    RUN chown -R www-data:staff /var/www

	# php configuration
	ADD php.ini /usr/local/etc/php/php.ini

	RUN apt-get update && apt-get install -y libmagickwand-dev --fix-missing \
		&& pecl install imagick

	RUN docker-php-ext-install pdo pdo_mysql mysql mysqli && \
			docker-php-ext-install zip

	RUN docker-php-ext-enable imagick

	# ssl
	RUN apt-get update && \
		apt-get install -y  --no-install-recommends ssl-cert && \
		rm -r /var/lib/apt/lists/* && \
		a2enmod ssl && \
		a2ensite default-ssl

	RUN a2enmod ssl
	RUN a2enmod rewrite

	# expose port 80
	EXPOSE 80
  EXPOSE 443
