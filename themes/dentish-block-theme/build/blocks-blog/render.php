<div class="bg-light-green blog-container">


    <div class="blog-grid section-spacing-sides">

        <?php
        $homeBlogGrid = new WP_Query(array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'orderby' => 'date',
        ));


        ?>

        <?php while ($homeBlogGrid->have_posts()): $homeBlogGrid->the_post(); ?>

            <?php
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
        wp_reset_postdata();
        ?>
    </div>

    <?php if (is_page(29) && $homeBlogGrid->max_num_pages > 1): ?>

        <button id="load-more" data-page="1" class="primary-btn blog-see-more">See More</button>
    <?php endif; ?>
</div>