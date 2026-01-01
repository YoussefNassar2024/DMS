<?php get_header(); ?>

<main class="max-w-7xl mx-auto px-6 py-20">
    <h1 class="text-4xl font-bold mb-12">Our Services</h1>

    <div class="grid md:grid-cols-3 gap-8">
        <?php while (have_posts()) : the_post(); ?>
            <article class="border p-6 rounded-lg">
                <h2 class="text-xl font-semibold mb-4">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </h2>
                <p class="text-gray-600">
                    <?php the_excerpt(); ?>
                </p>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
