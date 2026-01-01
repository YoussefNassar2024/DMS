<?php
/**
 * Template Name: Front Page
 * Template Post Type: page
 */

get_header();
?>

<div class="overflow-x-hidden pt-0">
    <!-- Light Hero Section -->
    <section class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center text-dms-gray overflow-hidden bg-white pt-20">
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-dms-light-gray via-white to-dms-light-gray opacity-80"></div>
            <div class="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-dms-green/5 rounded-full blur-[140px] animate-gradient-xy"></div>
            <div
                class="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-dms-blue/5 rounded-full blur-[140px] animate-gradient-xy"
                style="animation-delay: 3s;"
            ></div>
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10 text-center">
            <div class="mb-8 inline-block">
                <span
                    class="inline-block px-4 py-1.5 rounded-full bg-dms-gray/5 border border-dms-gray/10 text-[10px] uppercase tracking-[0.4em] font-black text-dms-gray/60 animate-fade-in opacity-0"
                    style="animation-fill-mode: forwards;"
                >
                    Trust the Data in Clearwater, FL
                </span>
            </div>
            <h1
                class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.95] uppercase animate-fade-in-up text-dms-gray"
                style="color: var(--dms-main-color);"
            >
                <?php echo esc_html(function_exists('get_field') ? get_field('hero_title', 'option') : 'Dependable Marketing Solutions'); ?>
            </h1>
            <div class="max-w-4xl mx-auto space-y-6 animate-fade-in-up" style="animation-delay: 0.2s;">
                <p class="text-base sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                    The Internet is highly competitive. We understand using the right
                    marketing strategies is essential to elevate your business above
                    all others. We provide the digital marketing services you need for
                    real results.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 animate-fade-in-up" style="animation-delay: 0.4s;">
                <a
                    href="<?php echo home_url('/services'); ?>"
                    class="w-full sm:w-auto bg-dms-green text-white font-black py-5 px-10 rounded-full hover:bg-dms-green-light transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-[11px]"
                >
                    Our Capabilities
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                <a
                    href="<?php echo home_url('/about'); ?>"
                    class="w-full sm:w-auto bg-white text-dms-gray border border-gray-200 font-black py-5 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-[11px] shadow-lg"
                >
                    Our Story
                </a>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
            <div class="w-[1px] h-20 bg-gradient-to-b from-transparent via-dms-gray/20 to-transparent"></div>
        </div>
    </section>

    <!-- Clearwater Identity Section -->
    <section class="py-24 bg-white border-b border-gray-100">
        <div class="container mx-auto px-6 text-center max-w-5xl">
            <h2 class="text-2xl md:text-4xl font-black text-dms-gray uppercase tracking-tighter mb-8 will-animate">
                At <span class="text-dms-green">Trust the Data</span> in Clearwater, FL
            </h2>
            <p class="text-lg text-gray-500 font-medium leading-relaxed will-animate mb-8" style="animation-delay: 0.1s;">
                We are a marketing and SEO company that works closely with our clients to understand their business and help them set their company apart from the competition.
            </p>
            <p class="text-lg text-gray-500 font-medium leading-relaxed will-animate" style="animation-delay: 0.2s;">
                The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others.
            </p>
        </div>
    </section>

    <!-- Ranking Insight Section -->
    <section class="py-24 md:py-32 bg-dms-light-gray relative overflow-hidden">
        <div class="absolute right-0 top-0 w-1/3 h-full bg-dms-green/5 -skew-x-12 translate-x-1/2 hidden md:block"></div>
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div class="will-animate order-2 md:order-1">
                <div class="relative">
                    <div class="absolute -inset-4 bg-dms-green/10 rounded-3xl rotate-3"></div>
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                        alt="Clearwater Marketing Strategy"
                        class="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full"
                    />
                </div>
            </div>
            <div class="will-animate order-1 md:order-2">
                <?php get_template_part('template-parts/logo', null, ['className' => 'w-12 h-12 sm:w-16 sm:h-16 text-dms-blue mb-6 sm:mb-8']); ?>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-dms-gray mb-6 sm:mb-8 leading-tight uppercase tracking-tighter">
                    Where does your business <span class="text-dms-green">rank?</span>
                </h2>
                <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed font-medium">
                    With help from our SEO company in Clearwater, FL, you can more easily outrank your competitors for the right keywords to put your name in front of more prospective customers.
                </p>
                <a
                    href="<?php echo home_url('/about'); ?>"
                    class="flex items-center gap-4 text-dms-gray font-black uppercase tracking-widest group text-xs"
                >
                    <span class="h-[2px] w-12 bg-dms-green transition-all duration-500 group-hover:w-20"></span>
                    Our Strategy
                </a>
            </div>
        </div>
    </section>

    <!-- Services Showcase -->
    <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
                <div class="will-animate">
                    <span class="text-dms-green font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                        Our Solutions
                    </span>
                    <h2 class="text-4xl md:text-6xl font-black text-dms-gray leading-none uppercase tracking-tighter">
                        Strategic <br />
                        Services
                    </h2>
                </div>
                <p class="max-w-md text-gray-400 font-medium will-animate text-sm" style="animation-delay: 0.2s;">
                    We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                </p>
            </div>

            <?php
            $services = function_exists('get_field') ? get_field('services', 'option') : null;
            if (!$services || !is_array($services)) {
                // Fallback services
                $services = [
                    ['title' => 'SEARCH ENGINE OPTIMIZATION', 'description' => 'We make it possible for your business to compete online by placing your website higher in local search results of Google.', 'icon' => 'seo'],
                    ['title' => 'SOCIAL MEDIA MARKETING', 'description' => 'Our social media distribution is excellent at reaching a larger audience quickly so you don\'t need an expensive marketing team!', 'icon' => 'social'],
                    ['title' => 'CONTENT MARKETING', 'description' => 'We will write content to rank high on Google, so you can start getting traffic from search engines and converting visitors into customers.', 'icon' => 'content']
                ];
            }

            echo '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">';
            foreach (array_slice($services, 0, 3) as $index => $service) {
                if (!is_array($service)) continue;

                $icon_class = 'w-8 h-8';
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
                    default:
                        $icon_html = '<svg class="' . esc_attr($icon_class) . '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>';
                }

                $service_title = isset($service['title']) ? esc_html($service['title']) : '';
                $service_description = isset($service['description']) ? esc_html($service['description']) : '';

                echo '<div class="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 will-animate h-full" style="animation-delay: ' . esc_attr(0.2 + $index * 0.1) . 's;">';
                echo '<div class="absolute -right-8 -top-8 w-32 h-32 bg-dms-light-gray rounded-full transition-all duration-500 group-hover:scale-[3] group-hover:bg-dms-green/5 opacity-50"></div>';
                echo '<div class="relative z-10">';
                echo '<div class="w-16 h-16 bg-dms-light-gray rounded-2xl flex items-center justify-center mb-6 text-dms-green transition-all duration-500 group-hover:bg-dms-green group-hover:text-white group-hover:rotate-6">';
                echo wp_kses($icon_html, array('svg' => array('class' => array(), 'fill' => array(), 'stroke' => array(), 'viewbox' => array()), 'path' => array('stroke-linecap' => array(), 'stroke-linejoin' => array(), 'stroke-width' => array(), 'd' => array())));
                echo '</div>';
                echo '<h3 class="text-xl font-bold text-dms-gray mb-4 group-hover:text-dms-green transition-colors uppercase tracking-tighter">' . $service_title . '</h3>';
                echo '<p class="text-gray-500 leading-relaxed text-sm font-medium">' . $service_description . '</p>';
                echo '</div></div>';
            }
            echo '</div>';
            ?>
        </div>
    </section>

    <!-- Blue Section -->
    <section class="py-32 bg-dms-blue text-white relative overflow-hidden">
        <div class="absolute left-0 top-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dms-green via-transparent to-transparent"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center will-animate">
                <p class="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-12">
                    "The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all others."
                </p>
                <div class="flex items-center justify-center gap-4">
                    <div class="w-8 sm:w-12 h-[1px] bg-dms-green"></div>
                    <div>
                        <div class="font-black uppercase tracking-widest text-[10px] sm:text-xs text-dms-green">
                            Trust the Data
                        </div>
                        <div class="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest mt-1">
                            Clearwater, FL
                        </div>
                    </div>
                    <div class="w-8 sm:w-12 h-[1px] bg-dms-green"></div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
// Scroll reveal functionality
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".will-animate").forEach((el) => observer.observe(el));
});
</script>

<?php get_footer(); ?>
