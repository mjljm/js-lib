export const zeroOrMore = (s: string): string => `(?:${s})*`;
export const oneOrMore = (s: string): string => `(?:${s})+`;
export const repeatBetween = (s: string, low: string, high = ''): string =>
	`(?:${s}){${low},${high}}`;
export const optional = (s: string): string => `(?:${s})?`;
export const either = (...args: ReadonlyArray<string>): string => `(?:${args.join('|')})`;
export const makeLine = (s: string): string => `^${s}$`;

export const star = /\*/.source;
export const dot = /\./.source;
export const number = /\d+/.source;
export const letter = /[A-Za-z]/.source;
export const slash = /\//.source;
export const colon = /:/.source;
export const singleQuote = /'/.source;
