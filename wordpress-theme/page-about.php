<?php
/**
 * Template Name: About Page
 * Template Post Type: page
 */

get_header();
?>

<div class="overflow-x-hidden">
    <!-- Minimalist Hero -->
    <section class="bg-white pt-40 pb-20 border-b border-gray-100">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl">
                <span class="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">Clearwater, FL Office</span>
                <h1 class="text-3xl md:text-8xl font-black text-dms-gray mb-8 leading-[0.9] uppercase tracking-tighter animate-fade-in-up">
                    Understanding Your<br/>
                    <span class="text-dms-green">Business</span> Goals.
                </h1>
                <p class="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl animate-fade-in-up" style="animation-delay: 0.2s;">
                    We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                </p>
            </div>
        </div>
    </section>

    <!-- The Narrative Section -->
    <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center gap-20">
                <div class="md:w-1/2 will-animate">
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                            alt="Collaboration in Clearwater"
                            class="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-dms-blue rounded-full p-8 text-white flex items-center justify-center text-center font-black text-xs uppercase tracking-widest hidden lg:flex shadow-2xl">
                            Trust the Data<br/>FLORIDA
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 will-animate" style="animation-delay: 0.2s;">
                    <h2 class="text-4xl font-black text-dms-gray mb-8 uppercase tracking-tighter">Our Story</h2>
                    <div class="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                        <p>
                            At Trust the Data in Clearwater, FL, we are a marketing and SEO company that works closely with our clients to understand their business and help them set their company apart from the competition.
                        </p>
                        <p>
                            We proudly provide all the digital marketing services you need to ensure you get the best results for your business. The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <?php
    $team_members = function_exists('get_field') ? get_field('team_members', 'option') : null;
    if (!$team_members || !is_array($team_members)) {
        // Fallback team members
        $team_members = [
            ['name' => 'Amal Maher', 'role' => 'Founder & CEO', 'image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'],
            ['name' => 'Ahmed Hossam', 'role' => 'Chief Technology Officer', 'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'],
            ['name' => 'Amira Hassan', 'role' => 'Senior Software Engineer', 'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'],
            ['name' => 'Mohamed Hussain', 'role' => 'Lead Data Strategist', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800']
        ];
    }

    if (!empty($team_members)) :
    ?>
    <section class="py-32 bg-dms-light-gray">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto mb-20 will-animate">
                <h2 class="text-4xl md:text-6xl font-black text-dms-gray mb-6 uppercase tracking-tighter">Meet Our <span class="text-dms-green">Team</span></h2>
                <div class="w-24 h-1 bg-dms-green mx-auto mb-8"></div>
                <p class="text-gray-600 font-medium text-lg">Experts dedicated to your digital success.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <?php foreach ($team_members as $index => $member) :
                    if (!is_array($member)) continue;

                    $member_name = isset($member['name']) ? esc_html($member['name']) : '';
                    $member_role = isset($member['role']) ? esc_html($member['role']) : '';
                    $member_image = '';

                    if (isset($member['image']) && is_array($member['image']) && isset($member['image']['url'])) {
                        $member_image = esc_url($member['image']['url']);
                    } elseif (isset($member['imageUrl'])) {
                        $member_image = esc_url($member['imageUrl']);
                    } else {
                        $member_image = 'https://via.placeholder.com/400x500?text=No+Image';
                    }
                ?>
                    <div class="group will-animate" style="animation-delay: <?php echo esc_attr(0.1 * $index); ?>s;">
                        <div class="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-dms-light-gray">
                            <img
                                src="<?php echo $member_image; ?>"
                                alt="<?php echo $member_name; ?>"
                                class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-dms-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div class="w-8 h-[2px] bg-dms-green mb-2"></div>
                                    <p class="text-white text-xs uppercase tracking-[0.3em] font-bold">Expert Strategist</p>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-xl font-black text-dms-gray uppercase tracking-tighter group-hover:text-dms-green transition-colors"><?php echo $member_name; ?></h3>
                        <p class="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1"><?php echo $member_role; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

    <!-- Core Values Section -->
    <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto mb-20 will-animate">
                <h2 class="text-4xl md:text-6xl font-black text-dms-gray mb-6 uppercase tracking-tighter">Our <span class="text-dms-blue">Approach</span></h2>
                <div class="w-24 h-1 bg-dms-green mx-auto mb-8"></div>
                <p class="text-gray-600 font-medium text-lg">Setting your business apart through data-driven precision.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 will-animate border border-gray-100 group" style="animation-delay: 0.2s;">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-dms-light-gray rounded-xl flex items-center justify-center text-dms-green group-hover:bg-dms-green group-hover:text-white transition-colors duration-500">
                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-6 h-6']); ?>
                        </div>
                        <h3 class="text-xl font-black text-dms-gray ml-4 uppercase tracking-tighter">Close Collaboration</h3>
                    </div>
                    <p class="text-gray-500 leading-relaxed font-medium">We work closely with our clients to understand their business at its core.</p>
                </div>

                <div class="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 will-animate border border-gray-100 group" style="animation-delay: 0.3s;">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-dms-light-gray rounded-xl flex items-center justify-center text-dms-green group-hover:bg-dms-green group-hover:text-white transition-colors duration-500">
                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-6 h-6']); ?>
                        </div>
                        <h3 class="text-xl font-black text-dms-gray ml-4 uppercase tracking-tighter">Strategic Elevation</h3>
                    </div>
                    <p class="text-gray-500 leading-relaxed font-medium">Elevating your business above the highly competitive internet landscape.</p>
                </div>

                <div class="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 will-animate border border-gray-100 group" style="animation-delay: 0.4s;">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-dms-light-gray rounded-xl flex items-center justify-center text-dms-green group-hover:bg-dms-green group-hover:text-white transition-colors duration-500">
                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-6 h-6']); ?>
                        </div>
                        <h3 class="text-xl font-black text-dms-gray ml-4 uppercase tracking-tighter">Proven Results</h3>
                    </div>
                    <p class="text-gray-500 leading-relaxed font-medium">Ensuring you get the best results through comprehensive digital marketing.</p>
                </div>

                <div class="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 will-animate border border-gray-100 group" style="animation-delay: 0.5s;">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-dms-light-gray rounded-xl flex items-center justify-center text-dms-green group-hover:bg-dms-green group-hover:text-white transition-colors duration-500">
                            <?php get_template_part('template-parts/logo', null, ['className' => 'w-6 h-6']); ?>
                        </div>
                        <h3 class="text-xl font-black text-dms-gray ml-4 uppercase tracking-tighter">Competitive Edge</h3>
                    </div>
                    <p class="text-gray-500 leading-relaxed font-medium">Helping you set your company apart from the competition strategically.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Strip -->
    <section class="py-20 bg-dms-blue text-white overflow-hidden relative">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter">Ready to outrank the rest?</h2>
            <a href="<?php echo home_url('/contact'); ?>" class="bg-white text-dms-blue font-black py-6 px-12 rounded-full hover:bg-dms-green hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-2xl">
                Start Digital Growth
            </a>
        </div>
    </section>
</div>

<?php get_footer(); ?>
