<div class="header-block">
	<header class="main-header desktop-container">
		<a href="<?php echo esc_url(home_url('/')); ?>">
			<img src="http://dentish.local/wp-content/uploads/2025/12/Dentish-icon.svg" alt="Dentish">
			<span>Dentish</span>
		</a>

		<button class="mobile-nav"><i class="fa-solid fa-bars"></i></button>

		<nav class="main-nav">
			<?php
			wp_nav_menu(array(
				'theme_location' => 'primary',
				'menu_class' => 'main-menu',
				'fallback_cb' => false,

			));

			?>

			<a class="navigation-logo" href="http://dentish.local/">
				<img src="http://dentish.local/wp-content/uploads/2025/12/Dentish-icon.svg" alt="Dentish">
				<span>Dentish</span>
			</a>
		</nav>
		<div class="nav-overlay">

		</div>


	</header>
</div>