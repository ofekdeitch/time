import * as Exports from ".";

describe("Exports", () => {
    it("exports the Duration class", () => {
        expect((Exports as any).Instant.get()).not.toBeNull();
    });

    it("exports the Instant class", () => {
        expect((Exports as any).Duration.minutes(3)).not.toBeNull();
    });
});
