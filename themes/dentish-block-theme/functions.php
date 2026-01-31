<?php

function dentish_files()
{
    // wp_enqueue_style('dentish_main_styles', get_stylesheet_uri());
    wp_enqueue_style('roboto-fonts', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    wp_enqueue_style('dentish_main_styles', get_theme_file_uri('/css/main.css'));

    // Custom js
    wp_enqueue_script('dentish_custom_js', get_theme_file_uri('/src/js/custom.js'), array('jquery'), false, true);
}

add_action('wp_enqueue_scripts', 'dentish_files');




function dentish_theme_setup()
{
    // Enable menu support

    add_theme_support('menus');

    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dentish'),
        'footer' => __('Footer Menu', 'dentish'),
    ));
    add_theme_support('editor-styles');
    add_editor_style(array('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', 'css/main.css'));
    add_image_size('featured-size', 300, 200, true);
}

add_action('after_setup_theme', 'dentish_theme_setup');


function myblocks_myheader_block_init()
{
    register_block_type(__DIR__ . '/build/myheader');
    register_block_type(__DIR__ . '/build/myfooter');
    register_block_type(__DIR__ . '/build/hero-banner');
    register_block_type(__DIR__ . '/build/generic-button');
    register_block_type(__DIR__ . '/build/generic-heading');
    register_block_type(__DIR__ . '/build/generic-image');
    register_block_type(__DIR__ . '/build/two-column-layout');
    register_block_type(__DIR__ . '/build/our-services');
    register_block_type(__DIR__ . '/build/service-item');
    register_block_type(__DIR__ . '/build/blocks-blog');
    register_block_type(__DIR__ . '/build/generic-intro');
}
add_action('init', 'myblocks_myheader_block_init');
