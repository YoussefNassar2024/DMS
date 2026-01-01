<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-gray-900'); ?>>

<header class="sticky top-0 bg-white border-b z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="<?php echo esc_url(home_url('/')); ?>"
           class="text-xl font-bold">
            DMS
        </a>

        <nav class="hidden md:block">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'flex gap-8 font-medium'
            ]);
            ?>
        </nav>

    </div>
</header>
