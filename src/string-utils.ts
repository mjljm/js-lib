import { RegExpUtils } from '#mjljm/js-lib/index';

/**
 * Converts camel name to khebab name.
 *
 * @param str - The string to convert.
 *
 */
export const kebabize = (str: string) =>
	str.replace(
		/[A-Z]+(?![a-z])|[A-Z]/g,
		($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
	);

/**
 * Converts date in 'YYYY-MM-DD' format to 'YYYYMMDD' format.
 *
 * @param s - The string to convert.
 *
 */
export const isoToYyyymmdd = (s: string) =>
	s.slice(0, 4) + s.slice(5, 7) + s.slice(8, 10);

/**
 * Converts date in 'YYYYMMDD' format 'YYYY-MM-DD' format.
 *
 * @param s - The string to convert.
 *
 */
export const yyyymmdToIso = (s: string) =>
	s.slice(0, 4) + '-' + s.slice(4, 6) + '-' + s.slice(6, 8);

/**
 * Adds a tab at the beginning of each new line in string using lineSep as line separator
 *
 * @param s The string to tabify
 *
 */
export const tabify = (s: string, tabChar = '  ') =>
	tabChar + s.replaceAll(lineBreakRegExp, '$1' + tabChar);
const lineBreakRegExp = new RegExp(
	RegExpUtils.capture(RegExpUtils.lineBreak),
	'g'
);
