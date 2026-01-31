<?php

$spacingClass = $attributes['isHero'] ? 'section-pt' : 'section-spacing not-hero';
?>

<section class="front-page-hero <?php echo $spacingClass; ?>">
	<div class="hero-content">
		<?php echo $content; ?>
	</div>

</section>