import { Duration } from "../duration";
import { MILLISECONDS_IN_HOUR } from "../constants";
import { Instant } from ".";

describe("Instant", () => {
    const now = new Date("2010-06-25T21:01:00.000Z");

    beforeEach(() => {
        jest.spyOn(Date, "now").mockImplementation(() => now.valueOf());
    });

    it.only("now", () => {
        expect(Instant.get().equals(now)).toBeTruthy();
    });

    it("add", () => {
        const oneHourFromNow = new Date(now.valueOf() + MILLISECONDS_IN_HOUR);

        expect(Instant.get().add(Duration.hours(1)).equals(oneHourFromNow)).toBeTruthy();
    });

    it("reduce", () => {
        const oneHourBeforeNow = new Date(now.valueOf() - MILLISECONDS_IN_HOUR);

        expect(Instant.get().reduce(Duration.hours(1)).equals(oneHourBeforeNow)).toBeTruthy();
    });

    describe("diff", () => {
        it("first date is bigger", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() - diff.toMilliseconds());

            expect(instant1.diff(instant2)).toEqual(diff);
        });

        it("first date is bigger", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() + diff.toMilliseconds());

            expect(instant1.diff(instant2)).toEqual(diff);
        });
    });

    describe("isBefore", () => {
        it("should be true", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() + diff.toMilliseconds());

            expect(instant1.isBefore(instant2)).toBeTruthy();
        });

        it("should be false", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() - diff.toMilliseconds());

            expect(instant1.isBefore(instant2)).toBeFalsy();
        });
    });

    describe("isAfter", () => {
        it("should be true", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() - diff.toMilliseconds());

            expect(instant1.isAfter(instant2)).toBeTruthy();
        });

        it("should be false", () => {
            const diff = Duration.minutes(5);

            const instant1 = Instant.get();
            const instant2 = new Instant(instant1.valueOf() - diff.toMilliseconds());

            expect(instant2.isAfter(instant1)).toBeFalsy();
        });
    });
});
