<?php get_header(); ?>

<main class="max-w-7xl mx-auto px-6 py-16">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article class="mb-12">
                <h1 class="text-3xl font-bold mb-4">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </h1>

                <div class="prose max-w-none">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <p>No content found.</p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
