/**
 * Main application entry point.
 */
import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
import fileDrop from './app.js';

// Make Alpine available as a global variable (optional, but useful for debugging)
window.Alpine = Alpine;

// Register our fileDrop component with Alpine
Alpine.data('fileDrop', fileDrop);

// Start Alpine
Alpine.start();
