<?php
// This file is generated. Do not modify it manually.
return array(
	'blocks-blog' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/blocks-blog',
		'version' => '0.1.0',
		'title' => 'Blocks Blog',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'blocks-pricing' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/blocks-pricing',
		'version' => '0.1.0',
		'title' => 'Pricing Block',
		'editorScript' => 'file:./index.js'
	),
	'generic-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/generic-button',
		'version' => '0.1.0',
		'title' => 'Generic Button',
		'attributes' => array(
			'text' => array(
				'type' => 'string'
			),
			'size' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'linkObject' => array(
				'type' => 'object'
			),
			'colorName' => array(
				'type' => 'string',
				'default' => 'primary'
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'generic-content' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/generic-content',
		'title' => 'Generic Content',
		'editorScript' => 'file:./index.js'
	),
	'generic-heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/generic-heading',
		'version' => '0.1.0',
		'title' => 'Generic Heading',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Your Heading Here'
			),
			'size' => array(
				'type' => 'string',
				'default' => 'large'
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'generic-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/generic-image',
		'version' => '0.1.0',
		'title' => 'Generic Image',
		'icon' => 'format-image',
		'description' => 'A simple generic image block',
		'attributes' => array(
			'desktopId' => array(
				'type' => 'number'
			),
			'desktopUrl' => array(
				'type' => 'string'
			),
			'mobileId' => array(
				'type' => 'number'
			),
			'mobileUrl' => array(
				'type' => 'string'
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'generic-intro' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/generic-intro',
		'version' => '0.1.0',
		'title' => 'Generic Intro',
		'attributes' => array(
			'colorName' => array(
				'type' => 'string',
				'default' => 'primary'
			),
			'addSpaceTop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'addSpaceBottom' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'hero-banner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/hero-banner',
		'version' => '0.1.0',
		'title' => 'Hero Banner',
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'isHero' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'render' => 'file:./render.php'
	),
	'myfooter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/myfooter',
		'title' => 'Global Footer',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'myheader' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/myheader',
		'title' => 'Global Header',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'our-services' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/our-services',
		'version' => '0.1.0',
		'title' => 'Our Services',
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => ''
			),
			'introTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'introDescription' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'pricing-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/pricing-card',
		'version' => '0.1.0',
		'title' => 'Pricing Card',
		'attributes' => array(
			'priceLabel' => array(
				'type' => 'string',
				'default' => '$45,00'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Preventive and Dental Maintenance Services'
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'service-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/service-item',
		'version' => '0.1.0',
		'title' => 'Service Item',
		'editorScript' => 'file:./index.js',
		'attributes' => array(
			'iconId' => array(
				'type' => 'number'
			),
			'iconUrl' => array(
				'type' => 'string',
				'default' => 'http://dentish.local/wp-content/uploads/2025/12/tooth-gum.svg'
			)
		)
	),
	'testimonial-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/testimonial-card',
		'version' => '0.1.0',
		'title' => 'Testimonial Card',
		'category' => 'widgets',
		'icon' => 'admin-comments',
		'description' => 'A single testimonial card with quote, image, name and location',
		'parent' => array(
			'myblocks/testimonials'
		),
		'attributes' => array(
			'quote' => array(
				'type' => 'string',
				'default' => ''
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'location' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js'
	),
	'testimonials' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/testimonials',
		'version' => '0.1.0',
		'title' => 'Testimonials',
		'category' => 'widgets',
		'icon' => 'format-quote',
		'description' => 'A testimonial carousel block with cards',
		'attributes' => array(
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			)
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'viewScript' => 'file:./view.js'
	),
	'two-column-layout' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/two-column-layout',
		'version' => '0.1.0',
		'title' => 'Two Column Layout',
		'attributes' => array(
			'imageId' => array(
				'type' => 'number'
			),
			'imageUrl' => array(
				'type' => 'string'
			),
			'reverse' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	)
);
