<?php get_header(); ?>

<main class="flex-grow">
    <div class="container mx-auto px-6 py-16">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header mb-8">
                        <h1 class="text-4xl md:text-6xl font-black text-dms-gray uppercase tracking-tighter mb-6">
                            <?php the_title(); ?>
                        </h1>
                    </header>

                    <div class="entry-content prose prose-lg max-w-none">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        else :
            ?>
            <div class="text-center">
                <h2 class="text-2xl font-bold text-dms-gray mb-4">Page Not Found</h2>
                <p class="text-gray-600">The page you're looking for doesn't exist.</p>
                <a href="<?php echo home_url(); ?>" class="inline-block mt-6 bg-dms-green text-white px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm hover:bg-dms-green-light transition-colors">
                    Go Home
                </a>
            </div>
            <?php
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
