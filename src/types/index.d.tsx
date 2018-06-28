declare type State = {
  user: { [P in keyof UserState]: UserState[P] };
  hello: { [P in keyof HelloState]: HelloState[P] };
};
