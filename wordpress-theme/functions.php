<?php
/**
 * Dependable Marketing Solutions Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Styles & Scripts
 */
function dms_enqueue_scripts() {

    // Theme stylesheet
    wp_enqueue_style(
        'dms-style',
        get_stylesheet_uri(),
        [],
        '1.0.0'
    );

    // Tailwind CDN (MUST be a script)
    wp_enqueue_script(
        'tailwind-cdn',
        'https://cdn.tailwindcss.com',
        [],
        null,
        false
    );

    // Theme JS
    wp_enqueue_script(
        'dms-script',
        get_template_directory_uri() . '/js/script.js',
        [],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'dms_enqueue_scripts');

/**
 * Theme Supports
 */
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

/**
 * Menus
 */
register_nav_menus([
    'primary' => 'Primary Menu'
]);

/**
 * ACF Options Page
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'page_title' => 'Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug'  => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect'   => false
    ]);
}
function dms_custom_post_types() {

    // SERVICES
    register_post_type('service', [
        'labels' => [
            'name' => 'Services',
            'singular_name' => 'Service'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'services'],
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-admin-tools'
    ]);

    // SOLUTIONS
    register_post_type('solution', [
        'labels' => [
            'name' => 'Solutions',
            'singular_name' => 'Solution'
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'solutions'],
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-lightbulb'
    ]);
}
add_action('init', 'dms_custom_post_types');


/**
 * Performance optimizations
 */

// Remove emoji scripts
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Disable Gutenberg CSS
add_action('wp_enqueue_scripts', function () {
    wp_dequeue_style('wp-block-library');
}, 100);
