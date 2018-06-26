import rootReducer from "~/reducers";

describe("typescriptのimportができる", () => {
  it("ts-jest CLIでテストが実行される", () => {
    expect(!!rootReducer).toBe(true);
  });
});
