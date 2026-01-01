<?php
/**
 * Template Name: Contact Page
 * Template Post Type: page
 */

get_header();
?>

<div class="bg-white min-h-screen pt-40 pb-20">
    <!-- Header Section -->
    <div class="container mx-auto px-6 mb-20 text-center will-animate">
        <span class="text-dms-green font-bold text-xs uppercase tracking-[0.6em] mb-6 block">Ready to Scale?</span>
        <h1 class="text-5xl md:text-8xl font-black text-dms-gray uppercase tracking-tighter leading-none">Let's Talk <span class="text-dms-blue">Growth</span></h1>
    </div>

    <div class="container mx-auto px-6">
        <div class="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50 flex flex-col lg:flex-row overflow-hidden">
            <!-- Sidebar: Strategic Info -->
            <div class="lg:w-1/3 bg-dms-blue text-white p-12 lg:p-20 relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-dms-green/20 blur-3xl rounded-full"></div>
                <h2 class="text-4xl font-black mb-12 uppercase tracking-tighter">Strategic HQ</h2>

                <div class="space-y-12">
                    <div>
                        <h3 class="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">Direct Email</h3>
                        <a href="mailto:info@trustthedata.net" class="text-2xl font-light hover:text-dms-green transition-colors">info@trustthedata.net</a>
                    </div>
                    <div class="relative">
                        <h3 class="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">Clearwater Line</h3>
                        <a
                            href="tel:7272184871"
                            class="text-2xl font-light hover:text-dms-green transition-colors block"
                        >
                            (727) 218-4871
                        </a>
                        <p class="mt-2 text-[10px] text-white/40 uppercase tracking-widest hidden md:block">Call for consultation</p>
                    </div>
                    <div>
                        <h3 class="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">Agency Address</h3>
                        <p class="text-xl font-light text-white/70 leading-relaxed">Clearwater,<br/>Florida,<br/>United States</p>
                    </div>
                </div>

                <div class="mt-20 pt-12 border-t border-white/10">
                    <p class="text-xs text-white/50 uppercase tracking-widest leading-relaxed font-bold">
                        We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                    </p>
                </div>
            </div>

            <!-- Main: Intake Form -->
            <div class="lg:w-2/3 p-12 lg:p-20 bg-white">
                <?php dms_show_contact_success(); ?>
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="space-y-10">
                    <?php wp_nonce_field('dms_contact_form'); ?>
                    <input type="hidden" name="action" value="dms_contact_form">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Full Name</label>
                            <input type="text" name="full_name" placeholder="Your Name" required class="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-black uppercase tracking-tight"/>
                        </div>
                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Organization</label>
                            <input type="text" name="organization" placeholder="Enter Company Name" required class="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-black uppercase tracking-tight"/>
                        </div>
                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Email Address</label>
                            <input type="email" name="email" placeholder="email@company.com" required class="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-black uppercase tracking-tight"/>
                        </div>
                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Phone Number</label>
                            <input type="tel" name="phone" placeholder="(727) 000-0000" required class="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-black uppercase tracking-tight"/>
                        </div>
                        <div class="space-y-2 md:col-span-2">
                            <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Project Budget</label>
                            <select name="budget" class="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-black uppercase tracking-tight appearance-none cursor-pointer">
                                <option value="">Select Range</option>
                                <option>$2k - $5k</option>
                                <option>$5k - $15k</option>
                                <option>$15k+</option>
                            </select>
                        </div>
                    </div>

                    <div class="pt-6">
                        <label class="block text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Interest Spectrum</label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <?php
                            $services = ['SEARCH ENGINE OPTIMIZATION', 'SOCIAL MEDIA MARKETING', 'CONTENT MARKETING', 'WEBSITE DESIGN', 'PAY PER CLICK', 'Other'];
                            foreach ($services as $index => $service) :
                            ?>
                                <label class="flex items-center space-x-3 cursor-pointer group">
                                    <div class="relative h-6 w-6">
                                        <input type="checkbox" name="services[]" value="<?php echo esc_attr($service); ?>" class="absolute opacity-0 w-full h-full peer"/>
                                        <span class="w-6 h-6 inline-block border-2 border-gray-200 rounded-lg transition-all duration-300 group-hover:border-dms-green peer-checked:bg-dms-green peer-checked:border-dms-green"></span>
                                        <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-500 font-bold group-hover:text-dms-gray transition-colors uppercase tracking-tight text-xs"><?php echo esc_html($service); ?></span>
                                </label>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="space-y-4 pt-6">
                        <label class="text-[10px] uppercase tracking-widest font-black text-gray-400">Business Objectives</label>
                        <textarea name="objectives" placeholder="Tell us about your project goals..." rows="4" class="w-full p-6 bg-dms-light-gray rounded-2xl border-2 border-transparent focus:border-dms-green transition-all duration-300 focus:outline-none text-lg font-medium"></textarea>
                    </div>

                    <div class="pt-6">
                        <button type="submit" class="w-full bg-dms-green text-white font-black py-6 px-12 rounded-full transition-all duration-500 transform hover:scale-[1.02] shadow-2xl uppercase tracking-[0.3em] text-sm hover:bg-dms-green-light">
                            Initialize Connection
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>
