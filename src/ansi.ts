/**
 * Black ANSI code for console printing
 */
export const BLACK = '\x1b[30m';
/**
 * Red ANSI code for console printing
 */
export const RED = '\x1b[31m';
/**
 * Green ANSI code for console printing
 */
export const GREEN = '\x1b[32m';
/**
 * Yellow ANSI code for console printing
 */
export const YELLOW = '\x1b[33m';
/**
 * Blue ANSI code for console printing
 */
export const BLUE = '\x1b[34m';
/**
 * Magenta ANSI code for console printing
 */
export const MAGENTA = '\x1b[35m';
/**
 * Cyan ANSI code for console printing
 */
export const CYAN = '\x1b[36m';
/**
 * White ANSI code for console printing
 */
export const WHITE = '\x1b[37m';
/**
 * Gray ANSI code for console printing
 */
export const GRAY = '\x1b[90m';
/**
 * Reset ANSI code for console printing
 */
export const RESET = '\x1b[0m';
/**
 * Bright ANSI code for console printing
 */
export const BRIGHT = '\x1b[1m';
/**
 * Dim ANSI code for console printing
 */
export const DIM = '\x1b[2m';
/**
 * Underscore ANSI code for console printing
 */
export const UNDERSCORE = '\x1b[4m';
/**
 * Blink ANSI code for console printing
 */
export const BLINK = '\x1b[5m';
/**
 * Reverse ANSI code for console printing
 */
export const REVERSE = '\x1b[7m';
/**
 * Hidden ANSI code for console printing
 */
export const HIDDEN = '\x1b[8m';

/**
 * Returns string in black using ANSI codes
 * @param s The string to transform
 */
export const black = (s: string) => BLACK + s + RESET;
/**
 * Returns string in red using ANSI codes
 * @param s The string to transform
 */
export const red = (s: string) => RED + s + RESET;
/**
 * Returns string in green using ANSI codes
 * @param s The string to transform
 */
export const green = (s: string) => GREEN + s + RESET;
/**
 * Returns string in yellow using ANSI codes
 * @param s The string to transform
 */
export const yellow = (s: string) => YELLOW + s + RESET;
/**
 * Returns string in blue using ANSI codes
 * @param s The string to transform
 */
export const blue = (s: string) => BLUE + s + RESET;
/**
 * Returns string in magenta using ANSI codes
 * @param s The string to transform
 */
export const magenta = (s: string) => MAGENTA + s + RESET;
/**
 * Returns string in cyan using ANSI codes
 * @param s The string to transform
 */
export const cyan = (s: string) => CYAN + s + RESET;
/**
 * Returns string in white using ANSI codes
 * @param s The string to transform
 */
export const white = (s: string) => WHITE + s + RESET;
/**
 * Returns string in gray using ANSI codes
 * @param s The string to transform
 */
export const gray = (s: string) => GRAY + s + RESET;
/**
 * Returns string in bright using ANSI codes
 * @param s The string to transform
 */
export const bright = (s: string) => BRIGHT + s + RESET;
/**
 * Returns string in dim using ANSI codes
 * @param s The string to transform
 */
export const dim = (s: string) => DIM + s + RESET;
/**
 * Returns string in underscore using ANSI codes
 * @param s The string to transform
 */
export const underscore = (s: string) => UNDERSCORE + s + RESET;
/**
 * Returns string in blink using ANSI codes
 * @param s The string to transform
 */
export const blink = (s: string) => BLINK + s + RESET;
/**
 * Returns string in reverse using ANSI codes
 * @param s The string to transform
 */
export const reverse = (s: string) => REVERSE + s + RESET;
/**
 * Returns string in hidden using ANSI codes
 * @param s The string to transform
 */
export const hidden = (s: string) => HIDDEN + s + RESET;
