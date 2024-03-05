/**
 * The following code corrects a bug in typescript where Array.isArray narrows a ReadonlyArray to any[]. To remove when this bug has been corrected. See https://github.com/microsoft/TypeScript/issues/17002
 */
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArrayType<T> = Extract<true extends T & false ? any[] : T extends readonly any[] ? T : unknown[], T>;

/**
 * Type that generates a range of numeric literal types
 */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
