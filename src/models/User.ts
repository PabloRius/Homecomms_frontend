export interface User {
  username: string;
  email: string;
  password: string;
}
export interface registerPayload extends User {}
export interface loginPayload extends Pick<User, "password" | "email"> {}
export interface loggedUser extends Pick<User, "username" | "email"> {}
