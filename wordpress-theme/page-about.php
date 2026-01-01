<?php
/**
 * Template Name: About Page
 * Template Post Type: page
 */
get_header(); 
?>

<div class="overflow-x-hidden">
    <section class="bg-white pt-40 pb-20 border-b border-gray-100">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl">
                <span class="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">Clearwater, FL Office</span>
                <h1 class="text-3xl md:text-8xl font-black text-dms-gray mb-8 leading-[0.9] uppercase tracking-tighter animate-fade-in-up">
                    Understanding Your<br/><span class="text-dms-green">Business</span> Goals.
                </h1>
            </div>
        </div>
    </section>

    <?php
    $team_members = get_field('team_members', 'option');
    if ($team_members) :
    ?>
    <section class="py-32 bg-dms-light-gray">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-4xl md:text-6xl font-black text-dms-gray mb-6 uppercase tracking-tighter">Meet Our <span class="text-dms-green">Team</span></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <?php foreach ($team_members as $member) : ?>
                        <div class="group will-animate">
                            <div class="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-dms-light-gray">
                                <img src="<?php echo esc_url($member['image']['url']); ?>" alt="<?php echo esc_attr($member['name']); ?>" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                            </div>
                            <h3 class="text-xl font-black text-dms-gray uppercase tracking-tighter"><?php echo esc_html($member['name']); ?></h3>
                            <p class="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1"><?php echo esc_html($member['role']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif; ?>
</div>

<?php get_footer(); ?>