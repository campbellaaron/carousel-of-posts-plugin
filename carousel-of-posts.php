<?php
/*
Plugin Name:  Carousel of Posts
Plugin URI:   https://www.github.com/campbellaaron 
Description:  A plugin to create a custom Gutenberg block 
Version:      1.0
Author:       Aaron Campbell 
Author URI:   https://campbellaaron.github.io
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  I have no idea what this means
Domain Path:  /languages
*/

function gutenberg_carousel_posts() 
{
    wp_enqueue_script('gutenberg-carousel-block', plugin_dir_url(__FILE__).'gutencarousel.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
}

add_action('enqueue_block_editor_assets', 'gutenberg_carousel_posts');