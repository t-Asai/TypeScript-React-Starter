import { createStore } from "redux";
import rootReducer from "~/reducers";

const store = createStore(rootReducer);

describe("typescriptのimportができる", () => {
  it("ts-jest CLIでテストが実行される", () => {
    // @ts-ignore: Unreachable code error
    expect(!!rootReducer).toBe(true);
  });
});

describe("reducerのテスト", () => {
  let initState: any;
  beforeEach(() => {
    initState = rootReducer(undefined, { type: null });
  });

  it("INCREMENT_ENTHUSIASM", () => {
    const { hello } = initState;
    const expectedState = {
      ...initState,
      hello: {
        name: hello.name,
        enthusiasm: hello.enthusiasm + 1
      }
    };

    const action = store.dispatch({ type: "INCREMENT_ENTHUSIASM" }); // ここもうちょっと書き換えないといけないけど、tsにまだ慣れてないから一旦保留
    const returnedState = rootReducer(undefined, action);
    expect(returnedState).toEqual(expectedState);
  });
});
