// LA Marathon Countdown Widget by Christian Hernandez 
// for use in scriptable 
// based on: https://github.com/ferraridavide/scriptable/blob/main/days-left.js

// STEP 1: Enter your event name (example: "LA Marathon", "5K", "Half-Marathon")
const EVENT_NAME = "LA Marathon";

// STEP 2: Set your start and end dates (Format: YYYY, MM-1, DD)
// IMPORTANT: Months are 0-indexed, meaning January=0, February=1, etc.
// Example: December 25, 2024 would be (2024, 11, 25)
const START_DATE = new Date(2025, 7, 23);  // September 26, 2024
const END_DATE = new Date(2026, 3, 8);    // July 15, 2025

// STEP 3: Add your background image URL
// Replace with your own image URL or leave blank for no image
// To use a transparent background, use the transparent script, then upload it to the internet somewhere and link it here
const BG_IMAGE_URL = "imgur.com/meow";

// STEP 4: Customize the appearance (optional)
// Background overlay color and opacity
const BG_COLOR = "#406260";       // Overlay color in hex format
const BG_OVERLAY_OPACITY = 0.5;   // Overlay opacity (0-1)

// Color settings for dots
const COLOR_FILLED = new Color("#a6a60fff");         // Color for completed days
const COLOR_UNFILLED = new Color("#ffffff", 0.4);  // Color for remaining days

// STEP 5: Layout settings
// These are optimized for iPhone 15 Pro. You may need to adjust for different devices.
// Increase values for larger screens, decrease for smaller screens.
const PADDING = 8;           // Space around the edges of the widget
const CIRCLE_SIZE = 6;       // Size of the progress dots
const CIRCLE_SPACING = 4;    // Space between dots
const TEXT_SPACING = 8;      // Space between dot grid and text
const DOT_SHIFT_LEFT = 2;
const YEAR_OFFSET = DOT_SHIFT_LEFT - 2;
const DAYS_LEFT_OFFSET = 0;

// ===================================================
// ADVANCED CONFIGURATION
// ===================================================

const TODAY = new Date();
const MS_PER_DAY = 86400000;

const DAYS_TOTAL = Math.round((END_DATE-START_DATE) / MS_PER_DAY ) +1;
const DAYS_SINCE_START = Math.max(0, Math.round((TODAY - START_DATE) / MS_PER_DAY));
const DAYS_UNTIL_END = Math.max(0,Math.round((END_DATE - TODAY) / MS_PER_DAY));
