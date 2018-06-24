import { createStore } from "redux";
import rootReducer from "~/reducers";

const store = createStore(rootReducer);

describe("reducerのテスト", () => {
  let initState: any;
  beforeEach(() => {
    initState = rootReducer(undefined, { type: null });
  });

  it("INCREMENT_ENTHUSIASM", () => {
    const { user } = initState;
    const updateName = "test_name";
    const expectedState = {
      ...initState,
      user: {
        name: updateName
      }
    };

    const action = store.dispatch({ type: "UPDATE_NAME", payload: updateName });
    const returnedState = rootReducer(undefined, action);
    expect(returnedState).toEqual(expectedState);
  });
});
