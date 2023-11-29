export const toJson = (regexp: string | RegExp) =>
	typeof regexp === 'string' ? regexp : regexp.source;
export const zeroOrMore = (s: string): string => `(?:${s})*`;
export const oneOrMore = (s: string): string => `(?:${s})+`;
export const repeatBetween = (s: string, low: string, high = ''): string =>
	`(?:${s}){${low},${high}}`;
export const optional = (s: string): string => `(?:${s})?`;
export const either = (...args: ReadonlyArray<string>): string =>
	`(?:${args.join('|')})`;
export const makeLine = (s: string): string => `^${s}$`;
export const makeEndOfLine = (s: string): string => `${s}$`;
export const negativeLookAhead = (s: string): string => `(?!${s})`;
export const positiveLookAhead = (s: string): string => `(?=${s})`;
/*export const range = (start: string, end: string): string =>
	`[${start}-${end}]`;*/

export const escapeRegex = (s: string) =>
	s.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');

export const backslash = '\\';
export const star = backslash + '*';
export const dot = backslash + '.';
export const digit = backslash + 'd';
export const number = either('0', '[1-9]' + zeroOrMore(digit));
export const letter = /[A-Za-z]/.source;
export const slash = backslash + '/';
