import { Duration } from "../duration";

export class Instant extends Date {
    constructor(arg: any) {
        super(arg);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, Instant.prototype);
    }

    static get(): Instant {
        return new Instant(Date.now());
    }

    static now(): number {
        throw new Error("Please use Instant.get()");
    }

    add(duration: Duration): Instant {
        const val = new Date(this.valueOf() + duration.toMilliseconds());
        return new Instant(val);
    }

    reduce(duration: Duration): Instant {
        const val = new Date(this.valueOf() - duration.toMilliseconds());
        return new Instant(val);
    }

    equals(instant: Instant | Date): boolean {
        return this.valueOf() === instant.valueOf();
    }

    diff(instant: Instant): Duration {
        const millis = Math.abs(this.valueOf() - instant.valueOf());
        return Duration.milliseconds(millis);
    }

    isBefore(instant: Instant): boolean {
        return this.valueOf() < instant.valueOf();
    }

    isAfter(instant: Instant): boolean {
        return this.valueOf() > instant.valueOf();
    }
}
