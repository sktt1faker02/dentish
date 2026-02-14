<?php

/**
 * Two Column Block Render
 */

$label    = $attributes['label'] ?? '';
$image_id = $attributes['imageId'] ?? 0;
$reverse  = !empty($attributes['reverse']);



// Section classes
$section_classes = 'two-column-layout section-spacing';
if (! $reverse) {
    $section_classes .= ' bg-light-green';
}

// Container classes
$container_classes = 'section-container';
if ($reverse) {
    $container_classes .= ' reverse-columns';
}
?>



<section class="<?php echo esc_attr($section_classes); ?>">
    <div class="desktop-container <?php echo esc_attr($container_classes); ?>">

        <div class="two-column-content">
            <?php if ($label) : ?>
                <span class="two-column-label">
                    <?php echo esc_html($label); ?>
                </span>
            <?php endif; ?>

            <?php echo $content; ?>
        </div>

        <div class="two-column-image">
            <?php
            if ($image_id) {
                echo wp_get_attachment_image($image_id, 'full');
            }
            ?>
        </div>

    </div>
</section>