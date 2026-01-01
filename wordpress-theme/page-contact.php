<?php
/* Template Name: Contact */
get_header();
?>

<main class="max-w-4xl mx-auto px-6 py-24">

    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    <p class="text-gray-600 mb-12">
        Tell us about your project and we’ll get back to you.
    </p>

    <?php
    if (isset($_POST['dms_submit'])) {

        $name  = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $msg   = sanitize_textarea_field($_POST['message']);

        wp_mail(
            get_option('admin_email'),
            'New Contact Message',
            "Name: $name\nEmail: $email\n\nMessage:\n$msg"
        );

        echo '<p class="bg-green-100 text-green-700 p-4 rounded mb-6">Message sent successfully.</p>';
    }
    ?>

    <form method="post" class="grid gap-6">
        <input required name="name" placeholder="Your name"
               class="border p-3 rounded w-full">

        <input required type="email" name="email" placeholder="Your email"
               class="border p-3 rounded w-full">

        <textarea required name="message" rows="5"
                  placeholder="Your message"
                  class="border p-3 rounded w-full"></textarea>

        <button name="dms_submit"
                class="bg-black text-white px-6 py-3 rounded w-fit">
            Send Message
        </button>
    </form>

</main>

<?php get_footer(); ?>
