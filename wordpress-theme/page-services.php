<?php
/**
 * Template Name: Services Page
 * Template Post Type: page
 */

get_header();
?>

<div class="overflow-x-hidden pt-0 selection:bg-dms-blue selection:text-white bg-white">
    <!-- Immersive Light Hero -->
    <section class="bg-white text-dms-gray pt-48 pb-24 text-center relative overflow-hidden">
        <div class="absolute inset-0">
            <div class="absolute top-0 left-1/4 w-[400px] h-[400px] bg-dms-green/5 rounded-full blur-[140px] animate-float"></div>
            <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-dms-blue/5 rounded-full blur-[140px] animate-float" style="animation-delay: 2s;"></div>
        </div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="mb-8 inline-block overflow-hidden">
                <span class="text-dms-green font-black text-[10px] uppercase tracking-[0.8em] mb-4 block animate-reveal">
                    Strategic Excellence
                </span>
            </div>
            <h1 class="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                The <span class="text-gradient">Impact</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
                We proudly provide all the digital marketing services you need to ensure you get the best results for your business in Clearwater, FL.
            </p>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Services List Section -->
    <section class="py-24 md:py-32 bg-white">
        <div class="container mx-auto px-6">
            <?php
            $services = function_exists('get_field') ? get_field('services', 'option') : null;
            if (!$services || !is_array($services)) {
                // Fallback services
                $services = [
                    ['title' => 'SEARCH ENGINE OPTIMIZATION', 'description' => 'We make it possible for your business to compete online by placing your website higher in local search results of Google.', 'icon' => 'seo'],
                    ['title' => 'SOCIAL MEDIA MARKETING', 'description' => 'Our social media distribution is excellent at reaching a larger audience quickly so you don\'t need an expensive marketing team!', 'icon' => 'social'],
                    ['title' => 'CONTENT MARKETING', 'description' => 'We will write content to rank high on Google, so you can start getting traffic from search engines and converting visitors into customers.', 'icon' => 'content'],
                    ['title' => 'PAY PER CLICK', 'description' => 'We provide well targeted PPC advertising. Our industry leading AI technology gives us access to vast amounts of data.', 'icon' => 'ppc'],
                    ['title' => 'WEBSITE DESIGN', 'description' => 'Having trouble with design? Our team is ready to take your dreams and make them a reality!', 'icon' => 'design']
                ];
            }

            if (!empty($services)) :
            ?>
                <div class="space-y-32 md:space-y-48">
                    <?php foreach ($services as $index => $service) :
                        if (!is_array($service)) continue;

                        $isReversed = $index % 2 !== 0;

                        // Icon HTML
                        $icon_class = 'w-8 h-8 lg:w-12 lg:h-12';
                        $service_icon = isset($service['icon']) ? $service['icon'] : 'seo';

                        switch ($service_icon) {
                            case 'seo':
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>';
                                break;
                            case 'social':
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>';
                                break;
                            case 'content':
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
                                break;
                            case 'ppc':
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>';
                                break;
                            case 'design':
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>';
                                break;
                            default:
                                $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>';
                        }

                        $service_title = isset($service['title']) ? esc_html($service['title']) : '';
                        $service_description = isset($service['description']) ? esc_html($service['description']) : '';
                    ?>
                        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24 lg:gap-32 will-animate mb-24 md:mb-32 last:mb-0">
                            <div class="w-full md:w-1/2 <?php echo $isReversed ? 'md:order-2' : ''; ?>">
                                <div class="mb-6 md:mb-8">
                                    <span class="text-dms-green font-black text-5xl md:text-8xl opacity-10 block mb-1 md:mb-2 leading-none select-none">
                                        0<?php echo esc_html($index + 1); ?>
                                    </span>
                                    <div class="flex items-center mb-6">
                                        <div class="p-4 sm:p-5 bg-dms-light-gray rounded-3xl mr-4 sm:mr-6 text-dms-blue shadow-inner transition-transform duration-700">
                                            <?php echo wp_kses($icon_html, array('svg' => array('class' => array(), 'fill' => array(), 'stroke' => array(), 'viewbox' => array()), 'path' => array('stroke-linecap' => array(), 'stroke-linejoin' => array(), 'stroke-width' => array(), 'd' => array()))); ?>
                                        </div>
                                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-dms-gray tracking-tighter uppercase leading-tight">
                                            <?php echo $service_title; ?>
                                        </h2>
                                    </div>
                                </div>
                                <p class="text-gray-500 text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
                                    <?php echo $service_description; ?>
                                </p>
                                <a
                                    href="<?php echo esc_url(home_url('/contact')); ?>"
                                    class="w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-dms-gray text-white py-5 px-10 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-dms-blue transition-all duration-500 group shadow-xl"
                                >
                                    Learn More
                                    <svg class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>

                            <div class="w-full md:w-1/2 flex justify-center items-center <?php echo $isReversed ? 'md:order-1' : ''; ?>">
                                <div class="relative group w-full max-w-[280px] sm:max-w-md aspect-square">
                                    <div class="absolute inset-0 bg-dms-green/5 rounded-[3rem] sm:rounded-[4rem] rotate-12 transition-transform duration-1000 group-hover:rotate-[20deg] scale-110"></div>
                                    <div class="absolute inset-0 bg-dms-blue/5 rounded-[3rem] sm:rounded-[4rem] -rotate-6 transition-transform duration-1000 group-hover:-rotate-12 scale-105"></div>

                                    <div class="relative w-full h-full bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl flex items-center justify-center p-12 sm:p-16 border border-gray-50 overflow-hidden">
                                        <div class="absolute inset-0 opacity-[0.03] transition-transform duration-[10000ms] group-hover:rotate-45">
                                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-full h-full text-dms-gray scale-150']); ?>
                                        </div>
                                        <div class="relative z-10 p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                                            <?php
                                            $large_icon_class = 'w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-dms-gray';
                                            switch ($service['icon']) {
                                                case 'seo':
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>';
                                                    break;
                                                case 'social':
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>';
                                                    break;
                                                case 'content':
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
                                                    break;
                                                case 'ppc':
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>';
                                                    break;
                                                case 'design':
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>';
                                                    break;
                                                default:
                                                    echo '<svg class="' . $large_icon_class . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>';
                                            }
                                            ?>
                                        </div>
                                    </div>

                                    <div class="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-10 lg:-right-10 bg-dms-blue text-white p-4 sm:p-6 lg:p-10 rounded-full shadow-2xl z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                                        <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] leading-none whitespace-nowrap block">Best Results</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php else : ?>
                <div class="text-center py-20">
                    <h2 class="text-2xl font-bold text-gray-400 uppercase tracking-widest">Loading Capabilities...</h2>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- Bottom Strategic CTA -->
    <section class="py-32 bg-dms-light-gray relative overflow-hidden border-t border-gray-100">
        <div class="container mx-auto px-6 text-center relative z-10">
            <div class="max-w-4xl mx-auto">
                <?php get_template_part('template-parts/logo', null, ['className' => 'w-12 h-12 md:w-16 md:h-16 text-dms-green opacity-20 mx-auto mb-10']); ?>
                <h3 class="text-3xl md:text-6xl font-black text-dms-gray uppercase tracking-tighter mb-10 leading-tight">
                    Elevate Your <span class="text-dms-blue">Business</span>
                </h3>
                <p class="text-lg text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                    Trust the Data to elevate your business above the highly competitive Internet using the right marketing strategies.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="<?php echo home_url('/contact'); ?>"
                        class="w-full sm:w-auto bg-dms-blue text-white py-6 px-16 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-dms-green transition-all duration-500 shadow-2xl hover:scale-105"
                    >
                        Start Growth
                    </a>
                    <button
                        onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                        class="w-full sm:w-auto glass text-dms-gray py-6 px-16 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all duration-500 border border-gray-200"
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
