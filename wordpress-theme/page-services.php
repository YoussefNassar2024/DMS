<?php
/**
 * Template Name: Services Page
 * Template Post Type: page
 */
get_header(); 
?>

<div class="overflow-x-hidden pt-0 bg-white">
    <section class="bg-white text-dms-gray pt-48 pb-24 text-center relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <span class="text-dms-green font-black text-[10px] uppercase tracking-[0.8em] mb-4 block animate-reveal">Strategic Excellence</span>
            <h1 class="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">The <span class="text-gradient">Impact</span></h1>
        </div>
    </section>

    <section class="py-24 md:py-32 bg-white">
        <div class="container mx-auto px-6">
            <?php
            $services = get_field('services', 'option');
            if ($services) :
                echo '<div class="space-y-32 md:space-y-48">';
                foreach ($services as $index => $service) :
                    $isReversed = $index % 2 !== 0;
            ?>
                <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24 lg:gap-32 will-animate <?php echo $isReversed ? 'md:flex-row-reverse' : ''; ?>">
                    <div class="w-full md:w-1/2">
                        <span class="text-dms-green font-black text-5xl md:text-8xl opacity-10 block mb-1 leading-none">0<?php echo $index + 1; ?></span>
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-dms-gray tracking-tighter uppercase leading-tight mb-6"><?php echo esc_html($service['title']); ?></h2>
                        <p class="text-gray-500 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl"><?php echo esc_html($service['description']); ?></p>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-dms-gray text-white py-5 px-10 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-dms-blue transition-all duration-500">Learn More</a>
                    </div>
                    <div class="w-full md:w-1/2 flex justify-center">
                        <div class="relative w-full max-w-md aspect-square bg-white rounded-[4rem] shadow-2xl flex items-center justify-center border border-gray-50">
                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-32 h-32 text-dms-gray']); ?>
                        </div>
                    </div>
                </div>
            <?php 
                endforeach; 
                echo '</div>';
            endif; 
            ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>