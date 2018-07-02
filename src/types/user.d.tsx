enum Gender {
  Male,
  Female,
  None
}

declare type UserState = {
  name: string;
  isLogin: boolean;
  gender?: Gender;
};
