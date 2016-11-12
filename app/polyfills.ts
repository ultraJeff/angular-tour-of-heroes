// Import is ES6 'requre' except it's immediate
import 'core-js/es6';
import 'core-js/es7/reflect';

// Require is dynamically loaded by Webpack after it builds its dependency map
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
	// Production
} else {
	// Development
	Error.stackTraceLimit = Infinity;
	require('zone.js/dist/long-stack-trace-zone');
}
