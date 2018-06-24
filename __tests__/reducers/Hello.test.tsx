import { createStore } from "redux";
import rootReducer from "~/reducers";

const store = createStore(rootReducer);

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
        enthusiasm: hello.enthusiasm + 1
      }
    };

    const action = store.dispatch({ type: "INCREMENT_ENTHUSIASM" }); // ここもうちょっと書き換えないといけないけど、tsにまだ慣れてないから一旦保留
    const returnedState = rootReducer(undefined, action);
    expect(returnedState).toEqual(expectedState);
  });

  it("DECREMENT_ENTHUSIASM: 今はinitStateが0だから厳密にはこれではdecテストが出来ていない", () => {
    const { hello } = initState;
    const expectedState = {
      ...initState,
      hello: {
        enthusiasm: hello.enthusiasm - 1 < 0 ? 0 : hello.enthusiasm - 1
      }
    };

    const action = store.dispatch({ type: "DECREMENT_ENTHUSIASM" });
    const returnedState = rootReducer(initState, action);
    expect(returnedState).toEqual(expectedState);
  });
});
