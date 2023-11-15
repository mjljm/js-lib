/**
 * Converts camel name to khebab name.
 *
 * @param str - The string to convert.
 *
 */
export const kebabize = (str: string) =>
	str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

/**
 * Converts date in 'YYYY-MM-DD' format to 'YYYYMMDD' format.
 *
 * @param s - The string to convert.
 *
 */
export const isoToYyyymmdd = (s: string) => s.slice(0, 4) + s.slice(5, 7) + s.slice(8, 10);

/**
 * Converts date in 'YYYYMMDD' format 'YYYY-MM-DD' format.
 *
 * @param s - The string to convert.
 *
 */
export const yyyymmdToIso = (s: string) =>
	s.slice(0, 4) + '-' + s.slice(4, 6) + '-' + s.slice(6, 8);

/**
 * Extension oh Json stringify that supports bigints
 *
 * @param u The object to stringify.
 * @param bigIntMark A string that will be added at the end of the bigint to identify it upon parsing.
 *
 */
export const jsonStringifyWithBigint = (u: unknown, bigIntMark = 'n') =>
	JSON.stringify(u, (_, value) =>
		typeof value === 'bigint' ? value.toString() + bigIntMark : (value as unknown)
	);

/**
 * Extension oh Json parse that supports bigints
 *
 * @param u The string to parse.
 * @param bigIntMark A string that must be present at the end of each bigint.
 *
 */
export const jsonParseWithBigint = (u: string, bigIntMark = 'n') =>
	JSON.parse(u, (_, value) => {
		if (typeof value === 'string' && new RegExp(`^\\d+${bigIntMark}$`).test(value)) {
			return BigInt(value.substring(0, value.length - bigIntMark.length));
		}
		return value as unknown;
	}) as unknown;

/**
 * Adds a tab at the beginning of each new line in string using lineSep as line separator
 *
 * @param s The string to tabify
 *
 */
export const tabify = (s: string) => '\t' + s.replaceAll(/\n/g, '\n\t');

/**
 * Black ANSI code for console printing
 */
export const ANSI_BLACK = '\x1b[30m';
/**
 * Red ANSI code for console printing
 */
export const ANSI_RED = '\x1b[31m';
/**
 * Green ANSI code for console printing
 */
export const ANSI_GREEN = '\x1b[32m';
/**
 * Yellow ANSI code for console printing
 */
export const ANSI_YELLOW = '\x1b[33m';
/**
 * Blue ANSI code for console printing
 */
export const ANSI_BLUE = '\x1b[34m';
/**
 * Magenta ANSI code for console printing
 */
export const ANSI_MAGENTA = '\x1b[35m';
/**
 * Cyan ANSI code for console printing
 */
export const ANSI_CYAN = '\x1b[36m';
/**
 * White ANSI code for console printing
 */
export const ANSI_WHITE = '\x1b[37m';
/**
 * Gray ANSI code for console printing
 */
export const ANSI_GRAY = '\x1b[90m';
/**
 * Reset ANSI code for console printing
 */
export const ANSI_RESET = '\x1b[0m';
/**
 * Bright ANSI code for console printing
 */
export const ANSI_BRIGHT = '\x1b[1m';
/**
 * Dim ANSI code for console printing
 */
export const ANSI_DIM = '\x1b[2m';
/**
 * Underscore ANSI code for console printing
 */
export const ANSI_UNDERSCORE = '\x1b[4m';
/**
 * Blink ANSI code for console printing
 */
export const ANSI_BLINK = '\x1b[5m';
/**
 * Reverse ANSI code for console printing
 */
export const ANSI_REVERSE = '\x1b[7m';
/**
 * Hidden ANSI code for console printing
 */
export const ANSI_HIDDEN = '\x1b[8m';

/**
 * Returns string in black using ANSI codes
 * @param s The string to transform
 */
export const blackString = (s: string) => ANSI_BLACK + s + ANSI_RESET;
/**
 * Returns string in red using ANSI codes
 * @param s The string to transform
 */
export const redString = (s: string) => ANSI_RED + s + ANSI_RESET;
/**
 * Returns string in green using ANSI codes
 * @param s The string to transform
 */
export const greenString = (s: string) => ANSI_GREEN + s + ANSI_RESET;
/**
 * Returns string in yellow using ANSI codes
 * @param s The string to transform
 */
export const yellowString = (s: string) => ANSI_YELLOW + s + ANSI_RESET;
/**
 * Returns string in blue using ANSI codes
 * @param s The string to transform
 */
export const blueString = (s: string) => ANSI_BLUE + s + ANSI_RESET;
/**
 * Returns string in magenta using ANSI codes
 * @param s The string to transform
 */
export const magentaString = (s: string) => ANSI_MAGENTA + s + ANSI_RESET;
/**
 * Returns string in cyan using ANSI codes
 * @param s The string to transform
 */
export const cyanString = (s: string) => ANSI_CYAN + s + ANSI_RESET;
/**
 * Returns string in white using ANSI codes
 * @param s The string to transform
 */
export const whiteString = (s: string) => ANSI_WHITE + s + ANSI_RESET;
/**
 * Returns string in gray using ANSI codes
 * @param s The string to transform
 */
export const grayString = (s: string) => ANSI_GRAY + s + ANSI_RESET;
/**
 * Returns string in bright using ANSI codes
 * @param s The string to transform
 */
export const brightString = (s: string) => ANSI_BRIGHT + s + ANSI_RESET;
/**
 * Returns string in dim using ANSI codes
 * @param s The string to transform
 */
export const dimString = (s: string) => ANSI_DIM + s + ANSI_RESET;
/**
 * Returns string in underscore using ANSI codes
 * @param s The string to transform
 */
export const underscoreString = (s: string) => ANSI_UNDERSCORE + s + ANSI_RESET;
/**
 * Returns string in blink using ANSI codes
 * @param s The string to transform
 */
export const blinkString = (s: string) => ANSI_BLINK + s + ANSI_RESET;
/**
 * Returns string in reverse using ANSI codes
 * @param s The string to transform
 */
export const reverseString = (s: string) => ANSI_REVERSE + s + ANSI_RESET;
/**
 * Returns string in hidden using ANSI codes
 * @param s The string to transform
 */
export const hiddenString = (s: string) => ANSI_HIDDEN + s + ANSI_RESET;
