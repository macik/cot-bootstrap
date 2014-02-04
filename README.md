Bootstrap wrapper
============

Extension for Cotonti CMF. Bootstrap framework wrapper plugin.

Description
-----------

Used to maintain single Bootstrap copy through different plugins and themes inside Cotonti CMF.
This plugin attend to Cotonti developers that uses Bootstrap framework in their works.

Features
--------

* Easy to update (one copy for all needs)
* Easy to setup loading from CDN
* Full and minified version supplied (setup in plugin config)

Demo page
---------

Some kind of demo and help page available after install. Just install `bootstrap` and open admin tools page
( http://www.yoursite.com/admin/other?p=bootstrap ).

Requirements
------------

Requires Cotonti Siena v0.9.13 or later.

### Compatibility

Should be compatible with all plugins and themes.


### Comments

Plugin works out from the box. To use it just add code snippet to you
`plugin.rc.php` or `theme.rc.php` that uses own Bootstrap before:

	
	global $cot_bootstrap;
	// check Bootstrap wrapper is installed and had appropriate version
	if ($cfg['bootstrap'] && version_compare($cfg['bootstrap'], '3.0.0', '>=')) {
		cot_rc_add_file($cot_bootstrap['css_file']);
		cot_rc_add_file($cot_bootstrap['theme_file']);
		cot_rc_link_footer($cot_bootstrap['js_file']);
	} else {
		// Fallback for Bootstrap wrapper not installed or had old version
		// Just loads files from some CDN (Yandex for example)
		cot_rc_add_file('http://yandex.st/bootstrap/3.0.3/js/bootstrap.min.css');
		cot_rc_link_footer('http://yandex.st/bootstrap/3.0.3/js/bootstrap.min.js');
	}
	

Also I recommend to add `Recommends_plugins=bootstrap` or `Requires_plugins=bootstrap`
line to your plugin setup file in order to recommend or require `Bootstrap` extension for
it work.

### How extension works

Extension provide simple API to load proper Bootstrap files and
maintain it as a single copy across all plugins and themes. It helps 3rd party plugins to check for Bootstrap files installed in CMF and use it. 

Install
-------

* Unpack, copy files to root folder of your site.
* Install via Admin → Extensions menu (`Administration panel → Extensions`)
* Checks setting in config (`Administration panel → Extensions → bootstrap → Configuration`).

### Comments

To see this Extension in action - open «bootstrap» admin page (Administration panel → Other → Bootstrap wrapper).
Version of plugin correspond to used Bootstrap Framework version.
You can use `$cfg['bootstrap']` variable to check is plugin installed and Bootstrap version number.

Licence
-------

Distributed under BSD license.


Author
------

[Andrey Matsovkin](https://github.com/macik/)

References
----------

* [Cotonti.com](http://Cotonti.com/) -- Home of Cotonti CMF
* [bootstrap on GitHub](https://github.com/macik/cot-bootstrap) -- Latest version of bootstrap on GitHub