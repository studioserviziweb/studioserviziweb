<?php
/**
 * Il file base di configurazione di WordPress.
 *
 * Questo file viene utilizzato, durante l’installazione, dallo script
 * di creazione di wp-config.php. Non è necessario utilizzarlo solo via
 * web, è anche possibile copiare questo file in «wp-config.php» e
 * riempire i valori corretti.
 *
 * Questo file definisce le seguenti configurazioni:
 *
 * * Impostazioni MySQL
 * * Prefisso Tabella
 * * Chiavi Segrete
 * * ABSPATH
 *
 * È possibile trovare ultetriori informazioni visitando la pagina del Codex:
 *
 * @link https://codex.wordpress.org/it:Modificare_wp-config.php
 *
 * È possibile ottenere le impostazioni per MySQL dal proprio fornitore di hosting.
 *
 * @package WordPress
 */

// ** Impostazioni MySQL - È possibile ottenere queste informazioni dal proprio fornitore di hosting ** //
/** Il nome del database di WordPress */
define('DB_NAME', 'studioserviziweb');

/** Nome utente del database MySQL */
define('DB_USER', 'root');

/** Password del database MySQL */
define('DB_PASSWORD', 'root');

/** Hostname MySQL  */
define('DB_HOST', 'mysql');

/** Charset del Database da utilizzare nella creazione delle tabelle. */
define('DB_CHARSET', 'utf8mb4');

/** Il tipo di Collazione del Database. Da non modificare se non si ha idea di cosa sia. */
define('DB_COLLATE', '');

/**#@+
 * Chiavi Univoche di Autenticazione e di Salatura.
 *
 * Modificarle con frasi univoche differenti!
 * È possibile generare tali chiavi utilizzando {@link https://api.wordpress.org/secret-key/1.1/salt/ servizio di chiavi-segrete di WordPress.org}
 * È possibile cambiare queste chiavi in qualsiasi momento, per invalidare tuttii cookie esistenti. Ciò forzerà tutti gli utenti ad effettuare nuovamente il login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' ~A&6sg3#No+;4kjB$Nef)!>a1j~)nGxLc`UsU[sr,BtLP}hv,0+xqy$-MnG>w#P');
define('SECURE_AUTH_KEY',  'g2IU+578D/+{Som7;+tU#^iphKTaNW2{j)8pSU=&5Q!  2nk$^mJ<]Xf0Z[ZJhXI');
define('LOGGED_IN_KEY',    '#xorQD<F/i9Qno570D2FTa,)WxGRZI<PG.x|U~HWZWrVl B_Cy$6+H8.`0c~s[gW');
define('NONCE_KEY',        '<4Ri}[%b-Za[GI>R|uON9/F}S5Q-m,:XMU9EY4ME-)P)E=6f|:G]CW+MfrmT H$E');
define('AUTH_SALT',        'L2`9X2V/0D.mdR5(mL9T]v7GE?OUSB6p4Yh8T0vx&>l-ZDTC`R@IVi@bJ6xqb:7E');
define('SECURE_AUTH_SALT', '| ^,(}Md,uuEE&5[%sy}F7fNoCCzmzcu:7FB$b|(7;qg<<Fk!&oekHsNg;}lM2y6');
define('LOGGED_IN_SALT',   'MBD.6G|jJy:#x8=-DQF|[qQu9_[n9RU6]BfCcKI()UeOAW^Ntv_Slg?0{QIM;;MR');
define('NONCE_SALT',       '=a;%b0|d_t9>^iSv$_r3BsD7([!-w R|81$u`@U)STVK}L-z*vaT$V1YP+9/cnJK');

/**#@-*/

/**
 * Prefisso Tabella del Database WordPress.
 *
 * È possibile avere installazioni multiple su di un unico database
 * fornendo a ciascuna installazione un prefisso univoco.
 * Solo numeri, lettere e sottolineatura!
 */
$table_prefix  = 'wpt_';

/**
 * Per gli sviluppatori: modalità di debug di WordPress.
 *
 * Modificare questa voce a TRUE per abilitare la visualizzazione degli avvisi
 * durante lo sviluppo.
 * È fortemente raccomandato agli svilupaptori di temi e plugin di utilizare
 * WP_DEBUG all’interno dei loro ambienti di sviluppo.
 */
define('WP_DEBUG', false);

/* Finito, interrompere le modifiche! Buon blogging. */

/** Path assoluto alla directory di WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Imposta le variabili di WordPress ed include i file. */
require_once(ABSPATH . 'wp-settings.php');
