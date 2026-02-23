<?php


function dentish_custom_rest()
{
    register_rest_field('post', 'authorName', array(
        'get_callback' => function () {
            return get_the_author();
        }
    ));
}

add_action('rest_api_init', 'dentish_custom_rest');



add_filter('rest_post_query', function ($args, $request) {

    if (isset($request['title_only']) && $request['title_only']) {
        $args['search_columns'] = ['post_title'];
    }

    return $args;
}, 10, 2);




function dentish_files()
{
    
    // wp_enqueue_style('dentish_main_styles', get_stylesheet_uri());
    wp_enqueue_style('roboto-fonts', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    wp_enqueue_style('dentish_main_styles', get_theme_file_uri('/css/main.css'));

    // Swiper.js for testimonials carousel
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11.0.0');
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11.0.0', true);

    // Custom js
    wp_enqueue_script('dentish_custom_js', get_theme_file_uri('/src/js/custom.js'), array('jquery'), false, true);
    wp_enqueue_script('dentish_search_js', get_theme_file_uri('/src/js/search.js'), array('jquery'), false, true);

    wp_localize_script('dentish_search_js', 'dentish_data', array(
        'root_url' => get_site_url(),

    ));
}

add_action('wp_enqueue_scripts', 'dentish_files');




function dentish_theme_setup()
{
    // Enable menu support

    add_theme_support('menus');

    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dentish'),
        'footer' => __('Footer Menu', 'dentish'),
    ));
    add_theme_support('editor-styles');
    add_editor_style(array('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', 'css/main.css'));
    add_image_size('featured-size', 300, 200, true);
}

add_action('after_setup_theme', 'dentish_theme_setup');


function myblocks_myheader_block_init()
{
    register_block_type(__DIR__ . '/build/myheader');
    register_block_type(__DIR__ . '/build/myfooter');
    register_block_type(__DIR__ . '/build/hero-banner');
    register_block_type(__DIR__ . '/build/generic-button');
    register_block_type(__DIR__ . '/build/generic-heading');
    register_block_type(__DIR__ . '/build/generic-image');
    register_block_type(__DIR__ . '/build/two-column-layout');
    register_block_type(__DIR__ . '/build/our-services');
    register_block_type(__DIR__ . '/build/service-item');
    register_block_type(__DIR__ . '/build/blocks-blog');
    register_block_type(__DIR__ . '/build/generic-intro');
    register_block_type(__DIR__ . '/build/blocks-pricing');
    register_block_type(__DIR__ . '/build/pricing-card');
    register_block_type(__DIR__ . '/build/testimonials');
    register_block_type(__DIR__ . '/build/testimonial-card');
    register_block_type(__DIR__ . '/build/generic-content');
}
add_action('init', 'myblocks_myheader_block_init');


// 1. Disable the generation of all extra image sizes
add_filter('intermediate_image_sizes_advanced', 'remove_default_image_sizes');
function remove_default_image_sizes($sizes)
{
    // Core default sizes
    unset($sizes['thumbnail']);
    unset($sizes['medium']);
    unset($sizes['medium_large']);
    unset($sizes['large']);

    // High-res / Retina sizes (1536x1536 and 2048x2048)
    unset($sizes['1536x1536']);
    unset($sizes['2048x2048']);

    return $sizes;
}

// 2. Disable the "-scaled" image generation (Big Image Threshold)
add_filter('big_image_size_threshold', '__return_false');

// 3. Stop potential 768px (medium_large) generation
update_option('medium_large_size_w', 0);

function my_scripts()
{
    wp_localize_script('dentish_custom_js', 'blog_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'my_scripts');



function load_more_posts()
{

    $paged = $_POST['page'];

    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'paged' => $paged
    );

    $query = new WP_Query($args);

    $html = '';

    if ($query->have_posts()) :
        ob_start();
        while ($query->have_posts()): $query->the_post();
            $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'featured-size');
?>
            <article class="blog-item">
                <a href="<?php echo get_permalink(); ?>">
                    <img src="<?php echo esc_url($featured_image_url); ?>" alt="featured image">
                </a>

                <span class="post-date"><?php echo get_the_date('M d, Y'); ?></span>

                <h3> <a href="<?php echo get_permalink(); ?>"><?php echo esc_html(get_the_title()); ?> </a></h3>

                <a class="arrow-btn" href="<?php echo get_permalink(); ?>">
                    Read more
                </a>

            </article>
<?php endwhile;
        $html = ob_get_clean();
    endif;

    wp_send_json(array(
        'html' => $html,
        'has_more' => $paged < $query->max_num_pages
    ));
}

add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');
