import * as RegExpUtils from '#mjljm/js-lib/reg-exp-utils';

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
export const yyyymmdToIso = (s: string) => s.slice(0, 4) + '-' + s.slice(4, 6) + '-' + s.slice(6, 8);

/**
 * Adds a tab at the beginning of each new line in string using lineSep as line separator
 *
 * @param s The string to tabify
 *
 */
export const tabify =
	(tabChar: string, count = 1) =>
	(s: string) =>
		tabChar.repeat(count) + s.replaceAll(tabifyRegExp, '$1' + tabChar);
const tabifyRegExp = new RegExp(RegExpUtils.capture(RegExpUtils.lineBreak), 'g');

/**
 * Returns true if the line contains an eol character
 *
 * @param s The string to check
 *
 */
export const isMultiLine = (s: string): boolean => isMultiLineRegExp.test(s);
const isMultiLineRegExp = new RegExp(RegExpUtils.lineBreak);
