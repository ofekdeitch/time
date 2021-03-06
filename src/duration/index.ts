import {
    DAYS_IN_MONTH,
    DAYS_IN_WEEK,
    DAYS_IN_YEAR,
    HOURS_IN_DAY,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
    MILLISECONDS_IN_DAY,
    MILLISECONDS_IN_HOUR,
    MILLISECONDS_IN_MINUTE,
    MILLISECONDS_IN_MONTH,
    MILLISECONDS_IN_SECOND,
    MILLISECONDS_IN_WEEK,
    MILLISECONDS_IN_YEAR,
} from "../constants";
import { DeconstructedDuration } from "./glossary";

export class Duration {
    private millis: number;

    constructor(millis: number) {
        this.millis = millis;
    }

    toMilliseconds(): number {
        return this.millis;
    }

    toSeconds(): number {
        return this.millis / MILLISECONDS_IN_SECOND;
    }

    toMinutes(): number {
        return this.toSeconds() / SECONDS_IN_MINUTE;
    }

    toHours(): number {
        return this.toMinutes() / MINUTES_IN_HOUR;
    }

    toDays(): number {
        return this.toHours() / HOURS_IN_DAY;
    }

    toWeeks(): number {
        return this.toDays() / DAYS_IN_WEEK;
    }

    toMonths(): number {
        return this.toDays() / DAYS_IN_MONTH;
    }

    toYears(): number {
        return this.toDays() / DAYS_IN_YEAR;
    }

    add(duration: Duration): Duration {
        return Duration.milliseconds(this.toMilliseconds() + duration.toMilliseconds());
    }

    reduce(duration: Duration): Duration {
        return Duration.milliseconds(this.toMilliseconds() - duration.toMilliseconds());
    }

    deconstruct(): DeconstructedDuration {
        let val = Duration.milliseconds(this.toMilliseconds());

        const years = Math.floor(val.toYears());
        val = val.reduce(Duration.years(years));

        const months = Math.floor(val.toMonths());
        val = val.reduce(Duration.months(months));

        const weeks = 0;

        const days = Math.floor(val.toDays());
        val = val.reduce(Duration.days(days));

        const hours = Math.floor(val.toHours());
        val = val.reduce(Duration.hours(hours));

        const minutes = Math.floor(val.toMinutes());
        val = val.reduce(Duration.minutes(minutes));

        const seconds = Math.floor(val.toSeconds());
        val = val.reduce(Duration.seconds(seconds));

        const milliseconds = val.toMilliseconds();

        return {
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            weeks,
            months,
            years,
        };
    }

    static milliseconds(amount: number): Duration {
        return new Duration(amount);
    }

    static seconds(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_SECOND);
    }

    static minutes(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_MINUTE);
    }

    static hours(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_HOUR);
    }

    static days(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_DAY);
    }

    static weeks(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_WEEK);
    }

    static months(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_MONTH);
    }

    static years(amount: number): Duration {
        return new Duration(amount * MILLISECONDS_IN_YEAR);
    }
}
