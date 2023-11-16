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
