<div class="main-footer">
	<div class="main-footer-inner">
<div class="footer-col-1">
		<a class="footer-logo" href="http://dentish.local/">
			<img src="http://dentish.local/wp-content/uploads/2025/12/Dentish-icon.svg" alt="Dentish">
			<span>Dentish</span>
		</a>

		<p>Enhance Your Quality of Life Through a
			Healthy Smile With Us.</p>

		<div class="footer-socials">
			<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
			<a href="#"><i class="fa-brands fa-instagram"></i></a>
			<a href="#"><i class="fa-brands fa-x-twitter"></i></a>
			<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
		</div>
	</div>

	<div class="footer-col-2">
		<h4>Menus</h4>
		<?php
		wp_nav_menu(array(
			'theme_location' => 'footer',
			'menu_class' => 'footer-menu',
			'fallback_cb' => false,
		));
		?>
	</div>

	<div class="footer-col-3">
		<h4>Working hours</h4>
		<div class="working-hours">
			<div class="day">
				<span>Monday - Friday</span>
				<span>09:00 - 18:00 PM</span>
			</div>
			<div class="day">
				<span>Saturday</span>
				<span>09:00 - 12:00 PM</span>
			</div>
			<div class="day">
				<span>Sunday</span>
				<span>Closed</span>
			</div>
		</div>

	</div>

	<div class="footer-col-4">
		<h4>Contact</h4>
		<a class="primary-btn" href=""><i class="fa-solid fa-phone"></i> +62 894 3292 9555</a>
		<a class="secondary-btn" href="">Book an appointment now</a>
	</div>

	</div>
	
	<p class="footer-copyright">&copy; All rights reserved. Dentish <?php echo date('Y'); ?></p>



	<?php wp_footer(); ?>

	</body>

	</html>