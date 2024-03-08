import * as JsPatches from '#mjljm/js-lib/patches';

/**
 * Model
 */
interface Month {
	readonly nbDaysInMonth: number;
	readonly monthStartMs: number;
}

const makeYearMonths = (daysInMonth: ReadonlyArray<number>) =>
	daysInMonth.reduce(
		(acc, nbDaysInMonth) => {
			const last = acc[acc.length - 1] as Month;
			acc.push({ nbDaysInMonth, monthStartMs: last.monthStartMs + nbDaysInMonth * DAY_MS } as Month);
			return acc;
		},
		[{ nbDaysInMonth: 0, monthStartMs: 0 } as Month]
	);

/**
 * Constants
 */
const MAX_YEAR = 271_819;

const SECOND_MS = 1_000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;
const WEEK_MS = 7 * DAY_MS;
const NORMAL_YEAR_MS = 365 * DAY_MS;
const BISEXT_YEAR_MS = NORMAL_YEAR_MS + DAY_MS;
const FOUR_YEARS_MS = BISEXT_YEAR_MS + 3 * NORMAL_YEAR_MS;
const HUNDRED_YEARS_MS = 25 * FOUR_YEARS_MS - DAY_MS;
const FOUR_HUNDRED_YEARS_MS = 4 * HUNDRED_YEARS_MS + DAY_MS;
const YEAR_START_2001_MS = 978_307_200_000;
const normalYearDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYearDaysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const normalYearMonths = makeYearMonths(normalYearDaysInMonth);
const leapYearMonths = makeYearMonths(leapYearDaysInMonth);

/**
 * Returns the timestamp of date `year`/1/1 00:00:00:000+00:00 and whether this year is a leap year or not. No input parameters check!
 */
export const unsafeYearToMs = (year: number) => {
	// 2001 is the start of a 400-year period whose last year is bissextile
	const offset = year - 2001;
	const q400Years = Math.floor(offset / 400);
	const offset400Years = q400Years * 400;
	const r400Years = offset - offset400Years;
	const q100Years = Math.floor(r400Years / 100);
	const offset100Years = q100Years * 100;
	const r100Years = r400Years - offset100Years;
	const q4Years = Math.floor(r100Years / 4);
	const offset4Years = q4Years * 4;
	const r4Years = r100Years - offset4Years;

	const isLeapYear = r4Years === 3 && (r100Years !== 99 || r400Years === 399);
	//module7Ms is the same as Ms modulo 7. This is based on the fact that any week day of year y is the same as this of year y + 400
	const yearModulo7StartMs = q100Years * HUNDRED_YEARS_MS + q4Years * FOUR_YEARS_MS + r4Years * NORMAL_YEAR_MS;

	return {
		yearStartMs: q400Years * FOUR_HUNDRED_YEARS_MS + yearModulo7StartMs,
		yearModulo7StartMs,
		isLeapYear
	};
};

/**
 * Converts a day number to milliseconds
 */
export const dayNumberToMs = (day: number) => (day - 1) * DAY_MS;

/**
 * Converts a week number to milliseconds
 */
export const weekNumberToMs = (isoWeek: number) => (isoWeek - 1) * WEEK_MS;

/**
 * Returns the offset in milliseconds between the start of the year and the start of month `month` for a normal year and a leap year. No input parameters check!
 */
export const monthToMs = (month: number, isLeapYear: boolean): number =>
	((isLeapYear ? leapYearMonths : normalYearMonths)[month - 1] as Month).monthStartMs;

/**
 * Offset in ms between the 1st day of the year and the first day of the first iso week of the year
 */
export const getFirstIsoWeekMs = (firstDayOfYearWeekDay: number): number =>
	(firstDayOfYearWeekDay <= 4 ? 1 - firstDayOfYearWeekDay : 8 - firstDayOfYearWeekDay) * DAY_MS;

/**
 * Calculates the number of iso weeks in a year
 */
export const getNbIsoWeeksInYear = (firstDayOfYearWeekDay: number, isLeapYear: boolean): number =>
	firstDayOfYearWeekDay === 4 || (firstDayOfYearWeekDay === 3 && isLeapYear) ? 53 : 52;

/**
 * returns the number of days in a year
 */
export const getNbDaysInYear = (isLeapYear: boolean): number => (isLeapYear ? 366 : 365);

/**
 * Calculates the week day of a timestamp. Calculation is based on the fact that 4/1/1970 was a sunday.
 */
export const getWeekDay = (timestamp: number): number => {
	const weekDay0 = JsPatches.intModulo(7)(Math.floor(timestamp / DAY_MS - 3));
	return weekDay0 === 0 ? 7 : weekDay0;
};
