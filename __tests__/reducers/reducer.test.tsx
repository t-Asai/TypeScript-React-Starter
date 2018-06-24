import rootReducer from "~/reducers";

describe("typescriptのimportができる", () => {
  it("ts-jest CLIでテストが実行される", () => {
    // @ts-ignore: Unreachable code error
    expect(!!rootReducer).toBe(true);
  });
});
