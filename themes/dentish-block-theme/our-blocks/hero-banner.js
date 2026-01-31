wp.blocks.registerBlockType( 'dentish/hero-banner', {
	title: 'Hero Banner',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	return (
		<section className="front-page-hero section-pt">
			<div className="hero-content">
				<h1>
					Enhance Your Quality of Life Through a Healthy Smile With
					Us.
				</h1>
				<p>
					We are committed to providing the best dental care that
					prioritizes your oral health. With our experience and
					dedication, we are always ready to assist you in achieving a
					healthy smile and improving your quality of life.
				</p>
				<a className="secondary-btn" href="#">
					Book an Appointment
				</a>
				<img
					src="http://dentish.local/wp-content/uploads/2025/12/dentist-hero-e1766482745657.png"
					alt="Dentish Hero Image"
				/>
			</div>
		</section>
	);
}

function SaveComponent() {
	return <p>This is from our block.</p>;
}
