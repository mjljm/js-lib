/**
 * Black JsANSI code for console printing
 */
export const BLACK = '\x1b[30m';
/**
 * Red JsANSI code for console printing
 */
export const RED = '\x1b[31m';
/**
 * Green JsANSI code for console printing
 */
export const GREEN = '\x1b[32m';
/**
 * Yellow JsANSI code for console printing
 */
export const YELLOW = '\x1b[33m';
/**
 * Blue JsANSI code for console printing
 */
export const BLUE = '\x1b[34m';
/**
 * Magenta JsANSI code for console printing
 */
export const MAGENTA = '\x1b[35m';
/**
 * Cyan JsANSI code for console printing
 */
export const CYAN = '\x1b[36m';
/**
 * White JsANSI code for console printing
 */
export const WHITE = '\x1b[37m';
/**
 * Gray JsANSI code for console printing
 */
export const GRAY = '\x1b[90m';
/**
 * Reset JsANSI code for console printing
 */
export const RESET = '\x1b[0m';
/**
 * Bright JsANSI code for console printing
 */
export const BRIGHT = '\x1b[1m';
/**
 * Dim JsANSI code for console printing
 */
export const DIM = '\x1b[2m';
/**
 * Underscore JsANSI code for console printing
 */
export const UNDERSCORE = '\x1b[4m';
/**
 * Blink JsANSI code for console printing
 */
export const BLINK = '\x1b[5m';
/**
 * Reverse JsANSI code for console printing
 */
export const REVERSE = '\x1b[7m';
/**
 * Hidden JsANSI code for console printing
 */
export const HIDDEN = '\x1b[8m';

/**
 * Returns string in black using JsANSI codes
 * @param s The string to transform
 */
export const black = (s: string) => BLACK + s + RESET;
/**
 * Returns string in red using JsANSI codes
 * @param s The string to transform
 */
export const red = (s: string) => RED + s + RESET;
/**
 * Returns string in green using JsANSI codes
 * @param s The string to transform
 */
export const green = (s: string) => GREEN + s + RESET;
/**
 * Returns string in yellow using JsANSI codes
 * @param s The string to transform
 */
export const yellow = (s: string) => YELLOW + s + RESET;
/**
 * Returns string in blue using JsANSI codes
 * @param s The string to transform
 */
export const blue = (s: string) => BLUE + s + RESET;
/**
 * Returns string in magenta using JsANSI codes
 * @param s The string to transform
 */
export const magenta = (s: string) => MAGENTA + s + RESET;
/**
 * Returns string in cyan using JsANSI codes
 * @param s The string to transform
 */
export const cyan = (s: string) => CYAN + s + RESET;
/**
 * Returns string in white using JsANSI codes
 * @param s The string to transform
 */
export const white = (s: string) => WHITE + s + RESET;
/**
 * Returns string in gray using JsANSI codes
 * @param s The string to transform
 */
export const gray = (s: string) => GRAY + s + RESET;
/**
 * Returns string in bright using JsANSI codes
 * @param s The string to transform
 */
export const bright = (s: string) => BRIGHT + s + RESET;
/**
 * Returns string in dim using JsANSI codes
 * @param s The string to transform
 */
export const dim = (s: string) => DIM + s + RESET;
/**
 * Returns string in underscore using JsANSI codes
 * @param s The string to transform
 */
export const underscore = (s: string) => UNDERSCORE + s + RESET;
/**
 * Returns string in blink using JsANSI codes
 * @param s The string to transform
 */
export const blink = (s: string) => BLINK + s + RESET;
/**
 * Returns string in reverse using JsANSI codes
 * @param s The string to transform
 */
export const reverse = (s: string) => REVERSE + s + RESET;
/**
 * Returns string in hidden using JsANSI codes
 * @param s The string to transform
 */
export const hidden = (s: string) => HIDDEN + s + RESET;
