<?php
/**
 * Plugin Name:       GatherPress
 * Plugin URI:        https://gatherpress.org/
 * Description:       Powering Communities with WordPress.
 * Author:            The GatherPress Community
 * Author URI:        https://gatherpress.org/
 * Version:           0.27.0
 * Requires PHP:      7.4
 * Requires at least: 6.4
 * Text Domain:       gatherpress
 * Domain Path:       /languages
 * License:           GNU General Public License v2.0 or later
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://gatherpress.org/
 *
 * This file serves as the main plugin file for GatherPress. It defines the plugin's basic information,
 * constants, and initializes the plugin.
 *
 * @package GatherPress
 */

// Constants.
define( 'GATHERPRESS_CORE_FILE', __FILE__ );
define( 'GATHERPRESS_CORE_PATH', __DIR__ );
define( 'GATHERPRESS_CORE_URL', plugin_dir_url( __FILE__ ) );
define( 'GATHERPRESS_DIR_NAME', dirname( plugin_basename( __FILE__ ) ) );
define( 'GATHERPRESS_REQUIRES_PHP', current( get_file_data( __FILE__, array( 'Requires PHP' ), 'plugin' ) ) );
define( 'GATHERPRESS_REST_NAMESPACE', 'gatherpress/v1' );
define( 'GATHERPRESS_VERSION', current( get_file_data( __FILE__, array( 'Version' ), 'plugin' ) ) );

// Check if the minimum plugin requirements are not met and prevent further execution if necessary.
if ( ! require_once GATHERPRESS_CORE_PATH . '/includes/core/requirements-check.php' ) {
	return;
}

// Include and register the autoloader class for automatic loading of plugin classes.
require_once GATHERPRESS_CORE_PATH . '/includes/core/classes/class-autoloader.php';
GatherPress\Core\Autoloader::register();

// Initialize setups.
GatherPress\Core\Setup::get_instance();
