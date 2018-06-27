import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as actions from "~/actions/User";
import { UserState } from "~/types/User";

const initialState: UserState = {
  name: "anonimous",
  auth: ""
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

const signIn = (): void => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result: any) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function(error: any) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    });
};

const signOut = (): void => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error: any) {
      // An error happened.
    });
};

const name = handleActions(
  {
    [actions.UPDATE_NAME]: (state, { payload }: Action<UserState["name"]>) =>
      payload
  },
  initialState.name
);

const auth = handleActions(
  {
    [actions.SIGN_IN]: (state, { payload }: Action<UserState["auth"]>): any => {
      signIn();
      return initialState.auth;
    },
    [actions.SIGN_OUT]: (
      state,
      { payload }: Action<UserState["auth"]>
    ): any => {
      signOut();
      return initialState.auth;
    },
    [actions.CHECK_AUTH]: (
      state,
      { payload }: Action<UserState["auth"]>
    ): any => {
      console.log(firebase.auth().currentUser);
      return initialState.auth;
    }
  },
  initialState.auth
);

export default combineReducers({
  name,
  auth
});
