<?php get_header(); ?>

<main>

    <!-- HERO -->
    <section class="bg-gray-50 py-28">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Dependable Marketing Solutions
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                We help businesses grow using smart digital solutions,
                automation, and scalable marketing systems.
            </p>
            <div class="flex justify-center gap-4">
                <a href="/services" class="px-6 py-3 bg-black text-white rounded">
                    Our Services
                </a>
                <a href="/contact" class="px-6 py-3 border rounded">
                    Contact Us
                </a>
            </div>
        </div>
    </section>

    <!-- SERVICES -->
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold mb-14 text-center">
                Our Services
            </h2>

            <div class="grid md:grid-cols-3 gap-10">
                <?php
                $services = new WP_Query([
                    'post_type' => 'service',
                    'posts_per_page' => 3
                ]);

                while ($services->have_posts()) : $services->the_post();
                ?>
                    <article class="border p-8 rounded-lg hover:shadow transition">
                        <h3 class="text-xl font-semibold mb-4">
                            <?php the_title(); ?>
                        </h3>
                        <p class="text-gray-600 mb-6">
                            <?php the_excerpt(); ?>
                        </p>
                        <a href="<?php the_permalink(); ?>" class="font-medium underline">
                            Learn more →
                        </a>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <!-- SOLUTIONS -->
    <section class="bg-gray-50 py-24">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold mb-14 text-center">
                Our Solutions
            </h2>

            <div class="grid md:grid-cols-3 gap-10">
                <?php
                $solutions = new WP_Query([
                    'post_type' => 'solution',
                    'posts_per_page' => 3
                ]);

                while ($solutions->have_posts()) : $solutions->the_post();
                ?>
                    <article class="bg-white border p-8 rounded-lg hover:shadow transition">
                        <h3 class="text-xl font-semibold mb-4">
                            <?php the_title(); ?>
                        </h3>
                        <p class="text-gray-600 mb-6">
                            <?php the_excerpt(); ?>
                        </p>
                        <a href="<?php the_permalink(); ?>" class="font-medium underline">
                            View solution →
                        </a>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-28">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-6">
                Ready to grow your business?
            </h2>
            <p class="text-gray-600 mb-10">
                Let’s build a system that works for you.
            </p>
            <a href="/contact" class="px-8 py-4 bg-black text-white rounded text-lg">
                Get Started
            </a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
