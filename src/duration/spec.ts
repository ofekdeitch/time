import {
    DAYS_IN_MONTH,
    DAYS_IN_WEEK,
    DAYS_IN_YEAR,
    HOURS_IN_DAY,
    MILLISECONDS_IN_DAY,
    MILLISECONDS_IN_HOUR,
    MILLISECONDS_IN_MINUTE,
    MILLISECONDS_IN_MONTH,
    MILLISECONDS_IN_SECOND,
    MILLISECONDS_IN_WEEK,
    MILLISECONDS_IN_YEAR,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
} from "../constants";
import { Duration } from ".";

describe("Duration", () => {
    describe("seconds", () => {
        it("toMilliseconds", () => {
            expect(Duration.seconds(20).toMilliseconds()).toEqual(20 * MILLISECONDS_IN_SECOND);
        });

        it("toSeconds", () => {
            expect(Duration.seconds(20).toSeconds()).toEqual(20);
        });

        it("toMinutes", () => {
            expect(Duration.seconds(120).toMinutes()).toEqual(2);
        });
    });

    describe("minutes", () => {
        it("toMilliseconds", () => {
            expect(Duration.minutes(20).toMilliseconds()).toEqual(20 * MILLISECONDS_IN_MINUTE);
        });

        it("toSeconds", () => {
            expect(Duration.minutes(20).toSeconds()).toEqual(20 * SECONDS_IN_MINUTE);
        });

        it("toMinutes", () => {
            expect(Duration.minutes(5).toMinutes()).toEqual(5);
        });

        it("toHours", () => {
            expect(Duration.minutes(120).toHours()).toEqual(2);
        });
    });

    describe("hours", () => {
        it("toMilliseconds", () => {
            expect(Duration.hours(20).toMilliseconds()).toEqual(20 * MILLISECONDS_IN_HOUR);
        });

        it("toSeconds", () => {
            expect(Duration.hours(2).toSeconds()).toEqual(2 * MINUTES_IN_HOUR * SECONDS_IN_MINUTE);
        });

        it("toMinutes", () => {
            expect(Duration.hours(2).toMinutes()).toEqual(120);
        });

        it("toHours", () => {
            expect(Duration.hours(2).toHours()).toEqual(2);
        });
    });

    describe("days", () => {
        it("toMilliseconds", () => {
            expect(Duration.days(0.5).toMilliseconds()).toEqual(0.5 * MILLISECONDS_IN_DAY);
        });

        it("toSeconds", () => {
            expect(Duration.days(0.5).toSeconds()).toEqual(0.5 * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE);
        });

        it("toMinutes", () => {
            expect(Duration.days(0.5).toMinutes()).toEqual(0.5 * HOURS_IN_DAY * MINUTES_IN_HOUR);
        });

        it("toHours", () => {
            expect(Duration.days(2).toHours()).toEqual(2 * HOURS_IN_DAY);
        });

        it("toDays", () => {
            expect(Duration.days(2).toDays()).toEqual(2);
        });

        it("toWeeks", () => {
            expect(Duration.days(7).toWeeks()).toEqual(1);
        });

        it("toMonths", () => {
            expect(Duration.days(30).toMonths()).toEqual(1);
        });
    });

    describe("weeks", () => {
        it("toMilliseconds", () => {
            expect(Duration.weeks(1).toMilliseconds()).toEqual(1 * MILLISECONDS_IN_WEEK);
        });

        it("toSeconds", () => {
            expect(Duration.weeks(1).toSeconds()).toEqual(
                1 * DAYS_IN_WEEK * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE,
            );
        });

        it("toMinutes", () => {
            expect(Duration.weeks(1).toMinutes()).toEqual(1 * DAYS_IN_WEEK * HOURS_IN_DAY * MINUTES_IN_HOUR);
        });

        it("toHours", () => {
            expect(Duration.weeks(2).toHours()).toEqual(2 * DAYS_IN_WEEK * HOURS_IN_DAY);
        });

        it("toDays", () => {
            expect(Duration.weeks(2).toDays()).toEqual(2 * DAYS_IN_WEEK);
        });

        it("toWeeks", () => {
            expect(Duration.weeks(2).toWeeks()).toEqual(2);
        });
    });

    describe("months", () => {
        it("toMilliseconds", () => {
            expect(Duration.months(1).toMilliseconds()).toEqual(1 * MILLISECONDS_IN_MONTH);
        });

        it("toSeconds", () => {
            expect(Duration.months(1).toSeconds()).toEqual(
                1 * DAYS_IN_MONTH * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE,
            );
        });

        it("toMinutes", () => {
            expect(Duration.months(1).toMinutes()).toEqual(1 * DAYS_IN_MONTH * HOURS_IN_DAY * MINUTES_IN_HOUR);
        });

        it("toHours", () => {
            expect(Duration.months(2).toHours()).toEqual(2 * DAYS_IN_MONTH * HOURS_IN_DAY);
        });

        it("toDays", () => {
            expect(Duration.months(2).toDays()).toEqual(2 * DAYS_IN_MONTH);
        });

        it("toMonths", () => {
            expect(Duration.months(2).toMonths()).toEqual(2);
        });
    });

    describe("years", () => {
        it("toDays", () => {
            expect(Duration.years(2).toMilliseconds()).toEqual(2 * MILLISECONDS_IN_YEAR);
        });

        it("toDays", () => {
            expect(Duration.years(2).toDays()).toEqual(2 * DAYS_IN_YEAR);
        });

        it("toYears", () => {
            expect(Duration.years(3).toYears()).toEqual(3);
        });
    });
});
