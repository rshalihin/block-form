<?php
/**
 * Plugin Name:       Mrs Form
 * Description:       A simple Gutenberg form widget.
 * Requires at least: 6.1
 * Requires PHP:      7.3
 * Version:           0.1.0
 * Author:            Md. Readush Shalihin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mrs-form
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_mrs_form_block_init() {
	register_block_type( __DIR__ . '/build/block/mrs-form' );
	register_block_type( __DIR__ . '/build/block/mrs-button' );
}
add_action( 'init', 'create_block_mrs_form_block_init' );
