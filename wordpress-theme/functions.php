<?php
/**
 * Dependable Marketing Solutions Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue scripts and styles
function dms_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('dms-style', get_stylesheet_uri(), array(), '1.0.0');

    // Enqueue Tailwind CSS
    wp_enqueue_style('tailwind-css', 'https://cdn.tailwindcss.com', array(), null);

    // Enqueue JavaScript
    wp_enqueue_script('dms-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true);

    // Localize script for AJAX and data (only if ACF is available)
    if (function_exists('get_field')) {
        wp_localize_script('dms-script', 'dms_data', array(
            'heroTitle' => get_field('hero_title', 'option') ?: 'Dependable Marketing Solutions',
            'team' => dms_get_team_members(),
            'services' => dms_get_services(),
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('dms_nonce')
        ));
    }
}
add_action('wp_enqueue_scripts', 'dms_enqueue_scripts');

// Theme setup
function dms_theme_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('menus');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer-explore' => 'Footer Explore Menu',
        'footer-expertise' => 'Footer Expertise Menu'
    ));
}
add_action('after_setup_theme', 'dms_theme_setup');

// Get team members from ACF
function dms_get_team_members() {
    if (!function_exists('get_field')) {
        return array();
    }

    $team_members = get_field('team_members', 'option');
    if (!$team_members || !is_array($team_members)) {
        return array();
    }

    return array_map(function($member) {
        if (!is_array($member)) {
            return array(
                'name' => '',
                'role' => '',
                'image' => ''
            );
        }

        return array(
            'name' => isset($member['name']) ? sanitize_text_field($member['name']) : '',
            'role' => isset($member['role']) ? sanitize_text_field($member['role']) : '',
            'image' => isset($member['image']) && is_array($member['image']) ? esc_url($member['image']['url']) : ''
        );
    }, $team_members);
}

// Get services from ACF
function dms_get_services() {
    if (!function_exists('get_field')) {
        return array();
    }

    $services = get_field('services', 'option');
    if (!$services || !is_array($services)) {
        return array();
    }

    $icon_map = array(
        'seo' => 'seo',
        'social' => 'social',
        'content' => 'content',
        'ppc' => 'ppc',
        'design' => 'design'
    );

    return array_map(function($service) use ($icon_map) {
        if (!is_array($service)) {
            return array(
                'title' => '',
                'description' => '',
                'icon' => 'seo'
            );
        }

        return array(
            'title' => isset($service['title']) ? sanitize_text_field($service['title']) : '',
            'description' => isset($service['description']) ? wp_kses_post($service['description']) : '',
            'icon' => isset($service['icon']) ? sanitize_text_field($service['icon']) : 'seo'
        );
    }, $services);
}

// Custom post types if needed
function dms_register_post_types() {
    // Register Services post type if needed
    register_post_type('dms_service', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-admin-tools'
    ));
}
add_action('init', 'dms_register_post_types');

// Add ACF options page if ACF is available
function dms_add_acf_options_page() {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page(array(
            'page_title' => 'Theme Settings',
            'menu_title' => 'Theme Settings',
            'menu_slug' => 'theme-settings',
            'capability' => 'edit_posts',
            'redirect' => false,
            'position' => 30
        ));
    }
}
add_action('acf/init', 'dms_add_acf_options_page');

// Handle contact form submission
function dms_handle_contact_form() {
    // Verify nonce for security
    if (!wp_verify_nonce($_POST['_wpnonce'] ?? '', 'dms_nonce')) {
        wp_die('Security check failed');
    }

    // Sanitize form data
    $form_data = array(
        'full_name' => sanitize_text_field($_POST['full_name'] ?? ''),
        'organization' => sanitize_text_field($_POST['organization'] ?? ''),
        'email' => sanitize_email($_POST['email'] ?? ''),
        'phone' => sanitize_text_field($_POST['phone'] ?? ''),
        'budget' => sanitize_text_field($_POST['budget'] ?? ''),
        'services' => isset($_POST['services']) ? array_map('sanitize_text_field', $_POST['services']) : array(),
        'objectives' => sanitize_textarea_field($_POST['objectives'] ?? ''),
        'submitted_at' => current_time('mysql')
    );

    // Here you would typically send an email or save to database
    // For now, we'll just show a success message

    // Set success message
    wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    exit;
}
add_action('admin_post_dms_contact_form', 'dms_handle_contact_form');
add_action('admin_post_nopriv_dms_contact_form', 'dms_handle_contact_form');

// Add success message for contact form
function dms_show_contact_success() {
    if (isset($_GET['contact']) && $_GET['contact'] === 'success') {
        echo '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">Your message has been sent. Our strategist will contact you within 24 hours.</span>
        </div>';
    }
}

// Add item_index to nav menu args for mobile walker
function dms_nav_menu_args($args) {
    if (!isset($args['item_index'])) {
        $args['item_index'] = 0;
    }
    return $args;
}
add_filter('wp_nav_menu_args', 'dms_nav_menu_args');

/**
 * Custom Nav Walker for Primary Desktop Menu
 */
class DMS_Primary_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $active_classes = in_array('current-menu-item', $item->classes) ? 'text-dms-blue' : 'text-dms-gray hover:text-dms-blue';
        $active_span = in_array('current-menu-item', $item->classes) ? 'w-full' : '';

        $output .= sprintf(
            '<a href="%s" class="cursor-pointer transition-all duration-500 uppercase font-black tracking-[0.2em] text-[11px] relative group %s">%s<span class="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-dms-blue transition-all duration-300 ease-out group-hover:w-full %s"></span></a>',
            esc_url($item->url),
            $active_classes,
            esc_html($item->title),
            $active_span
        );
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "";
    }
}

/**
 * Custom Nav Walker for Mobile Menu
 */
class DMS_Mobile_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $item_index = $args->item_index;
        $animation_delay = 0.2 + $item_index * 0.1;

        $output .= sprintf(
            '<a href="%s" class="group flex items-baseline gap-6 py-4 border-b border-white/5 w-full transform transition-all duration-500 hover:pl-4" style="animation: fadeInUp 0.6s ease forwards %ss; opacity: 0;">
                <span class="text-dms-green font-black text-sm tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0%d</span>
                <span class="text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-colors text-white group-hover:text-dms-green">%s</span>
            </a>',
            esc_url($item->url),
            $animation_delay,
            $item_index + 1,
            esc_html($item->title)
        );
        $args->item_index++;
    }

    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '';
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "";
    }
}

// Get social media icons
function dms_get_social_icons() {
    return array(
        'facebook' => '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
        'instagram' => '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.017z"/></svg>',
        'twitter' => '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
        'linkedin' => '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    );
}
