<?php

$spacingClass = $attributes['isHero'] ? 'section-pt home-hero' : 'section-spacing not-hero';
$isHeroBg = $attributes['isHero'] ? "home-hero-bg" : "not-hero-bg";
?>


<div class="<?php echo $isHeroBg; ?>">
	<section class="front-page-hero desktop-container  <?php echo $spacingClass; ?>">
		<div class="hero-content">
			<?php echo $content; ?>
		</div>
	</section>
</div>